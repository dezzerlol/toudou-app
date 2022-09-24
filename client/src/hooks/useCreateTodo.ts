import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTodoMutation } from '../services/mutations'

export const useCreateTodo = (folderId: string) => {
  const queryClient = useQueryClient()

  const { mutate, isLoading, error } = useMutation(['create-todo'], createTodoMutation, {
    onMutate: async (addedTodo) => {
      await queryClient.cancelQueries(['get-todos'])
      await queryClient.cancelQueries(['get-folders'])

      const previousTodos: any = queryClient.getQueryData(['get-todos', { folderId }])
      const previousFolders: any = queryClient.getQueryData(['get-folders'])

      const newTodo = { ...addedTodo, id: previousTodos[0] ? previousTodos[0].id + 1 : 1, completed: false, icon: null }
      // add new todo to folder todos array so todos length on sidebar can be updated
      const currentFolders = previousFolders.map((folder: any) =>
        folder.id == folderId ? { ...folder, todos: [newTodo, ...folder.todos] } : folder
      )

      // set new folders

      queryClient.setQueryData(['get-todos', { folderId }], (old: any) => [newTodo, ...old])
      queryClient.setQueryData(['get-folders'], () => [...currentFolders])

      return { previousTodos, previousFolders }
    },
  })

  return { isLoading, mutate, error }
}
