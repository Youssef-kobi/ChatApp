/* eslint-disable no-underscore-dangle */
import { useEffect, useRef, useState } from 'react'
import socketIOClient from 'socket.io-client'
import { useAuth } from '../context/auth'

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage' // Name of the event
const SOCKET_SERVER_URL = 'http://localhost:3005'

const useChatMessage = (receiver) => {
  const [messages, setMessages] = useState() // Sent and received messages
  const socketRef = useRef()
  const { token, user } = useAuth()
  const { username } = useAuth().user
  const [typingStatus, setTypingStatus] = useState('')
  useEffect(() => {
    // Creates a WebSocket connection
    socketRef.current = socketIOClient.connect(SOCKET_SERVER_URL, {
      auth: {
        token,
      },
      query: {
        receiverId: receiver?._id || '',
      },
    })
    // socketRef.current.on('getMessage', (Conversation) => {
    let timer
    socketRef.current.on('typingResponse', (data) => {
      clearTimeout(timer)
      setTypingStatus(data)
      timer = setTimeout(() => {
        setTypingStatus('')
      }, 800)
    })
    socketRef.current.emit('join', { receiverId: receiver?._id })
    // Listens for incoming messages
    socketRef.current.on('getMessage', (Conversation) => {
      // const incomingMessage = {
      //   message,
      //   // ownedByCurrentUser: message.senderId === socketRef.current.id,
      // }
      setMessages(Conversation)
    })

    // console.log('socketRef', socketRef)
    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect()
    }
  }, [socketRef, receiver?._id, token])

  const handleTyping = () => {
    socketRef.current.emit('typing', `${username} is Typing`)
  }
  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = ({ message, receiverId }) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      message,
      senderId: user._id,
      receiverId,
    })
  }
  return { messages, sendMessage, handleTyping, typingStatus }
}

export default useChatMessage
