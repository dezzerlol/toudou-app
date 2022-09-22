import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { getFoldersMutation } from '../../services/mutations'
import NewFolderButton from './NewFolderButton'
import QuestionButton from './QuestionButton'
import SettingsButton from './SettingsButton'

const FolderItem = ({ isActive, id, text }: { isActive: boolean; text: string; id: number }) => {
  const router = useRouter()

  return (
    <div
      className={`mr-4 px-4 py-[12px] flex justify-between cursor-pointer rounded-xl ${
        isActive ? 'bg-[#F5F4F6]' : ''
      } hover:bg-[#F5F4F6]`}
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
  const { data: folders, isLoading } = useQuery(['get-folders'], getFoldersMutation)
  const router = useRouter()

  // console.log(folders)

  return (
    <div className='bg-white w-1/4 h-full px-2 pt-12 pb-4 rounded-2xl shadow-xl '>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className='h-[90%]'>
            <NewFolderButton />
            <div className='max-h-[770px] overflow-y-auto scrollbar-thin scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-track-[#EAE9EA] scrollbar-thumb-[#9E9CA0]'>
              {folders.map((folder: any) => (
                <FolderItem
                  key={folder.id}
                  id={folder.id}
                  isActive={router.query.id === folder.id.toString()}
                  text={folder.title}
                />
              ))}
            </div>
          </div>
          <div className='pl-[10px] pr-8 flex items-end justify-between h-[10%]'>
            <QuestionButton />
            <SettingsButton />
          </div>
        </>
      )}
    </div>
  )
}

export default Folders
