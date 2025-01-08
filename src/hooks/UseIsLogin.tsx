import { useEffect, useState } from "react";
import { useParams } from "react-router";

const useIsUserLogin = () => {
  const [isUserLogin, setIsUserLogin] = useState<boolean>(false);
  const { username } = useParams();
  useEffect(() => {
    const userId = sessionStorage.getItem("userId");

    setIsUserLogin(userId == username);
  }, [username]);

  return { isUserLogin, username };
};

export default useIsUserLogin;
