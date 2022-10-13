import React from 'react'

const EmptyChatPage = () => (
  <div className='w-full h-full mb-16 flex flex-col justify-center items-center'>
    <svg
      className='w-2/12 h-2/12'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
      />
    </svg>
    <h1 className='text-2xl text-bold'>Yel-Chat</h1>
    <h3>Send and receive messages instantly </h3>
  </div>
)

export default EmptyChatPage
