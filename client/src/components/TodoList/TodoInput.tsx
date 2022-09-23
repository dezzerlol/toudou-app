import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { createTodoMutation } from '../../services/mutations'

const TodoInput = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const [todoText, setTodoText] = useState('')
  const [inputActive, setInputActive] = useState(false)

  const { mutate } = useMutation(['create-todo'], createTodoMutation, {
    onMutate: async (addedTodo) => {
      await queryClient.cancelQueries(['get-todos'])
      const previousTodos: any = queryClient.getQueryData(['get-todos', { folderId: router.query.id }])
      
      const newTodo = { ...addedTodo, id: previousTodos[0].id + 1, completed: false, icon: null }
      queryClient.setQueryData(['get-todos', { folderId: router.query.id }], (old: any) => [newTodo, ...old])

      return { previousTodos }
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutate({ folderId: router.query.id!.toString(), text: todoText })
    setTodoText('')
  }

  return (
    <form onSubmit={handleSubmit} className='mr-6'>
      <input
        onClick={() => setInputActive(true)}
        onBlur={() => setInputActive(false)}
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
        placeholder='Write a new task...'
        className={`mt-4 py-4 p-2 w-full rounded-2xl text-[#78787E] shadow-sm focus:outline-none ${
          inputActive ? 'bg-white' : 'bg-[#ededf0]'
        }`}
      />
    </form>
  )
}

export default TodoInput
