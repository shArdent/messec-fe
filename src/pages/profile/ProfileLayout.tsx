import { useQuery } from "@tanstack/react-query";
import { Link, NavLink, Outlet, useParams } from "react-router";
import { getUserData } from "../../utils/fetch";
import Loader from "@/components/Loader";
import ErrorPage from "../ErrorPage";
import { useCurrentProfileStore } from "../../store";
import SelectSearch from "@/components/SelectSearch";
import { User } from "../../types";
import ProfileHeader from "../../components/ProfileHeader";

const ProfileLayout = () => {
  const updateProfileEmail = useCurrentProfileStore((state) => state.setEmail);
  const updateProfileUsername = useCurrentProfileStore(
    (state) => state.setUsername,
  );
  const { username } = useParams();
  const currentUser = sessionStorage.getItem("userId");
  const { data, isError, isPending } = useQuery({
    queryKey: ["user", username],
    queryFn: () => getUserData(username ?? ""),
    retry: 3,
    refetchOnWindowFocus: false,
    enabled: !!username,
    staleTime: 1000 * 60 * 5,
  });

  const options = [
    { name: "Swedish", value: "sv" },
    { name: "English", value: "en" },
  ];

  const userData: User = data?.data.user;

  if (userData) {
    updateProfileUsername(userData?.username ?? userData.email);
    updateProfileEmail(userData?.email);
  }
  if (isError || !userData) return <ErrorPage code={"404"} />;

  if (isPending) return <Loader />;

  return (
    <div className="w-full">
      <div className="h-20 w-full justify-between flex px-3 md:px-10 items-center bg-[#91a9ff]">
        <Link
          to={`/profile/${currentUser}/post`}
          className="text-white font-bold text-4xl"
        >
          MeSecret
        </Link>
        <SelectSearch
          options={options}
          search={true}
          placeholder="Choose your language"
        />
      </div>
      <div className="w-full flex px-3 md:px-10 flex-col gap-7 py-7">
        <ProfileHeader userData={userData} />

        <div className="flex w-full justify-between items-center bg-[#BCCCDC] px-3 py-3 gap-2 rounded-lg">
          <NavLink
            to={`/profile/${username}/post`}
            className={({ isActive }) =>
              `w-full font-semibold text-center py-2 rounded-lg ${isActive ? "text-white bg-[#91A9FF]" : "text-black bg-white hover:bg-[#E8E8E8]"}`
            }
            end
          >
            Postingan
          </NavLink>
          <NavLink
            to={`/profile/${username}/qna`}
            className={({ isActive }) =>
              `w-full font-semibold text-center py-2 rounded-lg ${isActive ? "text-white bg-[#91A9FF]" : "text-black bg-white hover:bg-[#E8E8E8]"}`
            }
            end
          >
            QnA
          </NavLink>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
