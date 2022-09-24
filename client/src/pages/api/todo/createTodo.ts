import { NextApiRequest, NextApiResponse } from 'next'
import { verify } from '../../../services/verifyJwt'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = req.cookies['AUTH_TOKEN']
  const { text, folderId } = req.body

  console.log({folderId})

  if (cookie === undefined) {
    res.status(401).json({ message: 'Unauthorized' })
  }

  const verifiedCookie = await verify(cookie as string)

  const data = await fetch(`http://localhost:5000/todo/create`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${cookie}` },
    body: JSON.stringify({ folderId, text }),
  })

  const newTodo = await data.json()

  return res.status(201).json(newTodo)
}
