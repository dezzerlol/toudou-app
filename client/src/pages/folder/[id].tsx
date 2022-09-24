import React from 'react'
import Folders from '../../components/Folders/Folders'
import TodoList from '../../components/TodoList/TodoList'

const FolderId = () => {
  return (
    <div
      className='w-screen h-screen p-2 flex bg-[rgba(235,237,240,1)] dark:bg-[rgb(28,29,34)]'
      /* style={{
        background: 'linear-gradient(0deg, rgba(235,237,240,1) 0%, rgba(235,237,240,1) 80%, rgba(196,230,254,1) 100%)',
      }} */>
      <Folders />
      <TodoList />
    </div>
  )
}

export default FolderId
