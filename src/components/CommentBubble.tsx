import avatar from "@/assets/avatar.svg";

const CommentBubble = () => {
  return (
    <div className="flex items-start gap-4">
      <img src={avatar} alt="avatar" width={40} className="mt-1"/>
      <div className="bg-gray-100 px-4 py-3 rounded border-[0.5px] border-[#686D76] border-opacity-40">
        <h1 className="font-semibold mb-2">Anonymous</h1>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
          aliquam exercitationem! Corrupti id, aperiam accusantium dolorum
          tempora voluptas recusandae libero, facilis enim consequuntur
          reiciendis laudantium, quos dolore a in. Tenetur.
        </p>
        <p className="text-xs md:text-sm text-right text-gray-500 mt-2">
          30 Desember 2025
        </p>
      </div>
    </div>
  );
};

export default CommentBubble;
