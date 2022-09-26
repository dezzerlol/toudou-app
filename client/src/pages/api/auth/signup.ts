import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body

  const login = await fetch('http://localhost:5000/auth/register', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  const data = await login.json()

  if (!login.ok) {
    return res.status(login.status).json({ message: data.message })
  }

 
  return res.status(login.status).json(data)
}
