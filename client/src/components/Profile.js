import React from 'react'
import { useAuth } from '../context/auth'

const Profile = () => {
  const Auth = useAuth()
  return (
    <div className=' w-full h-full'>
      <h4 className='text-xl font-semibold mb-6'>Contacts</h4>
      <div className='flex-col w-full mb-6 text-black-light flex justify-center items-center rounded-md font-medium'>
        <div className='rounded-full h-24 w-24 flex justify-center items-center border-2 mb-6'>
          <img
            className='m-4 rounded-full w-11/12 bg-white-pure'
            src='Logo.png'
            alt='hello'
          />
        </div>
        <h5 className='text-base font-semibold first-letter:uppercase'>
          {Auth.user?.username}
        </h5>
        <div className='flex justify-center items-center'>
          <div
            className={`p-[2px] w-1 h-1 border-4 ${
              Auth.user?.status === 'Online'
                ? 'border-green-500 '
                : 'border-gray-500 '
            }  rounded-full`}
          />

          <p className='ml-1 font-light text-gray-base'>{Auth.user?.status}</p>
        </div>
      </div>
      <div className='border-t py-6'>
        <p className='text-sm italic text-gray-base mb-6'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          nam praesentium adipisci iste deleniti.
        </p>
        <div className='bg-white-pure flex flex-col w-full p-4 rounded'>
          <div className='mb-6'>
            <h5 className='text-gray-base'>Username</h5>
            <h6 className='font-semibold text-sm ml-1 first-letter:uppercase'>
              {Auth.user?.username}
            </h6>
          </div>
          <div className='mb-6'>
            <h5 className='text-gray-base'>Email</h5>
            <h6 className='font-semibold text-sm ml-1 first-letter:uppercase'>
              {Auth.user?.email}
            </h6>
          </div>
          <div className='mb-6'>
            <h5 className='text-gray-base'>Created :</h5>
            <h6 className='font-semibold text-sm ml-1 first-letter:uppercase'>
              {new Date(Auth.user?.createdAt).toDateString()}
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
