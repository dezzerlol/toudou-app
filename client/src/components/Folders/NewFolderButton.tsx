import { useMutation, useQueryClient } from '@tanstack/react-query'
import { BiCommand, BiPlus } from 'react-icons/bi'
import { createFolderMutation } from '../../services/mutations'
// import from node_modules because of ssr
import useKeyboardShortcut from '../../../node_modules/use-keyboard-shortcut/lib/useKeyboardShortcut'


const NewFolderButton = () => {
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation(['create-folder'], createFolderMutation, {
    onSuccess: () => {
      queryClient.invalidateQueries(['get-folders'])
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
      className='p-4 w-full flex items-center justify-between cursor-pointer rounded-lg font-medium'>
      <div className='flex items-center'>
        <span>
          <BiPlus size={18} />
        </span>
        <span className='ml-[6px]'>Create new folder</span>
      </div>
      <div className='flex items-center'>
        <span className={`flex items-center justify-center bg-[#F5F4F6] w-6 h-6 text-sm rounded-md text-[#9E9CA0]`}>
          <BiCommand />
        </span>
        <span
          className={`mr-4 ml-2 bg-[#F5F4F6] flex items-center justify-center w-6 h-6 text-sm rounded-md text-[#9E9CA0]`}>
          B
        </span>
      </div>
    </button>
  )
}

export default NewFolderButton
