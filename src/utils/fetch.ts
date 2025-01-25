import { AnswerReq, CommentReq, QuestionReq } from "../types";
import axiosIntance from "./axios";

export const getUserPost = (username: string) => {
  return axiosIntance.get(`/posts/${username}`);
};

export const getUserData = (username: string) => {
  return axiosIntance.get(`/users/${username}`);
};

// add new post to a user
export const postUserPost = (body: string) => {
  return axiosIntance.post(`/posts/`, { body });
};

export const postComment = (payload: CommentReq) => {
  return axiosIntance.post(`/comments/${payload.postId}`, {
    body: payload.body,
  });
};

export const getUserQuestions = (payload: QuestionReq) => {
  return axiosIntance.get(`/questions/${payload.userId}`);
};

export const postUserQuestion = (payload: QuestionReq) => {
  return axiosIntance.post(`/questions/${payload.userId}`, {
    body: payload.body,
  });
};

export const postAnswer = (payload: AnswerReq) => {
  return axiosIntance.post(`/answers/${payload.questionId}`, {
    body: payload.body,
  });
};

export const deleteUserPost = (payload: { postId: number }) => {
  return axiosIntance.delete(`/posts/${payload.postId}`);
};

export const deleteUserQuestion = (payload: { questionId: number }) => {
  return axiosIntance.delete(`/questions/${payload.questionId}`);
};

export const deleteUserAnswer = (payload: { answerId: number }) => {
  return axiosIntance.delete(`/answers/${payload.answerId}`);
};

export const fetchUserByQuery = (query: string) => {
  return axiosIntance.get(`/users?query=${query}`);
};
