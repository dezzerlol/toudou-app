import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useRef, useState } from 'react'
import { BiNote } from 'react-icons/bi'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useUpdateFolder } from '../../hooks/useUpdateFolder'

const FolderIconPicker = ({ folder }: any) => {
  const pickerRef = useRef<HTMLDivElement>(null)
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false)
  const { mutate } = useUpdateFolder()
  useClickOutside(pickerRef, () => setIsEmojiPickerOpen(false))
 
  const onEmojiClick = (emojiObject: any) => {
    mutate({ id: folder.id, icon: emojiObject.native })
    setIsEmojiPickerOpen(false)
  }

  return (
    <div className='mt-1 mr-4'>
      <div onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)} className='cursor-pointer'>
        {folder && folder.icon ? folder.icon : <BiNote size={22} className='mt-1' />}
      </div>

      {isEmojiPickerOpen && (
        <div className='absolute' ref={pickerRef}>
          <Picker data={data} onEmojiSelect={onEmojiClick} />
        </div>
      )}
    </div>
  )
}

export default FolderIconPicker
