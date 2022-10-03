/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
// import React, { useEffect, useState } from 'react'
// import { useSocket } from '../context/socket'
// import { useEffect, useState } from 'react'
// import { useSocket } from '../context/socket'
import { useEffect, useState } from 'react'
import { useAuth } from '../../context/auth'
import { useSocket } from '../../context/socket'

const ChatHistory = ({ receiver, conversation }) => {
  const { user } = useAuth()
  const socket = useSocket()
  const [typingStatus, setTypingStatus] = useState()
  useEffect(() => {
    let timer
    // TypingResponse
    socket?.on('typingResponse', (username) => {
      clearTimeout(timer)
      setTypingStatus(`${username} is Typing`)
      timer = setTimeout(() => {
        setTypingStatus('')
      }, 800)
    })
  }, [socket])
  const nps = conversation?.message.slice().reverse()
  return (
    <div className=' bg-white-pure h-full overflow-y-auto '>
      <ol className='w-full flex flex-col-reverse h-full  overflow-y-auto  px-4 pt-4'>
        {typingStatus && (
          <li
            // eslint-disable-next-line react/no-array-index-key
            className={`p-4 pb-0 m-2 mb-0 flex items-center text-sm  rounded `}
          >
            <div className='rounded flex items-center'>
              <h6 className='first-letter:uppercase'>{typingStatus}</h6>
              <p className='animate-dotA text-lg'>.</p>
              <p className='animate-dotB text-lg'>.</p>
              <p className='animate-dotC text-lg'>.</p>
            </div>
          </li>
        )}
        {conversation
          ? nps.map((item) => (
              <li
                // eslint-disable-next-line react/no-array-index-key
                key={item._id}
                className={`p-4 m-2 flex flex-col rounded ${
                  item.authorId === user._id ? 'items-end' : ' items-start '
                }`}
              >
                <div
                  className={` p-4 rounded-3xl max-w-[50%] ${
                    item.authorId === user._id
                      ? 'bg-violet-500'
                      : ' bg-gray-light'
                  }`}
                >
                  <p
                    className={`font-normal w-full break-words ${
                      item.authorId === user._id
                        ? 'text-white-light'
                        : ' text-black-light'
                    }`}
                  >
                    {item.message}
                  </p>
                  <p
                    className={`text-xs flex items-center ${
                      item.authorId === user._id && 'text-white-light'
                    }`}
                  >
                    <svg
                      className='w-4 h-4 mr-1'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    {new Date(item.createdAt).toLocaleTimeString()}
                  </p>
                </div>
                <h5 className='text-black-light font-semibold  first-letter:uppercase'>
                  {item.authorId === user._id
                    ? user.username
                    : receiver?.username}
                </h5>
              </li>
            ))
          : 'blabla'}
      </ol>
    </div>
  )
}

export default ChatHistory
