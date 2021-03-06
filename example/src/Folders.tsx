import React, { FC } from 'react'
import { Stack, StackProps, List } from '@chakra-ui/react'
import { useConstructor } from './react/useConstructor'
import { createRequest$ } from './state/request'
import { useObservable } from './react/useObservable'
import Loader from './Loader'
import ListItem from './ListItem'
import * as api from './api'

interface FoldersProps extends StackProps {
  selectedFolder: string | null
  onFolderSelect: (folder: string | null) => void
}

const Folders: FC<FoldersProps> = ({
  selectedFolder,
  onFolderSelect,
  ...otherProps
}) => {
  // initializer runs only once on first render
  const { request$ } = useConstructor(() => {
    const request$ = createRequest$(api.fetchFolders)
    request$.actions.execute()
    return {
      request$
    }
  })

  // request$ observable is translated to react state
  const request = useObservable(request$)

  return (
    <Stack {...otherProps} position='relative'>
      <Loader active={request.isPending} />
      <List h='100%' overflow='auto'>
        <ListItem
          key={'all'}
          onClick={() => {
            onFolderSelect(null)
          }}
          active={selectedFolder === null}
          title={'All'}
        />
        {request.data?.map((folder) => (
          <ListItem
            key={folder}
            onClick={() => {
              onFolderSelect(folder)
            }}
            active={selectedFolder === folder}
            title={folder}
          />
        ))}
      </List>
    </Stack>
  )
}

export default Folders
