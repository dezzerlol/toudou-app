import React from 'react'
import { useUpdateFolder } from '../../hooks/useUpdateFolder'
import { debounce } from '../../lib/debounce'

const TodoFolderName = ({ folder }: any) => {
  const { mutate } = useUpdateFolder()

  const handleFolderNameChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    mutate({ title: e.target.value, id: folder.id })
  }, 800)

  return (
    <input
      className='font-semibold text-2xl text-[#3B353C] dark:text-[#8A8D94] focus:outline-none bg-transparent'
      defaultValue={folder && folder.title ? folder.title : ''}
      key={folder && folder.title ? folder.title : ''}
      id='folder-name'
      onChange={handleFolderNameChange}
    />
  )
}

export default TodoFolderName
