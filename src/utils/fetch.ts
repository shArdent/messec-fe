import axiosIntance from "./axios";

export const getUserPost = (username: string) => {
  return axiosIntance.get(`/post-get/user/${username}`);
};

export const getUserData = (username: string) => {
  return axiosIntance.get(`/user/${username}`);
};
