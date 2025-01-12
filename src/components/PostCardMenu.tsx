import { DotsThreeOutlineVertical } from "@phosphor-icons/react";
import { useState } from "react";
import Modal from "./Modal";

const PostCardMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="bg-red-300 relative h-auto w-auto">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <DotsThreeOutlineVertical size={24} weight="fill" />
      </button>
    </div>
  );
};

export default PostCardMenu;
