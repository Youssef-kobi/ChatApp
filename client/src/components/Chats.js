/* eslint-disable jsx-a11y/label-has-associated-control */
// import React, { useState } from 'react'

const Chats = () => (
  // const [search, setSearch] = useState('')
  <div className=' w-full h-full'>
    <h4 className='text-xl font-semibold mb-6'>Chats</h4>
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
          // {...register('search')}
          // onChange={({ target }) => console.log(target.value)}
          placeholder='search'
          type='text'
        />
      </div>
      {/* <p className='text-xs px-1 text-red-700'>{errors.search?.message}</p> */}
    </div>
    <h5 className='text-md font-semibold'>Recent</h5>
  </div>
)

export default Chats
