/* eslint-disable jsx-a11y/label-has-associated-control */
// import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { searchSchema } from '../constants/YupValidations'
import { useAuth } from '../context/auth'
import { useSocket } from '../context/socket'

const Contacts = () => {
  console.log('Contacts')
  const { token } = useAuth()
  const socket = useSocket()
  const [letter, setLetter] = useState('')
  // let letter
  console.log(socket)
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    axios
      .get('http://localhost:1337/api/users', {
        headers: {
          token,
        },
      })
      .then((response) => {
        // Auth.login(response.data.token)
        setContacts(response.data)
        console.log(response)
        // toast.success(`Hey ${data.username} welcome back :)`)
        // Navigate('/')
      })
      .catch(({ response }) => {
        console.log(response)
        // toast.error(response.data)
        //   setError(
        //     response.status === 404 ? 'username' : 'password',
        //     { type: 'custom', message: response.data },
        //     { shouldFocus: true }
        //   )
      })
    // reset()
  }, [])

  // const onSubmitHandler = (data) => {
  //   socket.emit('sendMessage', data)
  //   console.log(data)
  // axios
  //   .post('http://localhost:1337/auth/signIn', data)
  //   .then((response) => {
  //     Auth.login(response.data.token)
  //     toast.success(`Hey ${data.username} welcome back :)`)
  //     Navigate('/')
  //   })
  //   .catch(({ response }) => {
  //     toast.error(response.data)
  //     setError(
  //       response.status === 404 ? 'username' : 'password',
  //       { type: 'custom', message: response.data },
  //       { shouldFocus: true }
  //     )
  //   })
  // reset()
  // }
  return (
    <div className=' w-full h-full'>
      <h4 className='text-xl font-semibold mb-6'>Contacts</h4>
      <div className='flex flex-col w-full mb-3 text-black-light bg-gray-light rounded-md font-medium'>
        <div
          className={`flex w-full  h-10 `}
          // ${
          //   !errors.search?.message
          //     ? 'border-gray-light'
          //     : 'border-red-700 border-2'
          // }
        >
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
            className='w-full px-2 py-2 outline-none rounded-md bg-gray-light'
            // eslint-disable-next-line react/jsx-props-no-spreading
            // {...register('contacts')}
            onChange={({ target }) => setSearch(target.value)}
            placeholder='search contacts'
            type='text'
          />
        </div>
      </div>
      <h5 className='text-md font-semibold'>Recent</h5>
      {contacts
        .filter((item) => item.username.includes(search))
        .sort()
        .map((contact) => {
          setLetter(contact.username[0])
          console.log(letter)
          return (
            <>
              <h1>{letter}</h1>
              {/* eslint-disable-next-line no-underscore-dangle */}
              <h6 key={contact._id}>{contact.username}</h6>
            </>
          )
        })}
    </div>
  )
}

export default Contacts
