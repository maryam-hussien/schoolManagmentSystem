import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // استيراد السياق

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // جلب حالة تسجيل الدخول

  // إذا لم يكن المستخدم مسجل الدخول، إعادة التوجيه إلى صفحة تسجيل الدخول
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // إذا كان المستخدم مسجل الدخول، عرض المحتوى المحمي
  return children;
};

export default ProtectedRoute;
