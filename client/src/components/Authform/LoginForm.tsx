import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiError } from 'react-icons/bi'
import { useLogin } from '../../hooks/useLogin'
import Toast from '../Toast'
import Form from './Form'
import Logo from './Logo'
import SubmitButton from './SubmitButton'

const LoginForm = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const { error, isLoading, mutate } = useLogin()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        <Logo />
        <Form>
          <div>
            <h2 className='text-3xl'>Log in</h2>
            <p className='pt-2 text-sm text-[#616870]'>Sign in if you have an account.</p>
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
            <SubmitButton text='Sign in' isLoading={isLoading} />
          </form>
          <span>
            Or{' '}
            <Link href='/signup'>
              <a className='hover:underline text-[#008FFD] font-bold'>create new account</a>
            </Link>
          </span>
        </Form>
      </div>

      <AnimatePresence mode='wait'>
        {error && <Toast text={error.message} icon={<BiError size={18} />} type='error' />}
      </AnimatePresence>
    </>
  )
}

export default LoginForm
