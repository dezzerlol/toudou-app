import { NextApiRequest, NextApiResponse } from 'next'
import { verify } from '../../../services/verifyJwt'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = req.cookies['AUTH_TOKEN']

  if (cookie === undefined) {
    res.status(401).json({ message: 'Unauthorized' })
  }

  const folderId: string = req.body.folderId

  const verifiedCookie = await verify(cookie as string)

  const data = await fetch(`http://localhost:5000/todo/get`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${cookie}` },
    body: JSON.stringify({ folderId: Number(folderId) }),
  })

  const todos = await data.json()

  // sort by createdAt date. newest first
  todos.sort((a: any, b: any) => -a.createdAt.localeCompare(b.createdAt))

  return res.status(201).json(todos)
}
