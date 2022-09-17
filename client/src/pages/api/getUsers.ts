import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const users = await fetch('http://localhost:5000/users', {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  })
  const data = await users.json()


  return res.status(200).json(data)
}
