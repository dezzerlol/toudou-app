import { NextApiRequest, NextApiResponse } from 'next'
import { verify } from '../../../services/verifyJwt'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = req.cookies['AUTH_TOKEN']

  if (cookie === undefined) {
    res.status(401).json({ message: 'Unauthorized' })
  }

  const { id } = req.body

  const verifiedCookie = await verify(cookie as string)

  const data = await fetch(`http://localhost:5000/folders/delete`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${cookie}` },
    body: JSON.stringify({ id }),
  })

  const folders = await data.json()

  return res.status(201).json(folders)
}
