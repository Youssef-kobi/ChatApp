/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
// import React, { useState } from 'react'

import { useEffect, useState } from 'react'
import { useAuth } from '../context/auth'
import { useSocket } from '../context/socket'

const Chats = ({ setReceiver, receiver }) => {
  const socket = useSocket()
  const { user } = useAuth()
  const [conversations, setConversations] = useState()
  useEffect(() => {
    socket?.emit('getLastConversations')
    socket?.on('lastConversations', (Conversations) => {
      setConversations(() => Conversations)
    })
  }, [socket, conversations])
  return (
    // const [search, setSearch] = useState('')
    <div className=' w-full h-full '>
      <div className='p-6'>
        <h4 className='text-xl font-semibold mb-6'>Chats</h4>
        <div className='flex flex-col w-full mb-3 text-black-light dark:text-white-pure bg-gray-light dark:bg-dark-gray  rounded-md font-medium'>
          <div className={`flex w-full  h-10 `}>
            <label
              htmlFor='search'
              className=' flex justify-center items-center w-12'
            >
              <svg
                className='w-6 h-6 text-gray-base'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </label>
            <input
              id='search'
              className='w-full px-2 py-2 outline-none rounded-md bg-gray-light dark:bg-dark-gray '
              placeholder='search'
              type='text'
            />
          </div>
        </div>
        <h5 className='text-md font-semibold'>Recent</h5>
      </div>
      <div className='px-2'>
        <ol className='mx-2 '>
          {conversations
            ? conversations
                ?.filter((item) => item.message.length !== 0)
                .map((conversation) => {
                  const contactedUser =
                    conversation.receiverId._id === user._id
                      ? conversation.senderId
                      : conversation.receiverId

                  const [lastMessage] = conversation.message.slice(-1)
                  return (
                    <li key={conversation._id} className='mb-2'>
                      <button
                        type='button'
                        onClick={(event) => {
                          event.preventDefault()
                          // setSelected(contactedUser)
                          setReceiver(contactedUser)
                        }}
                        className={`flex justify-between rounded-xl hover:bg-gray-light dark:hover:bg-dark-gray  w-full px-5 py-4 ${
                          receiver?._id === contactedUser._id &&
                          'bg-gray-light dark:bg-dark-gray '
                        }`}
                      >
                        <div className='m-auto flex rounded-full '>
                          <img
                            src={`${contactedUser?.picture || './avatar.svg'}`}
                            className={`h-10 w-10 max-w-[10rem] rounded-full bg-blue-light border-2  ${
                              contactedUser.status === 'Online'
                                ? 'border-green-500 '
                                : 'border-gray-500 '
                            }`}
                            alt='Your Avatar'
                          />
                        </div>
                        <div className='flex-grow flex flex-col justify-center items-start ml-4'>
                          <div className='text-base flex items-center  '>
                            <h5 className='font-semibold first-letter:uppercase'>
                              {contactedUser.firstName} {contactedUser.lastName}
                            </h5>
                          </div>
                          <p className='text-gray-base text-sm'>
                            {lastMessage.message}
                          </p>
                        </div>
                        <div className='flex flex-col'>
                          <p className='text-gray-base text-xs'>
                            {new Date(
                              lastMessage?.createdAt
                            ).toLocaleTimeString(
                              {},
                              { hour: '2-digit', minute: '2-digit' }
                            )}
                          </p>
                        </div>
                      </button>
                    </li>
                  )
                })
            : 'loading...'}
        </ol>
      </div>
    </div>
  )
}
export default Chats
