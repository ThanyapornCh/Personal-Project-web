import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const login = async input => {
    return await axios.post('http://localhost:8888/auth/login', input);
  };
  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
}
