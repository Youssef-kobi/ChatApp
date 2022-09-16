import { useAuth } from '../context/auth'

const Dashboard = () => {
  const Auth = useAuth()
  return (
    <div className=' w-full h-screen flex flex-col items-center'>
      <button type='button' onClick={Auth.logout}>
        Log Out
      </button>
    </div>
  )
}

export default Dashboard
