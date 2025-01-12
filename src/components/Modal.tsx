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
  return (
    <div
      className={`h-full w-full fixed top-0 left-0 z-10 justify-center items-center ${isOpen ? "flex" : "hidden"}`}
    >
      <div className={"z-10 " + containerStyle}>{children}</div>
      <div
        className={"h-full w-full bg-black opacity-75 z-5 absolute"}
        onClick={() => closer(false)}
      ></div>
    </div>
  );
};

export default Modal;
