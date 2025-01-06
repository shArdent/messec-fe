import { AuthFormData } from "../types";
import axiosIntance from "./axios";

export const handleRegister = async (data: AuthFormData) => {
    const response = await axiosIntance.post("/auth/register", data)

    return response;
};
