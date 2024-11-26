import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    email: "",
  });

  const updateEmail = (email) => {
    setAuthData((prev) => ({ ...prev, email }));
  };

  return (
    <AuthContext.Provider value={{ authData, updateEmail }}>
      {children}
    </AuthContext.Provider>
  );
};
