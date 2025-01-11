import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type comment = {
  Id: number;
  PostId: number;
  Body: string;
  CreatedAt: string;
};

export type post = {
  Id: number;
  Body: string;
  CreatedAt: string;
  Comments: comment[];
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
  Body: string;
  CreatedAt: string;
  Id: number;
  PostId: number;
  UserId?: number;
};

export type PostData = {
  PostBody: string;
  PostCreatedAt: string;
  PostId: number;
  PostUserId: number;
  Comments?: CommentData[];
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
  Id: number;
  QuestionId: number;
  AnswerBody: string;
  CreatedAt: string;
};

export type AnswerReq = {
  body: string;
  questionId: number;
};

export type QuestionRes = {
  Id: number;
  UserId: number;
  Body: string;
  CreatedAt: string;
  Answer?: AnswerRes;
};
