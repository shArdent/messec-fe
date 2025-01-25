import avatar from "@/assets/avatar.svg";
import { AnswerRes } from "../types";
import { useCurrentProfileStore } from "../store";
import useIsUserLogin from "../hooks/UseIsLogin";
import AnswerDeleteMenu from "./AnswerDeleteMenu";

const AnswerBubble = ({ answer }: { answer: AnswerRes }) => {
  const email = useCurrentProfileStore((state) => state.username);
  const { username, isUserLogin } = useIsUserLogin();
  return (
    <div className="flex items-start gap-4">
      <img src={avatar} alt="avatar" width={40} className="mt-1" />
      <div className="bg-gray-100 px-4 py-3 w-full rounded border-[0.5px] border-[#686D76] border-opacity-40">
        <div className="w-full flex justify-between items-center">
          <h1 className="font-semibold mb-2">{email}</h1>
          {isUserLogin && <AnswerDeleteMenu answerId={answer.id} username={username as string} />}
        </div>
        <p className="text-sm md:text-base">{answer.body}</p>
        <p className="text-xs md:text-sm text-right text-gray-500 mt-2">
          {answer.created_at.split(" ")[0]}
        </p>
      </div>
    </div>
  );
};

export default AnswerBubble;
