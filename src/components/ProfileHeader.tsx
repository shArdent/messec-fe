import { User } from "../types";
import avatar from "@/assets/avatar.svg";
import pennib from "@/assets/pen-nib.svg";
import useIsUserLogin from "../hooks/useIsLogin";

const ProfileHeader = ({ userData }: { userData: User }) => {
  const { isUserLogin } = useIsUserLogin();
  return (
    <div className="flex flex-col md:flex-row gap-7 md:justify-between md:mr-48">
      <div className="flex gap-7 justify-center items-center">
        <img src={avatar} alt="Avatar" width={100} />
        <div className="flex flex-col gap-2 py-2 ">
          <div className="flex gap-3">
            <h1 className="text-xl font-semibold">
              {userData?.username ?? userData.email}
            </h1>
            {isUserLogin && (
              <button className="text-sm font-normal flex items-center text-gray-500 gap-1">
                <img src={pennib} alt="" width={15} className="opacity-80" />
                Edit Profil
              </button>
            )}
          </div>

          <p className="text-[#686D76] text-sm font-light">
            {userData.bio ?? "-"}
          </p>
          <p className="text-[#686D76] text-sm font-light">{userData.email}</p>
        </div>
      </div>
      <div className="flex justify-evenly w-full gap-3 md:justify-center md:w-auto md:gap-10">
        <div className="flex flex-col w-full px-7 py-5 rounded-lg gap-5 border justify-center items-center md:w-40">
          <h1 className="text-lg">Postingan</h1>
          <h1 className="text-5xl font-bold">{userData.post_count}</h1>
        </div>

        <div className="flex flex-col w-full px-7 py-5 rounded-lg gap-5 border justify-center items-center md:w-40">
          <h1 className="text-lg">Postingan</h1>
          <h1 className="text-5xl font-bold">{userData.post_count}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
