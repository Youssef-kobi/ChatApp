/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react'
import io from 'socket.io-client'

export const socket = io.connect('http://localhost:1337')
export const SocketContext = createContext()

export const useSocket = () => useContext(SocketContext)
