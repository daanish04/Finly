import AuthCard from "@/components/authCard";
import React from "react";

function AuthLayout({ children }) {
  return <AuthCard>{children}</AuthCard>;
}

export default AuthLayout;
