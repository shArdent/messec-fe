import { useParams } from "react-router";
import TextAreaPost from "@/components/TextAreaPost";
import PostCard from "@/components/PostCard";
import useIsUserLogin from "../hooks/UseIsLogin";

const PostPage = () => {
  const { username, isUserLogin } = useIsUserLogin();

  return (
    <div className="flex flex-col gap-7">
      {isUserLogin && <TextAreaPost label="Apa yang kamu pikirkan?" />}
      <PostCard />
    </div>
  );
};

export default PostPage;
