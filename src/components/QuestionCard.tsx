import amplop from "@/assets/amplop.svg";
import { QuestionRes } from "../types";
import AnswerContainer from "./AnswerContainer";
import useIsUserLogin from "../hooks/UseIsLogin";

const QuestionCard = ({ data }: { data: QuestionRes }) => {
  const { isUserLogin } = useIsUserLogin();
  return (
    <div className="flex flex-col gap-3 ">
      <div className="flex flex-col py-4 px-4 bg-[#E2F9FF] rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border-[0.5px] border-opacity-40 border-[#686d76] gap-4">
        <div className="flex justify-start items-center h-auto gap-4">
          <img src={amplop} alt="amplop" width={50} />
          <p className="font-semibold">{data.CreatedAt.split(" ")[0]}</p>
        </div>
        <p className="text-sm md:text-base">{data.Body}</p>
      </div>
      {(data.Answer || isUserLogin) && (
        <AnswerContainer answer={data.Answer ?? null} questionId={data.Id} />
      )}
    </div>
  );
};

export default QuestionCard;
