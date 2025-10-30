"use client"
import { useContext, createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [scrollCategory, setScrollCategory] = useState("");

  return (
    <AuthContext.Provider
      value={{
        scrollCategory,
        setScrollCategory,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
