import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isSignin: boolean;
  childern: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isSignin,
  childern,
}) => {
  if (!isSignin) {
    return <Navigate to="/login" replace />;
  }

  return <>{childern}</>;
};

export default ProtectedRoute;
