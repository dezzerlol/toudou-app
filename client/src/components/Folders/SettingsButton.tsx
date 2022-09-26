import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { BiCog, BiLogOutCircle, BiMoon, BiPlanet, BiSun, BiUserCircle } from 'react-icons/bi'
import { useTheme } from '../../hooks/useTheme'

type themes = 'light' | 'dark' | 'black'

const variants = {
  pre: { opacity: 0, x: 100, y: 0 },
  visible: { opacity: 1, x: 100, y: -10 },
  exit: { opacity: 0, x: 100, y: 0 },
}

const SettingsButton = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const { theme, changeTheme } = useTheme()

  return (
    <div id='dropdown-settings' className='relative flex items-end '>
      <button
        id='settings-button'
        className='cursor-pointer text-[#353536] dark:text-[#EAE9EA]'
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}>
        <BiCog size={24} />
      </button>

      <AnimatePresence>
        {isSettingsOpen && (
          <motion.div
            variants={variants}
            initial='pre'
            animate='visible'
            exit='exit'
            id='dropdown-settings-menu'
            className={`absolute bottom-10 right-1 w-48 rounded-lg shadow-lg bg-white dark:bg-[#303038]`}>
            <div className='p-2'>
              <div className='text-sm ml-1 mb-1 dark:text-[#8A8D94]'>Theme</div>
              <div className='flex bg-[#F4F4F8] dark:bg-[#242228] p-1 rounded-lg'>
                <button
                  className={`flex items-center justify-center w-1/2 p-1 rounded-lg bg-white dark:bg-[#242228] dark:text-[#DCDDE0]`}
                  onClick={() => changeTheme('light')}>
                  <BiSun /> <span className='text-sm ml-2'>Light</span>
                </button>
                <button
                  className={`flex items-center justify-center w-1/2  p-1 rounded-lg dark:bg-[#474954] dark:text-[#DCDDE0]
                  `}
                  onClick={() => changeTheme('dark')}>
                  <BiMoon /> <span className='text-sm ml-2'>Dark</span>
                </button>
              </div>
            </div>
            <div className='w-full border-b dark:border-[#38373F]' />

            <div className='p-2 ml-1 dark:text-[#F4F4F8]'>
              <div className='flex items-center mb-2'>
                <button className='flex items-center cursor-not-allowed' disabled>
                  <BiUserCircle />
                  <span className='ml-1'>Account settings</span>
                </button>
              </div>

              {/* https://github.com/vercel/next.js/discussions/34991 */}
              <form method='POST' action='/api/auth/logout' className='flex items-center cursor-pointer'>
                <button type='submit' className='flex items-center'>
                  <BiLogOutCircle />
                  <span className='ml-1'>Logout</span>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SettingsButton
