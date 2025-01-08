import plane from "@/assets/bluePlane.svg";

const TextAreaPost = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-lg">{label}</h1>
        <button className="bg-[#91A9FF] hover:bg-[#8196E4] active:bg-[#687ECE] flex px-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-2 justify-center items-center rounded-lg text-white font-semibold gap-2 text-lg">
          <img src={plane} alt="" width={30} />
          Send
        </button>
      </div>
      <textarea className="w-full h-28 p-3 rounded-lg border-dashed border-2 border-[#686d76] focus:outline-none" />
    </div>
  );
};

export default TextAreaPost;
