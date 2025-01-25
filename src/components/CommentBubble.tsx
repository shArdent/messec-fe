import avatar from "@/assets/avatar.svg";
import { CommentData } from "../types";

const CommentBubble = ({ comment }: { comment: CommentData }) => {
  return (
    <div className="flex items-start gap-4">
      <img src={avatar} alt="avatar" width={40} className="mt-1" />
      <div className="bg-gray-100 px-4 py-3 w-full rounded border-[0.5px] border-[#686D76] border-opacity-40">
        <h1 className="font-semibold mb-2">anonymous</h1>
        <p className="text-sm md:text-base">{comment.body}</p>
        <p className="text-xs md:text-sm text-right text-gray-500 mt-2">
          {comment.created_at.split("T")[0]}
        </p>
      </div>
    </div>
  );
};

export default CommentBubble;
