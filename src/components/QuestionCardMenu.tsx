import { Trash } from "@phosphor-icons/react";
import { useState } from "react";
import Modal from "./Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserQuestion } from "../utils/fetch";

const QuestionCardMenu = ({
  username,
  questionId,
}: {
  username: string;
  questionId: number;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteUserQuestion,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["question", username] });
      setIsOpen(false);
    },
    onError: () => {
      alert("gagal menghapus post ");
    },
  });
  return (
    <div className=" h-auto w-auto">
      <button
        className={"flex items-center justify-center"}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Trash size={24} />
      </button>
      <Modal
        isOpen={isOpen}
        closer={setIsOpen}
        containerStyle="bg-white p-8 rounded flex flex-col gap-8"
      >
        <h1>Anda yakin ingin menghapus pertanyaan ini?</h1>
        <div className="w-full flex justify-between items-center gap-3">
          <button
            className="w-full py-2 bg-[#91A9FF] text-white font-semibold rounded"
            onClick={() => mutation.mutate({ questionId })}
          >
            Ya
          </button>
          <button
            className="w-full py-2 text-[#91A9FF] font-semibold rounded"
            onClick={() => setIsOpen(false)}
          >
            Tidak
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default QuestionCardMenu;
