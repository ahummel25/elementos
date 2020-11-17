import {
  Observable,
  ExtractObservableType,
  ObserverChangeSubscriber
} from './observable'
import { getCurrentTransaction } from './context'
import { Transaction } from './transaction'
import { createSubscriptionManager, Unsubscribe } from './utils/subscription'
import { memoized } from './utils/memoize'

type Deriver<Child, DerivedState> = (
  state: ExtractObservableType<Child>
) => DerivedState

export const derived = <
  Child extends Observable<any>,
  DerivedState = ExtractObservableType<Child>
>(
  child: Child,
  deriver: (state: ExtractObservableType<Child>) => DerivedState
): Observable<DerivedState> => {
  const getChildValue = (transaction?: Transaction) => {
    return child.get((x) => x, transaction)
  }
  const memoizedDeriver = memoized(deriver)
  const observerChangeManager = createSubscriptionManager<
    Parameters<ObserverChangeSubscriber>
  >()
  let unsubscribeFromChild: Unsubscribe | undefined
  const manager = createSubscriptionManager<[Transaction | undefined]>({
    onSubscriberChange: ({ count }) => {
      observerChangeManager.notifySubscribers({ count })
      if (count > 0 && !unsubscribeFromChild) {
        unsubscribeFromChild = subscribeToChild()
      } else if (count === 0 && unsubscribeFromChild) {
        unsubscribeFromChild()
        unsubscribeFromChild = undefined
      }
    }
  })
  const transactionDerivers = new WeakMap<
    Transaction,
    Deriver<Child, DerivedState>
  >()

  const subscribeToChild = () => {
    const unsubscribe = child.subscribe((transaction?: Transaction) => {
      if (transaction) {
        if (!transactionDerivers.has(transaction)) {
          transaction.onCommitPhaseOne(() => {
            transactionDerivers.delete(transaction)
          })
          transaction.onRollback(() => {
            transactionDerivers.delete(transaction)
          })
          transactionDerivers.set(transaction, memoized(deriver))
        }
      }
      manager.notifySubscribers(transaction)
    })

    return unsubscribe
  }

  let observable: Observable<DerivedState> = {
    get: (
      selector = (x) => x as any,
      transaction = getCurrentTransaction()
    ) => {
      if (transaction && transactionDerivers.has(transaction)) {
        const transactionDeriver = transactionDerivers.get(transaction)
        return selector(
          transactionDeriver?.(getChildValue(transaction)) as DerivedState
        )
      }
      return selector(memoizedDeriver(getChildValue()))
    },
    subscribe: (subscriber: (transaction?: Transaction) => void) => {
      return manager.subscribe(subscriber)
    },
    onObserverChange: (subscriber) => {
      return observerChangeManager.subscribe(subscriber)
    }
  }

  return observable
}
