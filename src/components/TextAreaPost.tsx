import plane from "@/assets/bluePlane.svg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postUserPost } from "../utils/fetch";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";

const TextAreaPost = ({ label }: { label: string }) => {
  const { username } = useParams();
  const [userInput, setUserInput] = useState<string>("");
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: postUserPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post", username] });
      if (textRef.current) textRef.current.value = "";

      setUserInput("");
    },
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-lg">{label}</h1>
        <button
          className="bg-[#91A9FF] hover:bg-[#8196E4] active:bg-[#687ECE] flex px-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-2 justify-center items-center rounded-lg text-white font-semibold gap-2 text-lg"
          onClick={() => mutation.mutate(userInput.trim())}
        >
          <img src={plane} alt="" width={30} />
          Send
        </button>
      </div>
      <textarea
        className="w-full h-28 p-3 rounded-lg border-dashed border-2 border-[#686d76] focus:outline-none"
        onChange={(e) => setUserInput(e.target.value)}
        ref={textRef}
      />
    </div>
  );
};

export default TextAreaPost;
