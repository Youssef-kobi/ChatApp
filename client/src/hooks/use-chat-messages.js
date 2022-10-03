/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react'
// import socketIOClient from 'socket.io-client'
import { useAuth } from '../context/auth'
import { useSocket } from '../context/socket'

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage' // Name of the event
// const SOCKET_SERVER_URL = 'http://localhost:3005'

const useChatMessage = (receiverId) => {
  const [messages, setMessages] = useState() // Sent and received messages
  const { user } = useAuth()
  const [typingStatus, setTypingStatus] = useState('')
  const socket = useSocket()
  // const joinRoom = () => {
  socket.emit('join', receiverId)
  // Listens for incoming messages
  // }
  useEffect(() => {
    let timer
    // TypingResponse
    socket?.on('typingResponse', (data) => {
      clearTimeout(timer)
      setTypingStatus(data)
      timer = setTimeout(() => {
        setTypingStatus('')
      }, 800)
    })
    socket?.on('getMessage', (Conversation) => {
      setMessages(Conversation)
    })
  }, [socket])
  // joinRoom()

  const handleTyping = () => {
    socket?.emit('typing', `${user?.username} is Typing`)
  }
  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = ({ message }) => {
    socket.emit(NEW_CHAT_MESSAGE_EVENT, {
      message,
      senderId: user._id,
      receiverId,
    })
  }
  socket?.emit('leaveRoom', messages?._id)
  return { messages, sendMessage, handleTyping, typingStatus }
}

export default useChatMessage
