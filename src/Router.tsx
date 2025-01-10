import { Route, Routes } from "react-router";
import App from "./App";
import AuthLayout from "./pages/auth/AuthLayout";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import ProfileLayout from "./pages/profile/ProfileLayout";
import PostPage from "./pages/PostPage";
import ErrorPage from "./pages/ErrorPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route path="profile/:username" element={<ProfileLayout />}>
        <Route path="post" element={<PostPage />} />
        <Route path="qna" />
      </Route>

      <Route path="*" element={<ErrorPage code="404" />} />
    </Routes>
  );
};

export default Router;
