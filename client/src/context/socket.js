/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import io from 'socket.io-client'
import { useAuth } from './auth'

const SocketContext = createContext()
export const useSocket = () => useContext(SocketContext)
export const SocketProvider = ({ children }) => {
  const { logout, isLoggedIn, token } = useAuth()
  const [socket, setSocket] = useState()
  // let socket = ''
  useEffect(() => {
    if (!socket && isLoggedIn)
      setSocket(
        io('http://localhost:3005', {
          auth: {
            token,
          },
        })
      )

    return () => {
      socket?.disconnect()
    }
  }, [socket, isLoggedIn, token])
  socket?.on('connect_error', (err) => {
    logout()
    toast.error(err.message) // prints the message associated with the error
  })
  // const foo = useMemo(() => SocketContext, [SocketContext])
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}
