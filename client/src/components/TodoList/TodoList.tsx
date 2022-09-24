import { useQuery } from '@tanstack/react-query'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { getFoldersMutation } from '../../services/mutations'
import FolderIconPicker from './FolderIconPicker'
import TodoFolderName from './TodoFolderName'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

export const filterById = (response: any, id: number) => {
  const filteredFolder = response.filter((item: any) => item.id === id)
  return filteredFolder[0]
}

const TodoList = () => {
  const router = useRouter()
 
  const { data: folder } = useQuery(['get-folders'], getFoldersMutation, {
    select: (response) => filterById(response, Number(router.query.id)),
  })


  return (
    <div className='w-full flex flex-col items-center'>
      <div className='pt-4 w-2/3 flex'>
        <FolderIconPicker folder={folder} />

        <div className='w-10/12'>
          <TodoFolderName folder={folder} />
          <TodoInput key={folder ? folder.id : ''} />

          <AnimateSharedLayout>
            <motion.div
              layout
              className='mt-4 pr-6 overflow-y-auto max-h-[800px] 
              scrollbar-thin 
              scrollbar-track-rounded-md 
              scrollbar-thumb-rounded-md 
              scrollbar-track-[#EAE9EA] 
              scrollbar-thumb-[#9E9CA0]
              dark:scrollbar-thumb-[#474954]
              dark:scrollbar-track-[#1C1D22]'>
              <AnimatePresence>
                {folder &&
                  folder.todos.map((todo: any) => (
                    <TodoItem
                      text={todo.text}
                      key={todo.id}
                      id={todo.id}
                      icon={todo.icon}
                      isCompleted={todo.completed}
                    />
                  ))}
              </AnimatePresence>
            </motion.div>
          </AnimateSharedLayout>
        </div>
      </div>
    </div>
  )
}

export default TodoList
