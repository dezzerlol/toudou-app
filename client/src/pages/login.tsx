import { NextPageContext } from 'next'
import React from 'react'
import LoginForm from '../components/Authform/LoginForm'
import { verify } from '../services/verifyJwt'

const Login = () => {
  return (
    <>
      <LoginForm />
    </>
  )
}

export default Login

export async function getServerSideProps(context: any) {
  const cookie = context.req.cookies['AUTH_TOKEN']

  if (cookie) {
    const session = await verify(cookie)
    if (session)
      return {
        redirect: {
          permanent: false,
          destination: '/',
        },
      }
  }
  return {
    props: {},
  }
}
