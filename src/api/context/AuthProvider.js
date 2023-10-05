// Services
import { signInToAuthenticationService } from "../services/authenticationService";

// Hooks
import { createContext, useState } from "react";

// Context
export const AuthContext = createContext();

const AuthProvider = (props) => {
  // State
  const [user, setUser] = useState();

  const signIn = async (email, password) => {
    try {
      const result = await signInToAuthenticationService(email, password);
      setUser(result);
    } catch (error) {
      throw error;
    }
  };

  // Provider value
  const authContextValue = {
    user,
    signIn
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
