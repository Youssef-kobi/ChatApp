import { useState } from 'react'
import ChatInput from '../components/ChatInput'
import Chats from '../components/Chats'
import Contacts from '../components/Contacts'
import Groups from '../components/Groups'
import Header from '../components/Header'
import Profile from '../components/Profile'
import SideBar from '../components/SideBar'
import { useSocket } from '../context/socket'
// import { useAuth } from '../context/auth'

const Dashboard = () => {
  const socket = useSocket()
  console.log(socket)
  // const Auth = useAuth()
  const [selected, setSelected] = useState('chats')
  let sidePage
  switch (selected) {
    case 'profile':
      sidePage = <Profile />
      break
    case 'groups':
      sidePage = <Groups />
      break
    case 'contacts':
      sidePage = <Contacts />
      break
    default:
      sidePage = <Chats />
      break
  }
  return (
    <div className=' w-full h-screen flex items-center'>
      <SideBar setSelected={setSelected} selected={selected} />
      <div className='w-1/5 flex h-full flex-col items-center px-6 pt-6 bg-white-light'>
        {sidePage}
      </div>
      <div className='w-4/5 flex h-full flex-col justify-between bg-white-pure shadow-md z-10 text-gray-base'>
        <Header />
        {/* chatHistory */}
        <ChatInput />
      </div>
    </div>
  )
}

export default Dashboard
