import React, { createContext, useContext, useState } from "react";

// إنشاء السياق
const AuthContext = createContext();

// مُوفر السياق لتوفير حالة المستخدم عبر التطبيق
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // حالة تسجيل الدخول

  const login = () => setIsAuthenticated(true); // تسجيل الدخول
  const logout = () => setIsAuthenticated(false); // تسجيل الخروج

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// هوك لاستخدام حالة تسجيل الدخول بسهولة
export const useAuth = () => useContext(AuthContext);
