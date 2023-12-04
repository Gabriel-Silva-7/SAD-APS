import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState({ nome: "", email: "" });
  const token = localStorage.getItem("token");

  useEffect(() => {
    setAuthenticated(!!token);
    token && verifyToken(token);
  }, [token]);

  const verifyToken = (token) => {
    const currentDate = new Date();
    const decoded = jwtDecode(token);
    setUserData(decoded);
    const dateExp = new Date(decoded.exp * 1000);
    if (dateExp < currentDate) return logout();
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, logout, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
