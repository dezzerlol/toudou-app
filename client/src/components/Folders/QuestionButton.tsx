import React from 'react'
import { BiQuestionMark } from 'react-icons/bi'

const QuestionButton = () => {
  return (
    <div id='question-button' className='relative flex items-end text-[#353536] dark:text-[#EAE9EA]'>
      <button className='cursor-pointer'>
        <BiQuestionMark size={24} />
      </button>
    </div>
  )
}

export default QuestionButton
