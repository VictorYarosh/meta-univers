import classNames from "classnames";

export default function TextField({
  label = "",
  width = "w-[100%]",
  ...props
}) {
  const className = classNames(
    "rounded-sm",
    "px-2 py-3",
    "bg-white bg-opacity-10",
    "text-base text-white text-opacity-70",
    "border border-white border-opacity-10",
    "focus:outline-none",
    width
  );
  return (
    <div className="flex flex-col space-y-1">
      <label className="ml-1 text-sm text-[#A1A0DF] font-normal">{label}</label>
      <input className={className} type="text" {...props} />
    </div>
  );
}
