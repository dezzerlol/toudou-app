import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.body

  const data = await fetch(`http://localhost:3000/api/folder/`) 
}
