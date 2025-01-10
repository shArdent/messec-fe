import { Flag } from "@phosphor-icons/react";

const ErrorPage = ({ code }: { code: string }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-8">
      <Flag size={55} weight="fill" />
      <h1
        color="blue-gray"
        className="mt-10 !text-3xl !leading-snug md:!text-4xl"
      >
        Error {code} <br /> It looks like something went wrong.
      </h1>
      <p className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
        Don&apos;t worry, our team is already on it.Please try refreshing the
        page or come back later.
      </p>
    </div>
  );
};

export default ErrorPage;
