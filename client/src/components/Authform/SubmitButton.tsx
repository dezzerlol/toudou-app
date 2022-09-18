import React from 'react'
import { SpinnerCircularFixed } from 'spinners-react'

const SubmitButton = ({ isLoading, text }: { isLoading: boolean; text: string }) => {
  return (
    <button
      type='submit'
      disabled={isLoading}
      className='mt-2 bg-black text-[#7c8289] font-bold w-full flex items-center justify-center p-[12px] rounded-xl'>
      {isLoading ? <SpinnerCircularFixed size={24} color='#008FFD' thickness={200} /> : text}
    </button>
  )
}

export default SubmitButton
