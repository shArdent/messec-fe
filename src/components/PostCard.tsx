import amplop from "@/assets/amplop.svg";
import CommentContainer from "./CommentContainer";

const PostCard = () => {
  return (
    <div className="flex flex-col gap-3 ">
      <div className="flex flex-col py-4 px-4 bg-[#E2F9FF] rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border-[0.5px] border-opacity-40 border-[#686d76] gap-4">
        <div className="flex justify-start items-center h-auto gap-4">
          <img src={amplop} alt="amplop" width={50} />
          <p className="font-semibold">30 Desember 2024</p>
        </div>{" "}
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iste
          repellendus, cupiditate perferendis eius libero odio tenetur esse
          reprehenderit error exercitationem ut magni obcaecati eum soluta ab
          sint aperiam fugit.
        </p>
      </div>
      <CommentContainer />
    </div>
  );
};

export default PostCard;
