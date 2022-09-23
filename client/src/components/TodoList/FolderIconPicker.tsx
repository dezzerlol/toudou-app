import Picker from '@emoji-mart/react'
import React, { useRef, useState } from 'react'
import { BiNote } from 'react-icons/bi'
import { useClickOutside } from '../../hooks/useClickOutside'
import data from '@emoji-mart/data'

const FolderIconPicker = ({ folder }: any) => {
  const pickerRef = useRef<HTMLDivElement>(null)
  useClickOutside(pickerRef, () => setIsEmojiPickerOpen(false))
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false)

  const onEmojiClick = (emojiObject: any) => {
    console.log(emojiObject)
    setIsEmojiPickerOpen(false)
  }

  return (
    <div className='mt-1 mr-4'>
      <div onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)} className='cursor-pointer'>
        {folder && folder.icon ? folder.icon : <BiNote size={18} className='mt-1' />}
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
