import outlinePlane from "@/assets/outlinePlane.svg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { useParams } from "react-router";
import { useInputValidation } from "../hooks/UseInputValidation";
import { postAnswer } from "../utils/fetch";

const AnswerInput = ({ questionId }: { questionId: number }) => {
  const { username } = useParams();
  const textRef = useRef<HTMLInputElement | null>(null);
  const queryClient = useQueryClient();
  const { isDisabled, validateInput, resetInput } = useInputValidation();

  const mutation = useMutation({
    mutationFn: postAnswer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["question", username] });
      resetInput(textRef);
    },
    onError: () => {
      alert("Gagal menambahkan komentar. Coba lagi nanti.");
    },
  });

  const handleSendAnswer = () => {
    if (textRef.current && textRef.current.value.trim()) {
      mutation.mutate({ body: textRef.current.value.trim(), questionId });
    }
  };

  return (
    <div className="relative">
      <input
        ref={textRef}
        type="text"
        onChange={(e) => validateInput(e.target.value)}
        placeholder="Berikan jawaban mu"
        className="w-full py-3 px-4 focus:outline-none rounded border border-gray-400/40"
      />
      <button
        onClick={handleSendAnswer}
        disabled={isDisabled}
        className="absolute disabled:opacity-50 top-1/2 right-2 -translate-y-1/2 flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 px-2 py-1 rounded-lg"
      >
        <img src={outlinePlane} alt="send button" width={35} />
      </button>
    </div>
  );
};

export default AnswerInput;
