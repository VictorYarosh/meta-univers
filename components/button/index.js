import classNames from "classnames";

export default function Button({
  opacity = false,
  width = "172px",
  children,
  ...props
}) {
  const className = classNames(
    "flex items-center justify-center rounded-sm h-12",
    "min-w-[172px]",
    "sm:h-[38px] sm:text-sm",
    "md:h-[42px] md:text-md",
    "xl:h-[52px]",
    {
      "bg-white bg-opacity-5 rounded-sm text-white font-poppins font-semibold border border-white border-opacity-50":
        opacity,
      "bg-gradient-to-b from-secondary-default to-secondary-light text-white font-semibold":
        !opacity,
    }
  );

  const style = {
    width: width,
  };

  return (
    <button className={className} style={style} {...props}>
      {children}
    </button>
  );
}
