import { useEffect, useState } from "react";
import useIsUserLogin from "../hooks/UseIsLogin";
import ErrorPage from "./ErrorPage";
import Loader from "../components/Loader";
import { getUserQuestions } from "../utils/fetch";
import { useQuery } from "@tanstack/react-query";
import { QuestionRes } from "../types";
import QuestionCard from "../components/QuestionCard";
import TextAreaQuestion from "../components/TextAreaQuestion";

const QnaPage = () => {
  const { isUserLogin, username } = useIsUserLogin();
  const [questionsData, setQuestionsData] = useState<QuestionRes[] | null>(
    null,
  );
  const { data, isError, isPending } = useQuery({
    queryKey: ["question", username],
    queryFn: () => getUserQuestions({ userId: username ?? "" }),
  });

  useEffect(() => {
    setQuestionsData(data?.data.data);
  }, [data]);

  if (isPending) return <Loader />;

  if (isError) return <ErrorPage code={"500"} />;

  return (
    <div className="flex flex-col gap-7">
      {!isUserLogin && <TextAreaQuestion label="Apa yang ingin kamu ungkapkan?" />}
      {questionsData?.map((question: QuestionRes, i) => {
        return <QuestionCard data={question} key={i} />;
      })}
    </div>
  );
};

export default QnaPage;
