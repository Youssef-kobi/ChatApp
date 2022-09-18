import SideBar from '../components/SideBar'
import { useAuth } from '../context/auth'

const Dashboard = () => {
  const Auth = useAuth()
  return (
    <div className=' w-full h-screen flex items-center'>
      <SideBar />
      <button type='button' onClick={Auth.logout}>
        Log Out
      </button>
    </div>
  )
}

export default Dashboard
