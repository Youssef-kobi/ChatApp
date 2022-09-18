import React from 'react'

const chatPreferences = [
  {
    name: 'profile',
    img: (
      <svg
        className='w-7 h-7 text-gray-base'
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
    ),
    onClick: '',
  },
  {
    name: 'chats',
    // eslint-disable-next-line no-constant-condition
    img: (
      <svg
        className='w-7 h-7 text-gray-base'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
        />
      </svg>
    ),

    onClick: '',
  },
  {
    name: 'groups',
    img: (
      <svg
        className='w-7 h-7 text-gray-base'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
        />
      </svg>
    ),
    onClick: '',
  },
  {
    name: 'contacts',
    img: (
      <svg
        className='w-7 h-7 text-gray-base'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
        />
      </svg>
    ),
    onClick: '',
  },
]

const userPreferences = [
  {
    name: 'languages',
    img: (
      <svg
        className='w-7 h-7 text-gray-base'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
        />
      </svg>
    ),
    onClick: '',
  },
  {
    name: 'themeMode',
    // eslint-disable-next-line no-constant-condition
    img: true ? (
      <svg
        className='w-7 h-7 text-gray-base'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
        />
      </svg>
    ) : (
      <svg
        className='w-7 h-7 text-gray-base'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
      </svg>
    ),
    onClick: '',
  },
  {
    name: 'avatar',
    img: (
      <svg
        className='w-7 h-7 text-gray-base'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    onClick: '',
  },
]
const SideBar = () => {
  console.log('Sidebar')
  return (
    <div className='bg-white-pure flex flex-col items-center max-w-[4.5rem] min-w-[4.5rem] justify-between p-2 h-screen shadow-lg '>
      <div className='min-h-[4.5rem] flex  justify-center items-center max-h-[4.5rem]'>
        <img src='Logo.png' className='h-7' alt='./Logo.png' />
      </div>
      <div>
        {chatPreferences.map((item) => (
          <button
            type='button'
            className='w-14 h-14 flex justify-center items-center rounded hover:bg-gray-light group relative duration-300'
          >
            {item.img}
            <span className="absolute hidden group-hover:flex -top-2 -translate-y-full px-2 py-1 bg-gray-400 rounded-lg text-center text-white-pure text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent">
              {item.name}
            </span>
          </button>
        ))}
      </div>
      <div className='flex flex-col justify-center items-center'>
        {userPreferences.map((item) => (
          <button
            type='button'
            className='w-14 h-14 flex justify-center items-center rounded hover:bg-gray-light  group relative duration-300'
          >
            <span className="absolute hidden group-hover:flex -top-2 -translate-y-full px-2 py-1 bg-gray-400 rounded-lg text-center text-white-pure text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent">
              {item.name}
            </span>
            {item.img}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SideBar
