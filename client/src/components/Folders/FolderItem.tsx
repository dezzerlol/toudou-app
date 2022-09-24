import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { BiNote } from 'react-icons/bi'

type FolderItemProps = {
  isActive: boolean
  text: string
  id: number
  icon?: string
  BGColor?: string
  todoItemsLength: number
  setIsContextMenuOpen: (value: boolean) => void
  setPoints: (value: { x: number; y: number }) => void
  setClickedFolderId: (value: number) => void
}

const variants = {
  pre: { opacity: 0 },
  visible: { opacity: 1 },
}

const FolderItem = ({
  isActive,
  id,
  text,
  icon,
  todoItemsLength,
  setIsContextMenuOpen,
  setPoints,
  setClickedFolderId,
}: FolderItemProps) => {
  const router = useRouter()

  const handleContextMenu = (e: any) => {
    setClickedFolderId(id)
    e.preventDefault()
    setIsContextMenuOpen(true)
    setPoints({ x: e.pageX, y: e.pageY })
  }

  // closing context menu on outside click
  useEffect(() => {
    const handleClick = () => setIsContextMenuOpen(false)
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      <motion.div
        variants={variants}
        initial='pre'
        animate='visible'
        onContextMenu={handleContextMenu}
        className={`mr-4 px-4 py-[12px] flex justify-between cursor-pointer rounded-xl hover:bg-[#F5F4F6] dark:hover:bg-[#474954] dark:text-[#F6F6F9] ${
          isActive ? 'bg-[#F5F4F6] dark:bg-[#474954]' : ''
        } `}
        onClick={() => router.push(`/folder/${id}`)}>
        <div className='flex items-center'>
          <div>{icon ? icon : <BiNote size={23} />}</div>
          <div className='ml-2 font-medium'>{text}</div>
        </div>
        <div
          className={`bg-[#F5F4F6] flex items-center justify-center text-sm rounded-md w-6 h-6 ${
            isActive ? 'bg-[#EAE9EA] dark:bg-[#242228] text-[#717275]' : 'text-[#9E9CA0] dark:bg-[#474954]'
          }`}>
          {todoItemsLength}
        </div>
      </motion.div>
    </>
  )
}

export default FolderItem
