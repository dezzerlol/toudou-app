import { useQuery } from '@tanstack/react-query'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { SpinnerCircularFixed } from 'spinners-react'
import { getFoldersMutation } from '../../services/mutations'
import ContextMenu from './ContextMenu'
import FolderItem from './FolderItem'
import NewFolderButton from './NewFolderButton'
import QuestionButton from './QuestionButton'
import SettingsButton from './SettingsButton'

const Folders = () => {
  const { data: folders, isLoading } = useQuery(['get-folders'], getFoldersMutation)
  const router = useRouter()
  const [points, setPoints] = useState({ x: 0, y: 0 })
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)
  const [clickedFolderId, setClickedFolderId] = useState(0)


  return (
    <>
      <div className='w-1/4 h-full px-2 pt-12 pb-4 rounded-2xl shadow-xl bg-white dark:bg-[#303038]'>
        {isLoading ? (
          <div className='w-full h-full flex items-center justify-center'>
            <SpinnerCircularFixed size={32} color='#008FFD' thickness={200} />
          </div>
        ) : (
          <>
            <div className='h-[90%]' onContextMenu={(e) => e.preventDefault()}>
              <NewFolderButton />
              <AnimateSharedLayout>
                <motion.div
                  layout
                  className='max-h-[770px] overflow-y-auto 
                scrollbar-thin 
                scrollbar-track-rounded-md 
                scrollbar-thumb-rounded-md 
                scrollbar-track-[#EAE9EA] 
                scrollbar-thumb-[#9E9CA0]
                dark:scrollbar-thumb-[#474954]
                dark:scrollbar-track-[#1C1D22]'>
                  <AnimatePresence>
                    {folders.length > 0 &&
                      folders.map((folder: any) => (
                        <FolderItem
                          key={folder.id}
                          id={folder.id}
                          isActive={router.query.id === folder.id.toString()}
                          text={folder.title}
                          icon={folder.icon}
                          BGColor={folder.folderBGColor}
                          todoItemsLength={folder.todos ? folder.todos.length : 0}
                          setIsContextMenuOpen={setIsContextMenuOpen}
                          setPoints={setPoints}
                          setClickedFolderId={setClickedFolderId}
                        />
                      ))}
                  </AnimatePresence>
                </motion.div>
              </AnimateSharedLayout>
            </div>
            <div className='pl-[10px] pr-8 flex items-end justify-between h-[10%]'>
              <QuestionButton />
              <SettingsButton />
            </div>
          </>
        )}
      </div>
      {isContextMenuOpen && <ContextMenu points={points} clickedFolderId={clickedFolderId}/>}
    </>
  )
}

export default Folders
