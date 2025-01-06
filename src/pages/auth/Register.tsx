import { useForm } from "react-hook-form";
import { AuthFormData, UserSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/InputField";
import { handleRegister } from "../../utils/auth";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<AuthFormData>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      await handleRegister(data);
    } catch (error) {
      const statusCode = (error as AxiosError).status;
      if (statusCode == 400) {
        setError("email", {
          type: "manual",
          message: "Email atau password anda salah",
        });
        setError("password", {
          type: "manual",
          message: "Email atau password anda salah",
        });
      }

      if (statusCode == 500) {
        setError("email", {
          type: "manual",
          message: "Terjadi kesalahan pada server",
        });
      }
      if (statusCode == 404) {
        setError("email", {
          type: "manual",
          message: "Terjadi kesalahan pada server",
        });
      }

      return;
    }

    navigate("/auth/login");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-full w-full justify-between items-center"
    >
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-5xl font-bold">Sign Up</h1>
        <p className="">use your email to sign up</p>
      </div>
      <div className="flex flex-col w-full gap-10">
        <InputField
          label="Email"
          type="email"
          id="email"
          register={register}
          error={errors.email}
          name="email"
        />
        <InputField
          label="Password"
          id="password"
          type="password"
          name="password"
          register={register}
          error={errors.password}
        />
      </div>

      <div className="flex flex-col gap-4">
        <button
          type="submit"
          className=" text-white font-semibold rounded-xl w-56 px-5 py-3 bg-[#91A9FF]"
        >
          Sign In
        </button>
        <p>
          Don't have account?{" "}
          <span className="text-red-500 font-semibold">Sign Up</span>
        </p>
      </div>
    </form>
  );
};

export default RegisterPage;
