import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import { BiCheckCircle, BiError } from 'react-icons/bi'
import Toast from '../Toast'
import { AnimatePresence } from 'framer-motion'
import { SpinnerCircularFixed } from 'spinners-react'
import SubmitButton from './SubmitButton'

const SignupForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, isError, isLoading, mutate, message } = useSignup()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate({ email, password })
  }

  return (
    <>
      <div
        style={{
          background:
            'linear-gradient(0deg, rgba(235,237,240,1) 0%, rgba(235,237,240,1) 80%, rgba(196,230,254,1) 100%)',
        }}
        className='w-screen h-screen flex flex-col items-center justify-center'>
        <div className='fixed top-52 flex'>
          <Image src='/1479.gif' width='32' height='32' />
          <h1 className='ml-1 text-2xl text-[#4E575F]'>toudou</h1>
        </div>
        <div className='max-w-[380px] w-11/12 h-2/5 p-12 bg-white rounded-2xl shadow-2xl'>
          <div>
            <h2 className='text-3xl'>Sign up</h2>
            <p className='pt-2 text-sm text-[#616870]'>Create new account.</p>
          </div>
          <form className='pt-4 mb-4' onSubmit={handleSubmit}>
            <input
              placeholder='Email'
              type='email'
              className='mb-2 bg-[#F2F4F6] w-full p-[12px] rounded-xl'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder='Password'
              type='password'
              className='mb-2 bg-[#F2F4F6] w-full p-[12px] rounded-xl'
              onChange={(e) => setPassword(e.target.value)}
            />
            <SubmitButton text='Submit' isLoading={isLoading}/>
          </form>
          <span>
            Or{' '}
            <Link href='/login'>
              <a className='hover:underline text-[#008FFD] font-bold'>log in</a>
            </Link>
          </span>
        </div>
      </div>
      <AnimatePresence mode='wait'>
        {message && <Toast text={message} icon={<BiCheckCircle size={18} />} type='success' />}
      </AnimatePresence>

      <AnimatePresence mode='wait'>
        {error && <Toast text={error.message} icon={<BiError size={18} />} type='error' />}
      </AnimatePresence>
    </>
  )
}

export default SignupForm
