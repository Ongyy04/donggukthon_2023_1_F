import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginState } from '../stores/user';

const ProtectedRoutes = () => {
  const isLoggedIn = useRecoilValue(loginState);

  if (!isLoggedIn) {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, render the child routes
  return <Outlet />;
};

export default ProtectedRoutes;
