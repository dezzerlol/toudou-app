import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { getTodosMutation } from '../../services/mutations'
import TodoItem from './TodoItem'

const TodoList = () => {
  const router = useRouter()

  const { data: todos, isLoading } = useQuery(['get-todos', { folderId: router.query.id }], () =>
    getTodosMutation(router.query.id as string)
  )
  const [inputActive, setInputActive] = useState(false)
  const [folderName, setFolderName] = useState('Test')
  const items = new Array(15).fill(1)

  const handleSubmit = () => {
    console.log('submit')
  }

  console.log(todos)

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
            {todos && todos.map((todo: any) => (
              <TodoItem text={todo.text} key={todo.id} icon={todo.icon} isCompleted={todo.completed} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList
