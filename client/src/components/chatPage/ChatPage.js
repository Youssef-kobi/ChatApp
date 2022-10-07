/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
// import useChatMessage from '../../hooks/use-chat-conversation'
// import { useEffect } from 'react'
import { useEffect, useState } from 'react'
import { useSocket } from '../../context/socket'
import ChatHistory from './ChatHistory'
import ChatInput from './ChatInput'
import Header from './Header'

const ChatPage = ({ receiver }) => {
  const socket = useSocket()
  const [conversation, setConversation] = useState()
  useEffect(() => {
    socket?.emit('join', { receiverId: receiver?._id })
    socket?.on('getMessage', (Conversation) => {
      setConversation((prev) => ({ ...prev, ...Conversation }))
    })
    return () => {
      if (conversation?._id)
        socket?.emit('leaveRoom', { conversationId: conversation?._id })
    }
  }, [socket, receiver?._id, conversation?._id])

  return (
    <>
      <Header receiver={receiver} />
      <ChatHistory conversation={conversation} receiver={receiver} />
      <ChatInput conversation={conversation} receiver={receiver} />
    </>
  )
}

export default ChatPage
