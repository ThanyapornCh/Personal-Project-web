import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { getAccessToken, removeAccessToken } from '../utils/local-storage';
import authApi from '../apis/auth-api';
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticateUser, setAuthenticateUser] = useState(
    getAccessToken() ? true : null
  );
  // useEffect(() => {
  //   const fetchAuthUser = async () => {
  //     try {
  //       const res = await authApi.getMe();
  //       setAuthenticateUser(res.data.user);
  //     } catch (err) {
  //       removeAccessToken();
  //     }
  //   };
  //   if (getAccessToken()) {
  //     fetchAuthUser();
  //   }
  // }, []);

  const login = async input => {
    return await axios.post('http://localhost:8888/auth/login', input);
  };

  const logout = () => {
    removeAccessToken();
    setAuthenticateUser(null);
  };
  return (
    <AuthContext.Provider value={{ login, logout, authenticateUser }}>
      {children}
    </AuthContext.Provider>
  );
}
