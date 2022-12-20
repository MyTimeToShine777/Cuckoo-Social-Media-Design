import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ user }) => {
  const Currentuser = user;
  return Currentuser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
