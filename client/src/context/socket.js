import { createContext, useContext } from 'react'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:1337')
const socketContext = createContext(socket)

export default socketContext
export const useSocket = () => useContext(socketContext)
