import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import React from 'react';

export default function ProtectedRouteAdmin({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser.role !== 'admin') {
    return <Navigate to={'/'} />;
  }
  return children;
}
