import { useRouter } from 'next/router'
import React from 'react'
import NewFolderButton from './NewFolderButton'
import { BiCog, BiQuestionMark } from 'react-icons/bi'

const FolderItem = ({ isActive, id, text }: { isActive: boolean; text: string; id: number }) => {
  const router = useRouter()

  return (
    <div
      className={`mr-4 px-4 py-[12px] flex justify-between cursor-pointer rounded-xl ${isActive ? 'bg-[#F5F4F6]' : ''}`}
      onClick={() => router.push(`/folder/${id}`)}>
      <div className='flex'>
        <div>🎈</div>
        <div className='ml-2 font-medium'>{text}</div>
      </div>
      <div
        className={`bg-[#F5F4F6] flex items-center justify-center text-sm rounded-md w-6 h-6 ${
          isActive ? 'bg-[#EAE9EA] text-[#717275]' : 'text-[#9E9CA0]'
        }`}>
        15
      </div>
    </div>
  )
}

const Folders = () => {
  const items = new Array(25).fill(1)
  const router = useRouter()

  return (
    <div className='bg-white w-1/4 h-full px-2 pt-12 pb-4 rounded-2xl shadow-xl '>
      <div className='h-[90%]'>
        <NewFolderButton />
        <div className='max-h-[770px] overflow-y-auto scrollbar-thin scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-track-[#EAE9EA] scrollbar-thumb-[#9E9CA0]'>
          {items.map((item, index) => (
            <FolderItem key={index} id={index} isActive={router.query.id === index.toString()} text={'Home'} />
          ))}
        </div>
      </div>
      <div className='pl-[10px] pr-8 flex items-end justify-between h-[10%]'>
        <button className='cursor-pointer'>
          <BiQuestionMark size={24} color='#353536' />
        </button>
        <button className='cursor-pointer'>
          <BiCog size={24} color='#353536' />{' '}
        </button>
      </div>
    </div>
  )
}

export default Folders
