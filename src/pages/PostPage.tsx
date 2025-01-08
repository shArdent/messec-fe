import TextAreaPost from "@/components/TextAreaPost";
import PostCard from "@/components/PostCard";
import useIsUserLogin from "../hooks/UseIsLogin";
import { useQuery } from "@tanstack/react-query";
import { getUserPost } from "../utils/fetch";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { PostData } from "../types";

const PostPage = () => {
  const { isUserLogin, username } = useIsUserLogin();
  const [postsData, setPostsData] = useState<PostData[] | null>(null);
  const { data, isError, isPending, error } = useQuery({
    queryKey: ["post"],
    queryFn: () => getUserPost(username ?? ""),
  });

  useEffect(() => {
    setPostsData(data?.data.data);
  }, [data]);

  if (isPending) return <Loader />;

  return (
    <div className="flex flex-col gap-7">
      {isUserLogin && <TextAreaPost label="Apa yang kamu pikirkan?" />}
      {postsData?.map((post: PostData, i) => {
        return <PostCard data={post} key={i}/>;
      })}
    </div>
  );
};

export default PostPage;
