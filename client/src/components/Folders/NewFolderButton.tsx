import React from 'react'
import { BiPlus, BiCommand } from 'react-icons/bi'

const NewFolderButton = () => {
    
  const createNewList = () => {
    console.log('create new list')
  }

  return (
    <button
      onClick={createNewList}
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
          E
        </span>
      </div>
    </button>
  )
}

export default NewFolderButton
