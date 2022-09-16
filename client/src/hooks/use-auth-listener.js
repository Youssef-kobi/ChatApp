import React, { useContext, useEffect, useState } from 'react'
// import FirebaseContext from '../context/firebase'
import AuthContext from '../context/user'
export const useAuth = () => {
  return useContext(AuthContext)
}
const useAuthListener = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')))

export default useAuth
