import { AxiosError } from "axios";
import { AuthFormData } from "../types";
import axiosIntance from "./axios";

export const handleRegister = async (
  data: AuthFormData,
  setErrors: (name: string, error: { type: string; message: string }) => void,
  navigate: (path: string) => void,
) => {
  try {
    await axiosIntance.post("/auth/register", data);
  } catch (err: any) {
    const { error } = err.response.data;

    setErrors("email", { type: "manual", message: error });
    return;
  }

  navigate("/auth/login");
};

export const handleLogin = async (
  payload: AuthFormData,
  navigate: (path: string) => void,
) => {
  try {
    const { data } = await axiosIntance.post("/auth/login", payload);

    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("userId", data.data.id);
    sessionStorage.setItem("email", data.data.email);

    navigate(`/profile/${data.data.id}/post`);
  } catch (error) {
    console.log(error);
  }
};

export const handleLogout = (navigate: (e: string) => void) => {
  sessionStorage.clear();
  navigate("/login");
  return;
};
