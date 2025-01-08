import { CommentData } from "../types";
import CommentBubble from "./CommentBubble";
import CommentInput from "./CommentInput";

const CommentContainer = ({ comments }: { comments: CommentData[] }) => {
  return (
    <div className="w-full flex flex-col gap-5 py-3 px-3 rounded border-[0.5px] border-[#686D76] border-opacity-40">
      <h1 className="text-lg md:text-2xl font-semibold">Komentar</h1>
      {comments.map((comment: CommentData, i) => {
        return <CommentBubble comment={comment} key={i} />;
      })}

      <CommentInput />
    </div>
  );
};

export default CommentContainer;
