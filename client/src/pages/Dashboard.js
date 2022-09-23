/* eslint-disable no-underscore-dangle */
import { useState } from 'react'
import ChatHistory from '../components/ChatHistory'
import ChatInput from '../components/ChatInput'
import Chats from '../components/Chats'
import Contacts from '../components/Contacts'
import Groups from '../components/Groups'
import Header from '../components/Header'
import Profile from '../components/Profile'
import SideBar from '../components/SideBar'
import useChatMessage from '../hooks/use-chat-messages'
// import { useSocket } from '../context/socket'

// import { useAuth } from '../context/auth'
const Dashboard = () => {
  // const socket = useSocket()
  // const Auth = useAuth()
  const [room, setRoom] = useState()
  // const { roomId } = Math.random() // Gets roomId from URL
  const { messages, sendMessage } = useChatMessage(room?.id) // Creates a websocket and manages messaging
  // const [newMessage, setNewMessage] = useState('') // Message to be sent

  // useEffect(() => {
  // as soon as the component is mounted, do the following tasks:

  // emit USER_ONLINE event
  // socket.emit('USER_ONLINE', userId)

  // subscribe to socket events
  // socket.on('JOIN_REQUEST_ACCEPTED', handleInviteAccepted)

  // return () => {
  //   // before the component is destroyed
  //   // unbind all event handlers used in this component
  //   socket.off('JOIN_REQUEST_ACCEPTED', handleInviteAccepted)
  // }
  // }, [socket])
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [room])

  const [selected, setSelected] = useState('chats')
  let sidePage
  switch (selected) {
    case 'profile':
      sidePage = <Profile />
      break
    case 'groups':
      sidePage = <Groups setRoomId={setRoom} />
      break
    case 'contacts':
      sidePage = <Contacts setRoomId={setRoom} />
      break
    default:
      sidePage = <Chats setRoomId={setRoom} />
      break
  }
  return (
    <div className=' w-full h-screen flex items-center'>
      <SideBar setSelected={setSelected} selected={selected} />
      <div className='w-1/5 flex h-full flex-col items-center px-6 pt-6 bg-white-light'>
        {sidePage}
      </div>
      <div className='w-4/5 flex h-full flex-col justify-between bg-white-pure shadow-md z-10 text-gray-base'>
        <Header room={room} />
        <ChatHistory messages={messages} room={room} />
        <ChatInput sendMessage={sendMessage} room={room} />
      </div>
    </div>
  )
}

export default Dashboard
