import classNames from "classnames";

export default function FooterSection({ header = "", items = [] }) {
  return (
    <div className="flex flex-col space-y-5 text-white">
      <span>{header}</span>
      <div className="flex flex-col space-y-3 max-w-[200px] text-xs">
        {items.map((item, index) => (
          <span
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gradient-start hover:to-gradient-end"
            key={index}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
