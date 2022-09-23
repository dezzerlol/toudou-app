import { NextApiRequest, NextApiResponse } from 'next'
import { verify } from '../../../services/verifyJwt'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = req.cookies['AUTH_TOKEN']
  const { title } = req.body

  if (cookie === undefined) {
    res.status(401).json({ message: 'Unauthorized' })
  }

  const verifiedCookie = await verify(cookie as string)

  const data = await fetch(`http://localhost:5000/folders/create`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${cookie}` },
    body: JSON.stringify({ userId: verifiedCookie.id, title }),
  })

  const newFolder = await data.json()

  return res.status(201).json(newFolder)
}
