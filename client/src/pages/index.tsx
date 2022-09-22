import type { NextPage } from 'next'
import { useEffect } from 'react'
import fetcher from '../services/fetcher'
import { getFoldersMutation } from '../services/mutations'

const Home: NextPage = () => {
  useEffect(() => {
    const getNotes = async () => {
      const data = await getFoldersMutation()
      console.log(data)
    }
    getNotes()
  }, [])

  return <div className='w-screen h-screen'>trest</div>
}

export default Home
