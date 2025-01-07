import InputField from "../../components/InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthFormData, UserSchema } from "../../types";
import { handleLogin } from "../../utils/auth";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<AuthFormData>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = async (data: AuthFormData) => {
    await handleLogin(data, navigate);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-full w-full justify-between items-center"
    >
      <div className="text-center flex flex-col ">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="text-base">use your username or email and password</p>
      </div>
      <div className="flex flex-col w-full gap-10">
        <InputField
          id="email"
          type="text"
          name={"email"}
          label="Email"
          register={register}
          error={errors.email}
        />
        <InputField
          id="password"
          type="password"
          name={"password"}
          register={register}
          label="Password"
          error={errors.password}
        />
      </div>

      <div className="flex flex-col gap-4">
        <button
          type="submit"
          className="text-white font-semibold rounded-xl w-56 px-5 py-3 bg-[#91A9FF]"
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

export default LoginPage;
