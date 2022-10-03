/* eslint-disable no-underscore-dangle */
import { useState } from 'react'
import ChatPage from '../components/chatPage/ChatPage'
import Chats from '../components/Chats'
import Contacts from '../components/Contacts'
import Groups from '../components/Groups'
import Profile from '../components/Profile'
import SideBar from '../components/chatPage/SideBar'
// import { useSocket } from '../context/socket'

// import { useAuth } from '../context/auth'
const Dashboard = () => {
  const [receiver, setReceiver] = useState(null)
  const [selected, setSelected] = useState('chats')
  let sidePage
  switch (selected) {
    case 'profile':
      sidePage = <Profile />
      break
    case 'groups':
      sidePage = <Groups setRoomId={setReceiver} />
      break
    case 'contacts':
      sidePage = <Contacts setReceiver={setReceiver} />
      break
    default:
      sidePage = <Chats receiver={receiver} setReceiver={setReceiver} />
      break
  }
  return (
    <div className=' w-full h-screen flex items-center'>
      <SideBar setSelected={setSelected} selected={selected} />
      <div className='w-[21.5%] flex h-full flex-col items-center text-black-light bg-white-light'>
        {sidePage}
      </div>
      {receiver && <ChatPage receiver={receiver} />}
    </div>
  )
}

export default Dashboard
