import React, { useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  const [inputActive, setInputActive] = useState(false)
  const [folderName, setFolderName] = useState('Test')
  const items = new Array(15).fill(1)

  const handleSubmit = () => {
    console.log('submit')
  }

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='pt-4 w-2/3 flex'>
        <div className='mt-1 mr-4'>🎃</div>
        <div className='w-10/12'>
          <input
            className='font-semibold text-2xl text-[#3B353C] focus:outline-none bg-transparent'
            value={folderName}
            id='folderName'
            onChange={(e) => setFolderName(e.target.value)}
          />
          <form onSubmit={handleSubmit} className='mr-6'>
            <input
              onClick={() => setInputActive(true)}
              onBlur={() => setInputActive(false)}
              placeholder='Write a new task...'
              className={`mt-4 py-4 p-2 w-full rounded-2xl text-[#78787E] shadow-sm focus:outline-none ${
                inputActive ? 'bg-white' : 'bg-[#ededf0]'
              }`}
            />
          </form>
          <div className='mt-4 pr-6 overflow-y-auto max-h-[800px] scrollbar-thin scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-track-[#EAE9EA] scrollbar-thumb-[#9E9CA0]'>
            {items.map((item, index) => (
              <TodoItem text={'Testing'} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList
