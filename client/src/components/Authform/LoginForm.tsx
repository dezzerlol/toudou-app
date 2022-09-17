import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import fetcher from '../../services/fetcher'

const LoginForm = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await fetcher('/login', { email, password })
  }


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
          <h2 className='text-3xl'>Log in</h2>
          <p className='pt-2 text-sm text-[#616870]'>Sign in if you have an account.</p>
        </div>
        <form className='pt-4 mb-4' onSubmit={handleSubmit}>
          <input
            placeholder='Email'
            className='mb-2 bg-[#F2F4F6] w-full p-[12px] rounded-xl'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder='Password'
            className='mb-2 bg-[#F2F4F6] w-full p-[12px] rounded-xl'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' className='mt-2 bg-black text-[#616870] font-bold w-full p-[12px] rounded-xl'>
            Sign in
          </button>
        </form>
        <span>
          Or{' '}
          <Link href='/signup'>
            <a className='hover:underline text-[#008FFD] font-bold'>create new account</a>
          </Link>
        </span>
      </div>
    </div>
  )
}

export default LoginForm
