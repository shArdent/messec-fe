import { Route, Routes } from "react-router";
import App from "./App";
import AuthLayout from "@/pages/auth/AuthLayout";
import LoginPage from "@/pages/auth/Login";
import RegisterPage from "@/pages/auth/Register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
