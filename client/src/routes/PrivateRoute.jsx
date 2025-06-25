import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";
import { AuthContext } from "../providers/Context";

function PrivateRoute({ children }) {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={location?.pathname} replace={true}/>;
  }
  return children;
}

export default PrivateRoute;
