import plane from "@/assets/bluePlane.svg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postUserPost } from "../utils/fetch";
import { useRef } from "react";
import { useParams } from "react-router";
import { useInputValidation } from "../hooks/UseInputValidation";

const TextAreaPost = ({ label }: { label: string }) => {
  const { username } = useParams();
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const queryClient = useQueryClient();
  const { isDisabled, resetInput, validateInput } = useInputValidation();

  const mutation = useMutation({
    mutationFn: postUserPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", username] });
      resetInput(textRef);
    },
    onError: () => {
      alert("Gagal mengirim postingan. Coba lagi nanti.");
    },
  });

  const handleSendPost = () => {
    if (textRef.current && textRef.current.value.trim()) {
      mutation.mutate(textRef.current.value.trim());
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-lg">{label}</h1>
        <button
          className="bg-[#91A9FF] hover:bg-[#8196E4] disabled:opacity-50 active:bg-[#687ECE] flex px-5 py-2 rounded-lg text-white font-semibold gap-2 text-lg shadow-md"
          onClick={handleSendPost}
          disabled={isDisabled}
        >
          <img src={plane} alt="Send" width={30} />
          Send
        </button>
      </div>
      <textarea
        className="w-full h-28 p-3 rounded-lg border-dashed border-2 border-gray-400 focus:outline-none"
        ref={textRef}
        placeholder="Tulis sesuatu..."
        onChange={(e) => validateInput(e.target.value)}
      />
    </div>
  );
};

export default TextAreaPost;
