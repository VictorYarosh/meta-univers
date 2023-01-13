import classNames from "classnames";

export default function FormContainer({ children }) {
  const className = classNames(
    "flex items-center justify-center",
    "bg-gradient-to-b from-[#E498FF0D] to-[#00F0FF0D] backdrop-blur-[30px]",
    "rounded-sm border-2 border-opacity-5 border-white"
  );
  return <div className={className}>{children}</div>;
}
