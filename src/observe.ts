import { Transaction } from './transaction'
import { Observable } from './observable'

export type EffectCleanup = () => void
export type Effect<State> = (value: State) => EffectCleanup | void
export type Dispose = () => void

export const observe = <State>(
  observable: Observable<State>,
  effect: Effect<State>
): Dispose => {
  let cleanup: EffectCleanup | void
  let prevState: State
  let firstInvocation = true
  const transactions = new Set<Transaction>()
  const runCleanup = () => {
    if (typeof cleanup === 'function') {
      cleanup()
    }
  }
  const runEffect = () => {
    let state = observable.get()
    if (firstInvocation || !Object.is(prevState, state)) {
      runCleanup()
      cleanup = effect(state)
      prevState = state
      firstInvocation = false
    }
  }

  const unsubscribe = observable.subscribe((transaction) => {
    if (transaction) {
      if (!transactions.has(transaction)) {
        transactions.add(transaction)
        transaction.onCommitPhaseTwo(() => {
          runEffect()
          transactions.delete(transaction)
        })
        transaction.onRollback(() => {
          transactions.delete(transaction)
        })
      }
    } else {
      runEffect()
    }
  })

  runEffect()

  const dispose = () => {
    unsubscribe()
    runCleanup()
  }

  return dispose
}
