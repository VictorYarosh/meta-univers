import classNames from "classnames";

export default function GradientText({ font = "orbitron", children }) {
  const className = classNames(
    "text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end",
    "font-bold",
    "sm:text-md md:text-2xl lg:text-4xl",
    {
      "font-orbitron": font == "orbitron",
    }
  );
  return <span className={className}>{children}</span>;
}
