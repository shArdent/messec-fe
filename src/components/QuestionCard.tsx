import amplop from "@/assets/amplop.svg";
import { QuestionRes } from "../types";
import AnswerContainer from "./AnswerContainer";
import useIsUserLogin from "../hooks/UseIsLogin";
import QuestionCardMenu from "./QuestionCardMenu";

const QuestionCard = ({ data }: { data: QuestionRes }) => {
  const { username, isUserLogin } = useIsUserLogin();
  return (
    <div className="flex flex-col gap-3 ">
      <div className="flex flex-col py-4 px-4 bg-[#E2F9FF] rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border-[0.5px] border-opacity-40 border-[#686d76] gap-4">
        <div className="flex justify-between items-center h-auto">
          <div className="flex gap-4 justify-center items-center">
            <img src={amplop} alt="amplop" width={50} />
            <p className="font-semibold">{data.created_at.split("T")[0]}</p>
          </div>
          {isUserLogin && (
            <QuestionCardMenu
              questionId={data.id}
              username={username as string}
            />
          )}
        </div>
        <p className="text-sm md:text-base">{data.body}</p>
      </div>
      {(data.answer || isUserLogin) && (
        <AnswerContainer answer={data.answer ?? null} questionId={data.id} />
      )}
    </div>
  );
};

export default QuestionCard;
