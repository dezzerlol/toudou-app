import { serialize } from 'cookie'
import { decodeJwt, jwtDecrypt } from 'jose'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body

  const login = await fetch('http://localhost:5000/auth/login', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  const data = await login.json()

  if (!login.ok) {
    return res.status(login.status).json({ message: data.message })
  }

  const payload = decodeJwt(data.token)
  const expTime = new Date((payload.exp as number) * 1000)


  res.setHeader(
    'Set-Cookie',
    serialize('AUTH_TOKEN', data.token, {
      httpOnly: true,
      expires: expTime,
      path: '/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    })
  )
  return res.status(200).json(data)
}
