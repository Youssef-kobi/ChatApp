/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react'
import ChatPage from '../components/chatPage/ChatPage'
import Chats from '../components/SideBar/Chats'
import Contacts from '../components/SideBar/Contacts'
// import Groups from '../components/Groups'
import Profile from '../components/SideBar/Profile'
import SideBar from '../components/SideBar/SideBar'
import EmptyChatPage from '../components/chatPage/EmptyChatPage'
// import { useSocket } from '../context/socket'

// import { useAuth } from '../context/auth'
const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('theme'))
  )
  useEffect(() => {
    if (!darkMode) {
      localStorage.setItem('theme', JSON.stringify(false))
    } else {
      localStorage.setItem('theme', JSON.stringify(true))
    }
  }, [darkMode])

  const [receiver, setReceiver] = useState(null)
  const [selected, setSelected] = useState('chats')
  let sidePage
  switch (selected) {
    case 'profile':
      sidePage = <Profile />
      break
    // case 'groups':
    //   sidePage = <Groups setRoomId={setReceiver} />
    //   break
    case 'contacts':
      sidePage = <Contacts setReceiver={setReceiver} />
      break
    default:
      sidePage = <Chats receiver={receiver} setReceiver={setReceiver} />
      break
  }
  return (
    <div
      className={`w-full h-screen flex items-center ${darkMode ? 'dark' : ''}`}
    >
      <SideBar
        setSelected={setSelected}
        selected={selected}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />
      <div className=' sm:w-1/5 w-2/5 flex h-full flex-col items-center text-black-light dark:text-white-light bg-white-light dark:bg-dark-light'>
        {sidePage}
      </div>
      <div className='w-4/5 flex h-full flex-col justify-between bg-white-pure dark:bg-dark-pure shadow-md z-10 text-gray-base'>
        {receiver ? <ChatPage receiver={receiver} /> : <EmptyChatPage />}
      </div>
    </div>
  )
}

export default Dashboard
