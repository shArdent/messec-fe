import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type comment = {
  id: number;
  post_id: number;
  body: string;
  created_at: string;
};

export type post = {
  id: number;
  body: string;
  created_at: string;
  comments: comment[];
};

export type FormFieldProps = {
  id: string;
  label: string;
  type: string;
  name: any;
  register: UseFormRegister<AuthFormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type AuthFormData = {
  email: string;
  password: string;
};

export const UserSchema: ZodType<AuthFormData> = z.object({
  email: z
    .string({ required_error: "Tidak boleh kosong" })
    .email({ message: "Email tidak valid" }),
  password: z
    .string({ required_error: "Tidak boleh kosong" })
    .min(8, { message: "Password terlalu pendek" }),
});

export type CommentData = {
  body: string;
  created_at: string;
  id: number;
  post_id: number;
  user_id?: number;
};

export type PostData = {
  body: string;
  created_at: string;
  id: number;
  user_id: number;
  comments?: CommentData[];
};

export type CommentReq = {
  body: string;
  postId: number;
};

export type QuestionReq = {
  userId: string;
  body?: string;
};

export type AnswerRes = {
  id: number;
  question_id: number;
  body: string;
  created_at: string;
};

export type AnswerReq = {
  body: string;
  questionId: number;
};

export type QuestionRes = {
  id: number;
  user_id: number;
  body: string;
  created_at: string;
  answer?: AnswerRes;
};

export type User = {
  id: number;
  username?: string;
  name?: string;
  email: string;
  bio?: string;
  post_count: number;
  question_count: number;
};
