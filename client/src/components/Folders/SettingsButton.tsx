import { useState } from 'react'
import { BiCog, BiLogOutCircle, BiMoon, BiPlanet, BiSun, BiUserCircle } from 'react-icons/bi'

type themes = 'light' | 'dark' | 'black'

const SettingsButton = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [theme, setTheme] = useState<themes>('light')

  return (
    <div id='dropdown-settings' className='relative flex items-end'>
      <button id='settings-button' className='cursor-pointer' onClick={() => setIsSettingsOpen(!isSettingsOpen)}>
        <BiCog size={24} color='#353536' />
      </button>

      <div
        id='dropdown-settings-menu'
        className={`absolute bottom-10 right-1 w-56 bg-white rounded-lg shadow-lg border-[1px] ${
          isSettingsOpen ? 'block' : 'hidden'
        }`}>
        <div className='p-2'>
          <div className='text-sm ml-1 mb-1'>Theme</div>
          <div className='flex justify-between bg-[#F4F4F8] p-1 rounded-lg'>
            <button
              className={`flex items-center p-1 rounded-lg ${theme === 'light' && 'bg-white'}`}
              onClick={() => setTheme('light')}>
              <BiSun /> <span className='text-sm'>Light</span>
            </button>
            <button
              className={`flex items-center p-1 rounded-lg ${theme === 'dark' && 'bg-white'}`}
              onClick={() => setTheme('dark')}>
              <BiMoon /> <span className='text-sm'>Dark</span>
            </button>
            <button
              className={`flex items-center p-1 rounded-lg ${theme === 'black' && 'bg-white'}`}
              onClick={() => setTheme('black')}>
              <BiPlanet />
              <span className='text-sm'>Black</span>
            </button>
          </div>
        </div>
        <div className='w-full border-b' />

        <div className='p-2 ml-1'>
          <div className='flex items-center mb-2 cursor-pointer'>
            <button className='flex items-center'>
              <BiUserCircle />
              <span className='ml-1'>Account settings</span>
            </button>
          </div>

          {/* https://github.com/vercel/next.js/discussions/34991 */}
          <form method='POST' action='/api/logout' className='flex items-center cursor-pointer'>
            <button type='submit' className='flex items-center'>
              <BiLogOutCircle />
              <span className='ml-1'>Logout</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SettingsButton
