import { useMutation, useQueryClient } from '@tanstack/react-query'
import { BiCommand, BiPlus } from 'react-icons/bi'
import { createFolderMutation } from '../../services/mutations'
// import from node_modules because of ssr
import useKeyboardShortcut from '../../../node_modules/use-keyboard-shortcut/lib/useKeyboardShortcut'

const NewFolderButton = () => {
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation(['create-folder'], createFolderMutation, {
    onMutate: async (addedFolder) => {
      await queryClient.cancelQueries(['get-folders'])
      const previousFolders: any = queryClient.getQueryData(['get-folders'])

      const newFolder = { ...addedFolder, id: previousFolders[0] ? previousFolders[0].id + 1 : 1, todos: [] }
      queryClient.setQueryData(['get-folders'], (old: any) => [newFolder, ...old])

      return { newFolder }
    },
  })

  const createNewList = () => {
    mutate({ title: 'New folder 1' })
  }

  useKeyboardShortcut(['Control', 'B'], createNewList)

  return (
    <button
      onClick={createNewList}
      disabled={isLoading}
      className='p-4 w-full flex items-center justify-between cursor-pointer rounded-lg font-medium dark:text-[#F6F6F9]'>
      <div className='flex items-center'>
        <span>
          <BiPlus size={18} />
        </span>
        <span className='ml-[6px]'>Create new folder</span>
      </div>
      <div className='flex items-center '>
        <span
          className={`flex items-center justify-center  w-6 h-6 text-sm rounded-md bg-[#F5F4F6] text-[#9E9CA0] dark:bg-[#474954]`}>
          <BiCommand />
        </span>
        <span
          className={`mr-4 ml-2 flex items-center justify-center w-6 h-6 text-sm rounded-md bg-[#F5F4F6] text-[#9E9CA0] dark:bg-[#474954]`}>
          B
        </span>
      </div>
    </button>
  )
}

export default NewFolderButton
