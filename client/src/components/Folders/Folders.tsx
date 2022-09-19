import { useRouter } from 'next/router'
import React from 'react'

const Folders = () => {
  const items = new Array(6).fill(1)
  const router = useRouter()

  return (
    <div className='bg-white w-3/12 h-full p-12 rounded-xl'>
      {items.map((item, index) => (
        <div
          key={index}
          className={`p-4 cursor-pointer rounded-lg ${router.query.id === index.toString() ? 'bg-slate-300' : ''}`}
          onClick={() => router.push(`/folder/${index}`)}>
          Home
        </div>
      ))}
    </div>
  )
}

export default Folders
