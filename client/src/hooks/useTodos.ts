import { useQuery } from '@tanstack/react-query'
import { getTodosMutation } from '../services/mutations'

export const useTodos = (folderId: string) => {
  const {
    data: todos,
    isLoading,
    refetch,
    error
  } = useQuery(['get-todos', { folderId }], () => getTodosMutation(folderId))

  return {todos, isLoading, error }
}
