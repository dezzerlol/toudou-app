import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTodoMutation } from '../services/mutations'

export const useCreateTodo = (folderId: string) => {
  const queryClient = useQueryClient()

  const { mutate, isLoading, error } = useMutation(['create-todo'], createTodoMutation, {
    onMutate: async (addedTodo) => {
      await queryClient.cancelQueries(['get-folders'])

      const previousFolders: any = queryClient.getQueryData(['get-folders'])

      const currFolder = previousFolders.filter((folder: any) => folder.id === +folderId)[0]

      const newTodo = { ...addedTodo, id: currFolder.todos[0] ? currFolder.todos[0].id + 1 : 1, completed: false, icon: null }

      // add new todo to folder todos array so todos length on sidebar can be updated
      const currentFolders = previousFolders.map((folder: any) =>
        folder.id == folderId ? { ...folder, todos: [newTodo, ...folder.todos] } : folder
      )
      
      // set new folder
      queryClient.setQueryData(['get-folders'], () => [...currentFolders])

      return { previousFolders }
    },
  })

  return { isLoading, mutate, error }
}
