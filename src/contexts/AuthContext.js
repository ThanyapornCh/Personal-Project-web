import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { getAccessToken, removeAccessToken } from '../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  // const [authenticateUser, setAuthenticateUser] = useState(
  //   getAccessToken() ? true : null
  // )
  const login = async input => {
    return await axios.post('http://localhost:8888/auth/login', input);
  };

  // const logout = () => {
  //   removeAccessToken()
  //   setAuthenticateUser(null)
  // }
  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
}
