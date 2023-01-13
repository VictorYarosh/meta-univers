import { useState } from "react";
import classNames from "classnames";
import showIcon from "../../../../public/icons/password/show.svg";
import hideIcon from "../../../../public/icons/password/hide.svg";

export default function PasswordField({
  label = "",
  width = "w-[100%]",
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const className = classNames(
    "rounded-sm",
    "pl-2 pr-7 py-3",
    "bg-white bg-opacity-10",
    "text-base text-white text-opacity-70",
    "border border-white border-opacity-10",
    "focus:outline-none",
    width
  );
  return (
    <div className="flex flex-col space-y-1">
      <label className="ml-1 text-sm text-[#A1A0DF] font-normal">{label}</label>
      <div className="relative flex flex-row">
        <input
          className={className}
          type={showPassword ? "text" : "password"}
          {...props}
        />
        <button
          className="absolute top-4 right-2"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          <img
            style={{ width: "18px" }}
            src={showPassword ? hideIcon.src : showIcon.src}
          />
        </button>
      </div>
    </div>
  );
}
