import axiosIntance from "./axios";

export const getUserPost = (username: string) => {
  return axiosIntance.get(`/post-get/user/${username}`);
};

export const getUserData = (username: string) => {
  return axiosIntance.get(`/user/${username}`);
};

// add new post to a user
export const postUserPost = (body: string) => {
  return axiosIntance.post(`/post-mod`, { body });
};

type commentPayload = {
  body: string;
  postId: number;
};
export const postComment = (payload: commentPayload) => {
  return axiosIntance.post(`/comment/${payload.postId}`, {
    body: payload.body,
  });
};
