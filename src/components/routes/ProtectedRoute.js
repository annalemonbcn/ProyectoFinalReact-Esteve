import { Navigate } from "react-router-dom";
import { AuthContext } from "../../api/context/AuthProvider";
import { useContext, useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log('user', user)
  }, [user])
  

  if (user) {
    return <Navigate to="/login" />
  } 
  return children;
};

export default ProtectedRoute;
