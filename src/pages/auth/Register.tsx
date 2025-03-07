import { useForm } from "react-hook-form";
import { AuthFormData, UserSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/InputField";
import { handleRegister } from "../../utils/auth";
import { Link, useNavigate } from "react-router";

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
    await handleRegister(data, setError, navigate);
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
          Already have account?{" "}
          <Link to={"/auth/login"} className="text-red-500 font-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterPage;
