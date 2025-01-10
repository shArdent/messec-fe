import avatar from "@/assets/avatar.svg";
import { useQuery } from "@tanstack/react-query";
import { NavLink, Outlet, useParams } from "react-router";
import { getUserData } from "../../utils/fetch";
import Loader from "../../components/Loader";
import ErrorPage from "../ErrorPage";

const ProfileLayout = () => {
  const { username } = useParams();
  const { data, isError, isPending } = useQuery({
    queryKey: ["user", username],
    queryFn: () => getUserData(username ?? ""),
    retry: 3,
    refetchOnWindowFocus: false,
    enabled: !!username,
    staleTime: 1000 * 60 * 5,
  });

  const userData = data?.data.data;

  if (isError || !userData) return <ErrorPage code={"404"} />;

  if (isPending) return <Loader />;

  return (
    <div className="w-full">
      <div className="h-20 flex justify-center items-center bg-[#91a9ff]">
        <h1 className="text-white font-bold text-2xl">Secreto (boongan)</h1>
      </div>
      <div className="w-full flex px-3 md:px-10 flex-col gap-8 py-7">
        <div className="flex gap-7">
          <img src={avatar} alt="Avatar" width={100} />
          <div className="flex flex-col gap-2 py-2">
            <h1 className="text-xl font-semibold">
              {userData?.Username ?? userData.Email}
            </h1>
            <p className="text-[#686D76] text-sm font-light">
              {userData.Bio ?? "-"}
            </p>
            <p className="text-[#686D76] text-sm font-light">
              {userData.Email}
            </p>
          </div>
        </div>

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
