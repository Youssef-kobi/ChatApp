/* eslint-disable react/prop-types */
const UserProfile = ({ user }) => {
  console.log(user)
  return (
    <div className=' w-full p-6 h-full'>
      <div className='flex-col w-full mb-6 text-black-light dark:text-white-pure flex justify-center items-center rounded-md font-medium'>
        <img
          src={`${user.picture || './avatar.svg'}`}
          className='h-[8rem] w-[8rem] rounded-full bg-blue-light border-4 dark:border-dark-gray'
          alt='Your Avatar'
        />

        <h5 className='text-base font-semibold first-letter:uppercase'>
          {user?.firstName} {user?.lastName}
        </h5>
        <div className='flex justify-center items-center'>
          <div className='p-[2px] w-1 h-1 border-4 border-green-500  rounded-full' />
          <p className='ml-1 font-light text-gray-base'>Online</p>
        </div>
      </div>
      <div className='border-t dark:border-dark-gray py-6'>
        <p className='text-sm italic text-gray-base mb-6'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          nam praesentium adipisci iste deleniti.
        </p>
        <div className='bg-white-pure dark:bg-dark-pure flex flex-col w-full p-4 rounded'>
          <div className='mb-6'>
            <h5 className='text-gray-base'>Username</h5>
            <h6 className='font-semibold text-sm ml-1 first-letter:uppercase'>
              {user?.username}
            </h6>
          </div>
          <div className='mb-6'>
            <h5 className='text-gray-base'>Email</h5>
            <h6 className='font-semibold text-sm ml-1 first-letter:uppercase'>
              {user?.email}
            </h6>
          </div>
          <div className='mb-6'>
            <h5 className='text-gray-base'>Created :</h5>
            <h6 className='font-semibold text-sm ml-1 first-letter:uppercase'>
              {new Date(user?.createdAt).toDateString()}
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
