/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
// import { yupResolver } from '@hookform/resolvers/yup'
// import React, { useEffect } from 'react'
// import { useForm } from 'react-hook-form'
// import { messageSchema } from '../constants/YupValidations'
// import { useSocket } from '../context/socket'
import EmojiPicker, {
  // EmojiStyle,
  Theme,
  EmojiClickData,
  // Emoji,
} from 'emoji-picker-react'
import { useState } from 'react'

const ChatInput = ({ sendMessage, receiver, handleTyping }) => {
  // const socket = useSocket()
  // const {
  //   register,
  //   handleSubmit,
  //   // formState: { errors },
  //   reset,
  //   // setError,
  // } = useForm({ resolver: yupResolver(messageSchema) })
  const [text, setText] = useState('')

  const [selectedEmoji, setSelectedEmoji] = useState('')
  const [emojiToggle, setEmojiToggle] = useState(false)
  const onSubmitHandler = ({ message }) => {
    sendMessage({
      message,
      receiverId: receiver._id,
    })
    setText('')
  }
  const onClick = (emojiData: EmojiClickData) => {
    console.log(emojiData)
    setSelectedEmoji(emojiData.emoji)
    // setText((prev) => prev)
  }
  console.log(selectedEmoji)
  return (
    <div className='w-full h-20 flex justify-between px-4 items-center border-t'>
      <div
        // onSubmit={handleSubmit(onSubmitHandler)}
        className='flex justify-between w-full p-10'
      >
        <input
          id='message'
          className='w-full px-4 py-2 outline-none rounded-md bg-gray-light'
          // eslint-disable-next-line react/jsx-props-no-spreading
          // {...register('message')}
          value={text}
          onChange={(event) => {
            console.log(event)
            setText(event.target.value)
          }}
          placeholder='Enter Message...'
          onBlur={({ target }) => target.focus}
          // onKeyUp={(event) => console.log(event)}
          onKeyDown={handleTyping}
          type='text'
        />
        <div className='flex justify-center items-center text-violet-500'>
          {/* Emoji */}
          <button
            type='button'
            onClick={() => setEmojiToggle(true)}
            className='p-1 mx-1 '
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
          {emojiToggle && (
            <EmojiPicker
              onEmojiClick={onClick}
              autoFocusSearch={false}
              theme={Theme.AUTO}
              lazyLoadEmojis
              // previewConfig={{
              //   defaultCaption: "Pick one!",
              //   defaultEmoji: "1f92a" // 🤪
              // }}
              // skinTonesDisabled
              // searchPlaceHolder="Filter"
              // defaultSkinTone={SkinTones.MEDIUM}
              // emojiStyle={EmojiStyle.NATIVE}
            />
          )}
          {/* attached file */}
          <button type='button' className='p-1 mx-1'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'
              />
            </svg>
          </button>
          {/* photos */}
          <button type='button' className='p-1 mx-1'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
          </button>
          {/* Send */}
          <button
            type='button'
            onClick={onSubmitHandler}
            className='p-3 mx-1 rounded-lg text-white-pure bg-violet-500'
          >
            <svg
              className='w-6 h-6 rotate-90 '
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatInput
