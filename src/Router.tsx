import { Navigate, Route, Routes } from "react-router";
import AuthLayout from "./pages/auth/AuthLayout";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import ProfileLayout from "./pages/profile/ProfileLayout";
import PostPage from "./pages/PostPage";
import ErrorPage from "./pages/ErrorPage";
import QnaPage from "./pages/QnaPage";

const Router = () => {
  const userLogin = sessionStorage.getItem("userId");
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to={userLogin ? `/profile/${userLogin}/post` : "/auth/login"}
          />
        }
      />

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route path="profile/:username" element={<ProfileLayout />}>
        <Route path="post" element={<PostPage />} />
        <Route path="qna" element={<QnaPage />} />
      </Route>

      <Route path="*" element={<ErrorPage code="404" />} />
    </Routes>
  );
};

export default Router;
