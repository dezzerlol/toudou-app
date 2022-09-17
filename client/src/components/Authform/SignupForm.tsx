import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SignupForm = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(0deg, rgba(235,237,240,1) 0%, rgba(235,237,240,1) 80%, rgba(196,230,254,1) 100%)',
      }}
      className='w-screen h-screen flex flex-col items-center justify-center'>
      <div className='fixed top-52 flex'>
        <Image src='/1479.gif' width='32' height='32' />
        <h1 className='ml-1 text-2xl text-[#4E575F]'>toudou</h1>
      </div>
      <div className='max-w-[380px] w-11/12 h-2/5 p-12 bg-white rounded-2xl'>
        <div>
          <h2 className='text-3xl'>Sign up</h2>
          <p className='pt-2 text-sm text-[#616870]'>Create new account.</p>
        </div>
        <form className='pt-4 mb-4'>
          <input placeholder='Email' className='mb-2 bg-[#F2F4F6] w-full p-[12px] rounded-xl' />
          <input placeholder='Password' className='mb-2 bg-[#F2F4F6] w-full p-[12px] rounded-xl' />
          <button placeholder='Password' className='mt-2 bg-black text-[#616870] font-bold w-full p-[12px] rounded-xl'>
            Submit
          </button>
        </form>
        <span>
          Or{' '}
          <Link href='/login'>
            <a className='hover:underline text-[#008FFD] font-bold'>log in</a>
          </Link>
        </span>
      </div>
    </div>
  )
}

export default SignupForm
