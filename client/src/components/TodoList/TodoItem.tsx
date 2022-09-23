import React, { useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import { motion } from 'framer-motion'

const variants = {
  pre: { opacity: 0 },
  visible: { opacity: 1 },
}

const TodoItem = ({ text, icon, isCompleted }: { text: string; icon: string; isCompleted: boolean }) => {
  const [completed, setCompleted] = useState(isCompleted)

  return (
    <motion.div
      variants={variants}
      initial='pre'
      animate='visible'
      className='mt-4 py-4 px-2 w-full flex justify-between items-center rounded-2xl bg-white shadow-sm'>
      <div className='flex items-center'>
        <div
          onClick={() => setCompleted(!completed)}
          className={`w-5 h-5 mr-2 flex items-center justify-center rounded-md cursor-pointer
          ${completed ? 'bg-black hover:opacity-75' : 'bg-[#EAEBEE] hover:bg-[#c6c8cc]'}`}>
          {completed && <BiCheck size={18} color='white' />}
        </div>
        <div className=''>{text}</div>
      </div>
      <div>{icon ? icon : ''}</div>
    </motion.div>
  )
}

export default TodoItem
