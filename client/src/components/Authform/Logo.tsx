import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex mb-8'>
      <Image src='/1479.gif' width='32' height='32' />
      <h1 className='ml-1 text-2xl text-[#4E575F]'>toudou</h1>
    </div>
  )
}

export default Logo
