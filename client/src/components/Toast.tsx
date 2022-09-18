import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  type: 'success' | 'error'
  text: string
  icon: React.ReactNode
}

const variants = {
  initial: { x: -400, y: 0 },
  animate: { x: 10, y: 0 },
  exit: { x: -400, y: 0 },
}

const Toast = ({ type, text, icon }: Props) => {
  return (
    <motion.div
      variants={variants}
      key='toast'
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ type: 'spring' }}
      className={`absolute flex items-center bottom-4 left-4 p-4 rounded-xl shadow-2xl bg-white 
      ${type === 'success' ? 'text-blue-600' : 'text-red-800'}`}>
      {icon} <span className='ml-2'>{text}</span>
    </motion.div>
  )
}

export default Toast
