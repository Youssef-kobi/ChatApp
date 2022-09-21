import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate,
} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { AuthProvider, useAuth } from './context/auth'
// import Dashboard from './pages/Dashboard'
// import Login from './pages/Login'
// import Register from './pages/Register'
import * as PATHS from './constants/routes'
import { socket, SocketContext } from './context/socket'
// import {BrowserRouter,Routes,Route} from 'react-dom'

const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const ResetPassword = lazy(() => import('./pages/ResetPassword'))
// const NotFound = lazy(() => import('./pages/NotFound'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
// const Profile = lazy(() => import('./pages/Profile'))

const PrivateOutlet = () => {
  const { isLoggedIn } = useAuth()
  return isLoggedIn ? <Outlet /> : <Navigate to={PATHS.LOGIN} />
}
const PublicOutlet = () => {
  /* A hook that is listening to the user state. */
  const { isLoggedIn } = useAuth()
  return !isLoggedIn ? <Outlet /> : <Navigate to={PATHS.DASHBOARD} />
}
const App = () => (
  <AuthProvider>
    <SocketContext.Provider value={socket}>
      <Suspense fallback='loading...'>
        <BrowserRouter>
          <Routes>
            <Route element={<PublicOutlet />}>
              <Route path={PATHS.LOGIN} element={<Login />} />
              <Route path={PATHS.SIGNUP} element={<Register />} />
              <Route path={PATHS.RESETPASSWORD} element={<ResetPassword />} />
            </Route>
            <Route element={<PrivateOutlet />}>
              <Route path={PATHS.DASHBOARD} element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </SocketContext.Provider>
  </AuthProvider>
)

export default App
