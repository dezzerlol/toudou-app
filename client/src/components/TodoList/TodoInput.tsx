import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useCreateTodo } from '../../hooks/useCreateTodo'

const TodoInput = () => {
  const router = useRouter()
  const [todoText, setTodoText] = useState('')

  const { mutate } = useCreateTodo(router.query.id as string)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutate({ folderId: router.query.id!.toString(), text: todoText })
    setTodoText('')
  }

  return (
    <form onSubmit={handleSubmit} className='mr-6'>
      <input
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
        placeholder='Write a new task...'
        className={`mt-4 py-4 p-2 w-full rounded-2xl text-[#78787E] shadow-sm focus:outline-none bg-white dark:bg-[#474954]`}
      />
    </form>
  )
}

export default TodoInput
