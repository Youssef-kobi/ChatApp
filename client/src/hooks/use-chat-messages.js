import { useEffect, useRef, useState } from 'react'
import socketIOClient from 'socket.io-client'
import { useAuth } from '../context/auth'

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage' // Name of the event
const SOCKET_SERVER_URL = 'http://localhost:3001'

const useChatMessage = (roomId) => {
  const [messages, setMessages] = useState([]) // Sent and received messages
  const socketRef = useRef()
  const { token } = useAuth()

  useEffect(() => {
    // Creates a WebSocket connection
    socketRef.current = socketIOClient.connect(SOCKET_SERVER_URL, {
      auth: {
        token,
      },
      query: { roomId },
    })

    // Listens for incoming messages
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      }
      setMessages((prevMessages) => [...prevMessages, incomingMessage])
    })

    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect()
    }
  }, [roomId, token])

  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    })
  }

  return { messages, sendMessage }
}

export default useChatMessage
