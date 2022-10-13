/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { useAuth } from '../../context/auth'
// import { useSocket } from '../context/socket'
import groupSorting from '../../utils/groupSorting'

const Contacts = ({ setReceiver }) => {
  const { token } = useAuth()
  console.log('contacts')
  // const socket = useSocket()
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    axios
      .get('http://localhost:3005/api/users', {
        headers: {
          token,
        },
      })
      .then((response) => {
        setContacts(response.data)
      })
      .catch(({ response }) => {
        toast.error(response.data)
      })
  }, [token])

  return (
    <div className=' w-full h-full'>
      <div className='p-6'>
        <h4 className='text-xl font-semibold mb-6'>Contacts</h4>
        <div className='flex flex-col w-full text-black-light bg-gray-light dark:bg-dark-gray  rounded-md font-medium'>
          <div className='flex w-full h-10'>
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
              onChange={({ target }) => setSearch(target.value)}
              placeholder='search contacts'
              type='text'
            />
          </div>
        </div>
      </div>
      {Object.keys(
        groupSorting(contacts.filter((item) => item.username.includes(search)))
      )
        .sort()
        .map((letter) => (
          <div key={letter} className='px-10 pt-6'>
            <h4 className='uppercase font-semibold text-md text-violet-500'>
              {letter}
            </h4>
            <ul className='flex flex-col w-full items-start p-2'>
              {groupSorting(contacts)[letter].map((word) => (
                <li
                  key={word._id}
                  className='flex justify-between items-center py-2 w-full'
                >
                  <button
                    type='button'
                    onClick={() => {
                      setReceiver(word)
                    }}
                    className='first-letter:uppercase font-semibold text-sm'
                  >
                    {word.username}
                  </button>
                  <button
                    type='button'
                    className='rounded-full hover:bg-gray-light dark:hover:bg-dark-gray '
                    // onClick={() => console.log(word)}
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
                        d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  )
}

export default Contacts
