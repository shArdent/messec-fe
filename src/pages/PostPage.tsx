import { useParams } from "react-router";
import TextAreaPost from "@/components/TextAreaPost";
import PostCard from "@/components/PostCard";

const PostPage = () => {
  const { username } = useParams();
  return (
    <div className="flex flex-col gap-7">
      <TextAreaPost label="Apa yang kamu pikirkan?" />
      <PostCard />
    </div>
  );
};

export default PostPage;
