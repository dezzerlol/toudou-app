import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React from 'react'
import { deleteFolderMutation } from '../../services/mutations'

const ContextMenu = ({ points, clickedFolderId }: any) => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const deleteFolder = useMutation(['delete-folder'], deleteFolderMutation, {
    async onMutate() {
      await queryClient.cancelQueries(['get-folders'])
      // get previous folders
      const previousFolders: any = queryClient.getQueryData(['get-folders'])

      // find folder with updated id and update it with destructuring
      const currentFolders = previousFolders.filter((folder: any) => folder.id !== clickedFolderId)

      // set new folders
      queryClient.setQueryData(['get-folders'], () => [...currentFolders])

      if (router.query.id === clickedFolderId.toString()) {
        router.push(`/folder/${currentFolders[0] ? currentFolders[0].id : '1'}`)
      }

      return { previousFolders }
    },
  })

  const handleDelete = () => {
    deleteFolder.mutate({ id: clickedFolderId })
  }

  const { x, y } = points
  return (
    <div style={{ left: x, top: y }} className={`absolute w-[150px] p-2 bg-white border-1 shadow-lg rounded-md`}>
      <button className='p-1 w-full flex items-start rounded-md hover:bg-[#F5F4F6]' onClick={handleDelete}>
        Delete
      </button>
      <button className='p-1 w-full flex items-start rounded-md hover:bg-[#F5F4F6]'>Rename</button>
    </div>
  )
}

export default ContextMenu
