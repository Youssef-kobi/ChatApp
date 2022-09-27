/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import pkg from '../../package.json'
import { loginSchema } from '../constants/YupValidations'
import { useAuth } from '../context/auth'
import * as PATHS from '../constants/routes'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({ resolver: yupResolver(loginSchema) })
  const Navigate = useNavigate()
  const Auth = useAuth()
  // the register function register an input into react-hook-form and return : {
  //    name: '',
  //    onChange: ƒ,
  //    onBlur: ƒ,
  //    ref: ƒ
  //  }
  // eslint-disable-next-line no-unused-vars
  const onSubmitHandler = (data) => {
    axios
      .post('http://localhost:3005/auth/signIn', data)
      .then((response) => {
        Auth.login(response.data.token)
        toast.success(`Hey ${data.username} welcome back :)`)
        Navigate('/')
      })
      .catch(({ response }) => {
        toast.error(response.data)
        setError(
          response.status === 404 ? 'username' : 'password',
          { type: 'custom', message: response.data },
          { shouldFocus: true }
        )
      })
    reset()
  }
  return (
    <div className='h-screen w-full flex justify-center pt-24 bg-blue-light'>
      <div className='container w-3/12 flex flex-col items-center px-3'>
        <div className='flex flex-col items-center w-full'>
          <img className='mb-12 h-20 mx-0 ' src='./Logo.svg' alt='logo' />
          <h4 className=' text-[1.3rem] text-center font-bold text-black-light mb-2'>
            Sign in
          </h4>
          <p className='mb-6 text-center text-gray-base text-base '>
            Sign in to continue
          </p>
        </div>
        <div className='bg-white-pure flex flex-col items-center w-full rounded'>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className='flex flex-col w-full p-10'
          >
            <div className='flex flex-col w-full mb-3 text-black-light font-medium'>
              <label className='mb-2 ' htmlFor='username'>
                Username
              </label>
              <div
                className={`flex w-full border rounded h-10 ${
                  !errors.username?.message
                    ? 'border-gray-light'
                    : 'border-red-700 border-2'
                }`}
              >
                <label
                  htmlFor='username'
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
                  id='username'
                  className='w-full px-4 py-2 outline-none'
                  {...register('username')}
                  placeholder='Username'
                  type='text'
                />
              </div>
              <p className='text-xs px-1 text-red-700'>
                {errors.username?.message}
              </p>
            </div>
            <div className='flex flex-col w-full mb-3 text-black-light font-medium'>
              <div className='flex justify-between items-center'>
                <label className='mb-2 ' htmlFor='password'>
                  Password
                </label>
                <Link className='text-xs' to={PATHS.RESETPASSWORD}>
                  Forgot password ?
                </Link>
              </div>
              <div
                className={`flex w-full border rounded h-10 ${
                  !errors.password?.message
                    ? 'border-gray-light'
                    : 'border-red-700 border-2'
                }`}
              >
                <label
                  htmlFor='password'
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
                      d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                    />
                  </svg>
                </label>
                <input
                  id='password'
                  className='w-full px-4 py-2 outline-none'
                  {...register('password')}
                  placeholder='Password'
                  type='password'
                />
              </div>
              <p className='text-xs px-1 text-red-700'>
                {errors.password?.message}
              </p>
            </div>
            {/* Checkbox */}
            <div className='flex flex-col w-full mb-3 text-black-light'>
              <div className='flex items-center'>
                <input
                  id='rememberMe'
                  className='mb-1 outline-none border border-gray-base text-gray-base focus:shadow-005 focus:shadow-violet-500 accent-violet-600'
                  {...register('rememberMe')}
                  type='checkbox'
                />
                <label className='mx-1' htmlFor='rememberMe'>
                  Remember Me
                </label>
              </div>
            </div>
            <button
              className=' rounded px-4 py-2 bg-violet-500 active:bg-violet-700 hover:bg-violet-700 text-white-pure font-medium'
              type='submit'
            >
              Sign in
            </button>
          </form>
        </div>
        <div className='mt-12 w-full flex items-center flex-col'>
          <p>
            Don&apos;t have an account ?{' '}
            <Link to='/register' className='text-blue-600'>
              Signup now
            </Link>
          </p>
          <p className='flex mt-12 items-center'>
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

export default Login
