import { ReactNode } from "react";

const Modal = ({
  children,
  containerStyle,
  isOpen,
  closer,
}: {
  children: ReactNode;
  containerStyle: string;
  isOpen: boolean;
  closer: (e: boolean) => void;
}) => {
  console.log(isOpen);
  return (
    <div
      className={`h-screen w-screen absolute top-0 left-0 z-3 justify-center items-center ${isOpen ? "flex" : "hidden"}`}
    >
      <div className={"z-10 " + containerStyle}>{children}</div>
      <div
        className={"h-screen w-screen bg-black opacity-75 z-5 absolute"}
        onClick={() => closer(false)}
      ></div>
    </div>
  );
};

export default Modal;
