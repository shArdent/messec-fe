import { Outlet } from "react-router";
import amplop from "@/assets/amplop.svg";

const AuthLayout = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-col h-full px-40 py-20 w-full justify-center items-center">
        <Outlet />
      </div>
      <div className="bg-[#91A9FF] flex px-20 py-20 h-full w-full flex-col justify-between items-center rounded-l-[100px]">
        <h1 className="text-3xl font-semibold text-white">Secret Message</h1>
        <img src={amplop} alt="amplop" />
        <p className="text-center text-base text-white">
          "Send and receive honest, anonymous messages from friends, coworkers,
          and others. Perfect for feedback, confessions, or simply staying
          connected—without revealing identities!"
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
