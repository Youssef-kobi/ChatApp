/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import axios from 'axios'
import pkg from '../../package.json'
import * as PATHS from '../constants/routes'
import { resetPasswordSchema } from '../constants/YupValidations'
// import { useAuth } from '../context/auth'

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // setError,
  } = useForm({ resolver: yupResolver(resetPasswordSchema) })
  const Navigate = useNavigate()
  // const Auth = useAuth()
  const onSubmitHandler = (data) => {
    reset()
    toast.success(`an email has been sent to : ${data.email}`)
    Navigate(PATHS.LOGIN)

    // axios
    //   .post('http://172.24.147.103:1337/auth/signIn', data)
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
  }
  return (
    <div className='h-screen w-full flex justify-center pt-24 bg-blue-light'>
      <div className='container w-3/12 flex flex-col items-center px-3 font-Public'>
        <div className='flex flex-col items-center w-full'>
          <img className='mb-12 h-[30px] mx-0 ' src='./Logo.png' alt='logo' />
          <h4 className=' text-[1.3rem] text-center font-bold text-black-light mb-2'>
            Reset Password
          </h4>
          <p className='mb-6 text-center text-gray-base text-base '>{`Reset your ${pkg.name.replace(
            '-',
            ' '
          )} password now.`}</p>
        </div>
        <div className='bg-white-pure flex flex-col items-center w-full rounded'>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className='flex flex-col w-full p-10'
          >
            <div className='flex flex-col w-full mb-3 text-black-light font-medium'>
              <label className='mb-2 ' htmlFor='email'>
                E-mail
              </label>
              <div
                className={`flex w-full border rounded h-10 ${
                  !errors.email?.message
                    ? 'border-gray-light'
                    : 'border-red-700 border-2'
                }`}
              >
                <label
                  htmlFor='email'
                  className='bg-white-light flex justify-center items-center w-12'
                >
                  <svg
                    className='w-4 h-4 text-gray-base'
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
                </label>
                <input
                  id='email'
                  className='w-full px-4 py-2 outline-none'
                  {...register('email')}
                  placeholder='Email'
                  type='text'
                />
              </div>
              <p className='text-xs px-1 text-red-700'>
                {errors.email?.message}
              </p>
            </div>
            <button
              className=' rounded px-4 py-2 bg-violet-500 active:bg-violet-700 hover:bg-violet-700 text-white-pure font-medium'
              type='submit'
            >
              Reset
            </button>
          </form>
        </div>
        <div className='mt-12 w-full flex items-center flex-col'>
          <p>
            Remember It ?{' '}
            <Link to='/register' className='text-blue-600'>
              SignIn now !
            </Link>
          </p>
          <p className='flex mt-12 text-center items-center'>
            @ 2022 {pkg.name.replace('-', ' ')}. Crafted with
            <svg
              className='w-6 h-6 fill-rose-800'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                clipRule='evenodd'
              />
            </svg>
            by {pkg.author.replace('-', ' ')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
