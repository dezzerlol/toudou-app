import React, { useState } from 'react'
import { debounce } from '../../lib/debounce'

const TodoFolderName = ({ folderName }: any) => {
  const [name, setName] = useState(folderName)

  const handleFolderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {}

  
  return (
    <input
      className='font-semibold text-2xl text-[#3B353C] focus:outline-none bg-transparent'
      value={folderName}
      id='folderName'
      onChange={(e) => setName(e.target.value)}
    />
  )
}

export default TodoFolderName
