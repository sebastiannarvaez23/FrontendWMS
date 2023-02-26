import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = (props) => {
  if (!props.user) {
    return <Navigate to="/" />   
  }
  return <Outlet />;
};