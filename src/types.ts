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
  email: z.string({ required_error: "Tidak boleh kosong" }).email(),
  password: z
    .string({ required_error: "Tidak boleh kosong" })
    .min(8, { message: "Password terlalu pendek" }),
});
