/* eslint-disable react/prop-types */

import { useAuth } from '../../context/auth'

const SideBar = ({ selected, setSelected, setDarkMode, darkMode }) => {
  // const [blackTheme, setBlackTheme] = useState(false)
  const { user, logout } = useAuth()
  const chatPreferences = [
    {
      name: 'profile',
      img: (
        <svg
          className='w-7 h-7'
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
          className='w-7 h-7 '
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
    // {
    //   name: 'groups',
    //   img: (
    //     <svg
    //       className='w-7 h-7 '
    //       fill='none'
    //       stroke='currentColor'
    //       viewBox='0 0 24 24'
    //       xmlns='http://www.w3.org/2000/svg'
    //     >
    //       <path
    //         strokeLinecap='round'
    //         strokeLinejoin='round'
    //         strokeWidth={2}
    //         d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
    //       />
    //     </svg>
    //   ),
    //   onClick: '',
    // },
    {
      name: 'contacts',
      img: (
        <svg
          className='w-7 h-7 '
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

  return (
    <div className='bg-white-pure dark:bg-dark-pure flex flex-col items-center max-w-[4.5rem] min-w-[4.5rem] justify-between p-2 h-screen shadow-md z-10 text-gray-base'>
      <div className='min-h-[4.5rem] flex  justify-center items-center max-h-[4.5rem]'>
        <img src='Logo.svg' className='h-full' alt='Logo' />
      </div>
      <div>
        {chatPreferences.map((item) => (
          <button
            type='button'
            key={item.name}
            onClick={() => setSelected(item.name)}
            className={`w-14 h-14 flex my-2 justify-center items-center rounded hover:bg-gray-light dark:hover:bg-dark-gray group relative duration-300 ${
              selected === item.name &&
              'bg-gray-light dark:bg-dark-gray  text-violet-500'
            } `}
          >
            {item.img}
            <span className="absolute hidden group-hover:flex -top-2 -translate-y-full px-2 py-1 bg-gray-400 rounded-lg text-center text-white-pure text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent">
              {item.name}
            </span>
          </button>
        ))}
      </div>
      <div className='flex flex-col justify-center items-center'>
        <button
          type='button'
          className='w-14 h-14 flex justify-center items-center rounded hover:bg-gray-light dark:hover:bg-dark-gray  group relative duration-300'
        >
          <span className="absolute hidden group-hover:flex -top-2 -translate-y-full px-2 py-1 bg-gray-400 rounded-lg text-center text-white-pure text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent">
            languages
          </span>
          <svg
            className='w-7 h-7 '
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
        </button>
        <button
          type='button'
          onClick={() => {
            setDarkMode(!darkMode)
          }}
          className='w-14 h-14 flex justify-center items-center rounded hover:bg-gray-light dark:hover:bg-dark-gray   group relative duration-300'
        >
          <span className="absolute hidden group-hover:flex -top-2 -translate-y-full px-2 py-1 bg-gray-400 rounded-lg text-center text-white-pure text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent">
            Dark/Light mode
          </span>
          {darkMode ? (
            <svg
              className='w-7 h-7 '
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
            </svg>
          ) : (
            <svg
              className='w-7 h-7 '
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
          )}
        </button>
        <button
          type='button'
          className='w-14 h-14 flex justify-center items-center rounded hover:bg-gray-light dark:hover:bg-dark-gray  group relative duration-300'
        >
          <div className='m-auto flex rounded-full '>
            <img
              src={`${user?.picture || './avatar.svg'}`}
              className='h-10 w-10 rounded-full bg-blue-light border-2 dark:border-dark-light'
              alt='Your Avatar'
            />
          </div>
          <ol className='absolute  py-2 hidden group-hover:flex group-hover:flex-col left-0 -translate-y-full text-base font-semibold w-32  bg-white-pure -top-0 border rounded-md after:absolute after:left-full '>
            <li className='p-4 w-full hover:bg-gray-light'>
              <button
                className='flex w-full justify-between'
                type='button'
                onClick={() => setSelected('profile')}
              >
                Settings
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
                    d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
              </button>
            </li>
            <li className='p-4 w-full hover:bg-gray-light'>
              <button
                className='flex w-full justify-between'
                type='button'
                onClick={() => logout()}
              >
                Log out
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
                    d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                  />
                </svg>
              </button>
            </li>
          </ol>
        </button>
      </div>
    </div>
  )
}

export default SideBar
