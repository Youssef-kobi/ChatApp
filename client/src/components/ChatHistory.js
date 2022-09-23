/* eslint-disable react/prop-types */
// import React, { useEffect, useState } from 'react'
// import { useSocket } from '../context/socket'
// import { useEffect, useState } from 'react'
// import { useSocket } from '../context/socket'

const ChatHistory = ({ messages }) => (
  <div className=' bg-white-pure h-full  '>
    <ol className='messages-list'>
      {messages.map((message, i) => (
        <li
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className={`message-item ${
            message.ownedByCurrentUser ? 'my-message' : 'received-message'
          }`}
        >
          {message.body}
        </li>
      ))}
    </ol>
  </div>
)

export default ChatHistory
