/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import io from 'socket.io-client'
import { useAuth } from './auth'

const SocketContext = createContext()
export const useSocket = () => useContext(SocketContext)
export const SocketProvider = ({ children }) => {
  const { logout, token } = useAuth()
  console.log('hop')
  const socketRef = useRef(null)
  useEffect(() => {
    if (token) {
      socketRef.current = io('http://localhost:3005', {
        auth: {
          token,
        },
      })
    }
  }, [])
  const { current: socket } = socketRef

  socket?.on('connect_error', (err) => {
    logout()
    toast.error(err.message) // prints the message associated with the error
  })
  // const foo = useMemo(() => SocketContext, [SocketContext])
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}
