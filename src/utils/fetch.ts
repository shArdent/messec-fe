import { AnswerReq, CommentReq, QuestionReq } from "../types";
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

export const postComment = (payload: CommentReq) => {
  return axiosIntance.post(`/comment/${payload.postId}`, {
    body: payload.body,
  });
};

export const getUserQuestions = (payload: QuestionReq) => {
  return axiosIntance.get(`/question/${payload.userId}`);
};

export const postUserQuestion = (payload: QuestionReq) => {
  return axiosIntance.post(`/question/${payload.userId}`, {
    body: payload.body,
  });
};

export const postAnswer = (payload: AnswerReq) => {
  return axiosIntance.post(`/answer/${payload.questionId}`, {
    body: payload.body,
  });
};

export const deleteUserPost = (payload: { postId: number }) => {
  return axiosIntance.delete(`/post-mod/${payload.postId}`);
};
