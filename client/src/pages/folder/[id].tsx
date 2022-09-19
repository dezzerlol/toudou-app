import React from 'react'
import Folders from '../../components/Folders/Folders'

const FolderId = () => {
  return (
    <div
      className='w-screen h-screen p-2'
      style={{
        background: 'linear-gradient(0deg, rgba(235,237,240,1) 0%, rgba(235,237,240,1) 80%, rgba(196,230,254,1) 100%)',
      }}>
      <Folders />
    </div>
  )
}

export default FolderId
