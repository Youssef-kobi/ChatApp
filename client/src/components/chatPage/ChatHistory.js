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
    socket?.on('typingResponse', (firstName) => {
      clearTimeout(timer)
      setTypingStatus(`${firstName} is Typing`)
      timer = setTimeout(() => {
        setTypingStatus('')
      }, 800)
    })
  }, [socket])
  const nps = conversation?.message.slice().reverse()
  return (
    <div className=' bg-white-pure dark:bg-dark-pure h-full overflow-y-auto '>
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
        {nps
          ? nps.map((item) => {
              const contactedUser = item.authorId === user._id ? user : receiver
              return (
                <li
                  // eslint-disable-next-line react/no-array-index-key
                  key={item._id}
                  className={`p-4 m-2 flex flex-col rounded ${
                    item.authorId === user._id ? 'items-start' : ' items-end '
                  }`}
                >
                  <div
                    className={` p-4 rounded-3xl max-w-[50%] ${
                      item.authorId === user._id
                        ? 'bg-violet-500 ml-12'
                        : ' bg-gray-light dark:bg-dark-gray  mr-12'
                    }`}
                  >
                    <p
                      className={`font-normal w-full break-words ${
                        item.authorId === user._id
                          ? 'text-white-light'
                          : ' text-black-light dark:text-white-light'
                      }`}
                    >
                      {item.message}
                    </p>
                    <p
                      className={`text-xs flex items-center ${
                        item.authorId === user._id && 'text-white-pure'
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
                  <div
                    className={`flex items-center ${
                      item.authorId === user._id
                        ? 'flex-row-reverse'
                        : 'flex-row'
                    }`}
                  >
                    <h5 className='text-black-light dark:text-white-pure font-semibold  first-letter:uppercase'>
                      {item.authorId === user._id
                        ? 'Me'
                        : `${receiver?.firstName} ${receiver?.lastName}`}
                    </h5>
                    <img
                      src={`${contactedUser.picture || './avatar.svg'}`}
                      className={`h-10 w-10 rounded-full bg-blue-light ${
                        item.authorId !== user._id ? 'ml-2 ' : 'mr-2'
                      }`}
                      alt='Your Avatar'
                    />
                  </div>
                </li>
              )
            })
          : 'blabla'}
      </ol>
    </div>
  )
}

export default ChatHistory
