import useIsUserLogin from "../hooks/UseIsLogin";
import { AnswerRes } from "../types";
import AnswerBubble from "./AnswerBubble";
import AnswerInput from "./AnswerInput";

const AnswerContainer = ({
  answer,
  questionId,
}: {
  answer: AnswerRes | null;
  questionId: number;
}) => {
  const { isUserLogin } = useIsUserLogin();

  return (
    <div className="w-full flex flex-col gap-5 py-3 px-3 rounded border-[0.5px] border-[#686D76] border-opacity-40">
      <h1 className="text-lg md:text-2xl font-semibold">Jawaban</h1>
      {answer && <AnswerBubble answer={answer} />}

      {isUserLogin && !answer && <AnswerInput questionId={questionId} />}
    </div>
  );
};

export default AnswerContainer;
