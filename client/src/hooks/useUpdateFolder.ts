import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateFolderMutation } from '../services/mutations'

export const useUpdateFolder = () => {
  const queryClient = useQueryClient()

  const { mutate, isLoading, error } = useMutation(['update-folder'], updateFolderMutation, {
    // optimistic update
    onMutate: async (updatedFolder) => {
      await queryClient.cancelQueries(['get-folders'])
      // get previous folders
      const previousFolders: any = queryClient.getQueryData(['get-folders'])

      // find folder with updated id and update it with destructuring
      const currentFolders = previousFolders.map((folder: any) =>
        folder.id === updatedFolder.id ? { ...folder, ...updatedFolder } : folder
      )

      // set new folders
      queryClient.setQueryData(['get-folders'], () => [...currentFolders])

      return { previousFolders, updatedFolder }
    },
  })

  return { mutate, isLoading, error }
}
