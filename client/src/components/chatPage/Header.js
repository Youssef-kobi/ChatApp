/* eslint-disable react/prop-types */
import { useState } from 'react'
import Modal from '../Modal'
import UserProfile from './UserProfile'

const Header = ({ receiver }) => {
  const [showProfile, setShowProfile] = useState(false)
  return (
    <div className='w-full h-20 flex justify-between p-6 items-center border-b dark:border-dark-gray py-6'>
      <div className='flex items-center'>
        <div className='m-auto flex rounded-full '>
          <img
            src={`${receiver?.picture || './avatar.svg'}`}
            className='h-10 w-10 rounded-full bg-blue-light mr-2'
            alt='Your Avatar'
          />
        </div>
        <h5 className='font-semibold text-lg text-black-light dark:text-white-pure first-letter:uppercase'>
          {receiver.firstName} {receiver.lastName}
        </h5>
        <span
          className={`w-3 h-3 ml-2 rounded-full border-2 ${
            receiver.status === 'Online' ? 'bg-green-500' : 'bg-gray-500'
          }`}
        />
      </div>
      <div>
        {/* search */}
        <button type='button' className='p-1 mx-1'>
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
        </button>

        {/* call */}
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
              d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
            />
          </svg>
        </button>

        {/* videoCall */}
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
              d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
            />
          </svg>
        </button>
        {/* userProfile */}
        <Modal open={showProfile} onClose={() => setShowProfile(false)}>
          <UserProfile user={receiver} />
        </Modal>

        <button
          onClick={(event) => {
            event.preventDefault()
            setShowProfile(true)
          }}
          type='button'
          className='p-1 mx-1'
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
              d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
            />
          </svg>
        </button>
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
              d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
export default Header
