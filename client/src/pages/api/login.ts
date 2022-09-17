import { NextApiRequest, NextApiResponse } from 'next'
import { serialize, CookieSerializeOptions } from 'cookie'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body

  console.log({ email, password })

  const login = await fetch('http://localhost:5000/auth/login', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  const data = await login.json()
  console.log(data)

  if (!data.token) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }
  res.setHeader(
    'Set-Cookie',
    serialize('AUTH_TOKEN', data.token, {
      httpOnly: true,
      maxAge: 2592000,
      path: '/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    })
  )
  return res.status(200).json(data)
}
