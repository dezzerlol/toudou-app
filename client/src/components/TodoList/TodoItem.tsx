import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { BiCheck, BiTrash } from 'react-icons/bi'
import { deleteTodoMutation, updateTodoMutation } from '../../services/mutations'
import styles from './styles/styles.module.css'

type Props = {
  text: string
  icon: string
  isCompleted: boolean
  id: number
}

const variants = {
  pre: { opacity: 0 },
  visible: { opacity: 1 },
}

const TodoItem = ({ text, icon, isCompleted, id }: Props) => {
  const queryClient = useQueryClient()
  const [completed, setCompleted] = useState(isCompleted)
  const [isHover, setIsHover] = useState(false)
  const { mutate } = useMutation(['update-todo'], updateTodoMutation)
  const deleteTodo = useMutation(['delete-todo'], deleteTodoMutation, {
    async onSuccess() {
      queryClient.invalidateQueries(['get-todos'])
    },
  })

  const handleCompleted = () => {
    setCompleted(!completed)
    mutate({ id, completed: !completed })
  }

  const handleDelete = () => {
    deleteTodo.mutate({ id })
  }

  return (
    <>
      <motion.div
        variants={variants}
        initial='pre'
        animate='visible'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className='mt-4 py-4 px-2 w-full flex justify-between items-center rounded-2xl bg-white dark:bg-[#474954] shadow-sm'>
        <div className='flex items-center'>
          <AnimatePresence>
            <motion.div
              whileTap={{ scale: 0.8 }}
              onClick={handleCompleted}
              className={`w-5 h-5 mr-2 flex items-center justify-center rounded-md cursor-pointer
          ${
            completed
              ? 'bg-black hover:opacity-75'
              : 'bg-[#EAEBEE] hover:bg-[#c6c8cc] dark:bg-[#242228] dark:hover:bg-[#34313a] '
          }`}>
              {completed ? <BiCheck size={18} color='white' /> : ''}
            </motion.div>
          </AnimatePresence>

          <div className={`${styles.todo} ${completed ? styles.completed : ''} dark:text-[#cbcdd1]`}>{text}</div>
        </div>
        <div>{icon ? icon : ''}</div>
        {isHover && (
          <button onClick={handleDelete}>
            <BiTrash size={18} />
          </button>
        )}
      </motion.div>
    </>
  )
}

export default TodoItem
