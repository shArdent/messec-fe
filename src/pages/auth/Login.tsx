import InputField from "@/components/InputField";

const LoginPage = () => {
  return (
    <div className="flex flex-col h-full w-full justify-between items-center">
      <div className="text-center flex flex-col ">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="text-base">use your username or email and password</p>
      </div>
      <div className="flex flex-col w-full gap-10">
      </div>

      <div className="flex flex-col gap-4">
        <button className="text-white font-semibold rounded-xl w-56 px-5 py-3 bg-[#91A9FF]">
          Sign In
        </button>
        <p>
          Don't have account?{" "}
          <span className="text-red-500 font-semibold">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
