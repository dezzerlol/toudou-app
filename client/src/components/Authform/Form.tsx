import React from 'react'

const Form = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id='form' className='max-w-[380px] min-h-[400px] w-11/12 h-2/5 p-12 bg-white rounded-2xl shadow-2xl'>
      {children}
    </div>
  )
}

export default Form
