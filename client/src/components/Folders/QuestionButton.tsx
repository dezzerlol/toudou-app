import React from 'react'
import { BiQuestionMark } from 'react-icons/bi'

const QuestionButton = () => {
  return (
    <div id='question-button' className='relative flex items-end'>
      <button className='cursor-pointer'>
        <BiQuestionMark size={24} color='#353536' />
      </button>
    </div>
  )
}

export default QuestionButton
