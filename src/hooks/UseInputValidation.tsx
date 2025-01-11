import { useState } from "react";

export const useInputValidation = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const validateInput = (value: string) => {
    setIsDisabled(value.trim() === "");
  };

  const resetInput = (
    ref: React.RefObject<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (ref.current) {
      ref.current.value = "";
      setIsDisabled(true);
    }
  };

  return { isDisabled, validateInput, resetInput };
};
