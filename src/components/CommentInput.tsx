import outlinePlane from "@/assets/outlinePlane.svg";

const CommentInput = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Berikan komentar"
        className="w-full py-3 px-4 focus:outline-none rounded border-[0.5px] border-[#686D76] border-opacity-40"
      />
      <button className="flex h-auto justify-center items-center absolute z-50 top-[50%] translate-y-[-50%] right-2 hover:bg-gray-100 active:bg-gray-200 px-2 py-1 rounded-lg">
        <img src={outlinePlane} alt="send button" width={35} />
      </button>
    </div>
  );
};

export default CommentInput;
