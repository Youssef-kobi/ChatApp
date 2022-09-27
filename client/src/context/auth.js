/* eslint-disable react/prop-types */
import React, { useContext, useMemo, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  user: {},
})
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')))
  const userIsLoggedIn = !!token

  const [user, setUser] = useState({})
  const loginHandler = (loginToken) => {
    setToken(loginToken)
    localStorage.setItem('token', JSON.stringify(loginToken))
  }
  const logoutHandler = () => {
    setToken(null)
    localStorage.removeItem('token')
  }
  useEffect(() => {
    if (token)
      axios
        .get('http://localhost:3005/auth/getMe', {
          headers: {
            token,
          },
        })
        .then((response) => {
          setUser(response.data)
        })
        .catch(({ response }) => {
          toast.error(response.data)
          logoutHandler()
        })
    else setUser({})
  }, [token])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    user,
  }
  const foo = useMemo(() => contextValue, [contextValue])
  return <AuthContext.Provider value={foo}>{children}</AuthContext.Provider>
}
