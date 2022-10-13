/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react'
import { useSocket } from '../../context/socket'
import ChatHistory from './ChatHistory'
import ChatInput from './ChatInput'
import Header from './Header'

const ChatPage = ({ receiver }) => {
  const socket = useSocket()
  const [conversation, setConversation] = useState()
  console.log('one render')
  useEffect(() => {
    socket.emit('join', { receiverId: receiver?._id })
    socket.on('getMessage', (Conversation) => {
      setConversation(Conversation)
    })
    return () => {
      socket.off('getMessage', (Conversation) => setConversation(Conversation))
      socket.emit('leaveRoom')
      // setConversation({})
    }
  }, [socket, receiver?._id])

  return (
    <>
      <Header receiver={receiver} />
      <ChatHistory conversation={conversation} receiver={receiver} />
      <ChatInput conversation={conversation} receiver={receiver} />
    </>
  )
}

export default ChatPage
