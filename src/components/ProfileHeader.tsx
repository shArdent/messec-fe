import { User } from "../types";
import avatar from "@/assets/avatar.svg";
import useIsUserLogin from "../hooks/UseIsLogin";
import EditModal from "./EditModal";

const ProfileHeader = ({ userData }: { userData: User }) => {
  const { isUserLogin } = useIsUserLogin();
  return (
    <div className="flex flex-col md:flex-row gap-7 md:justify-between items-center ">
      <div className="flex gap-7 justify-between items-center">
        <img src={avatar} alt="Avatar" width={100} />
        <div className="flex flex-col gap-2 py-2 ">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold">
              {userData?.username ?? userData.email}
            </h1>
            {isUserLogin && <EditModal userData={userData} />}
          </div>

          <p className="text-[#686D76] text-sm font-light">
            {userData.bio ?? "-"}
          </p>
          <p className="text-[#686D76] text-sm font-light">{userData.email}</p>
        </div>
      </div>
      <div className="flex h-10 items-center justify-evenly w-full gap-7 md:justify-center md:w-auto">
        <div className="flex w-full px-3 py-2 rounded-lg gap-5 border justify-center items-center md:w-40 bg-[#91A9FF] text-white shadow-lg">
          <h1 className="text-lg font-bold">{userData.post_count}</h1>
          <h1 className="text-lg">Postingan</h1>
        </div>
        <div className="flex w-full px-3 py-2 rounded-lg gap-5 border justify-center items-center md:w-40 bg-[#91A9FF] text-white shadow-lg">
          <h1 className="text-lg font-bold">{userData.question_count}</h1>
          <h1 className="text-lg">Pertanyaan</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
