import React from "react";

export const OptionSelect = ({
  alphabet = "A",
  description = "Lorem ipsum dolor sit amet, consectur.",
  variant = "default",
  answer = false,
  isActive = false,
  ...rest
}) => {
  let backgroundColor, borderColor;
  switch (variant) {
    case "success":
      backgroundColor = answer ? "bg-[#207E35]" : "bg-[#8D4343]";
      borderColor = answer ? "border-[#0D3616]" : "border-[#532C2C]";
      break;
    case "danger":
      backgroundColor = "bg-[#8D4343]";
      borderColor = answer ? "border-[#0D3616]" : "border-[#532C2C]";
      break;
    default:
      backgroundColor = isActive ? "bg-secondary" : "bg-primary-350";
      borderColor = "border-primary-375";
      break;
  }

  return (
    <div
      {...rest}
      className={`flex items-center gap-3 lg:gap-5 ${backgroundColor} ${borderColor} ${
        isActive ? "" : "hover:bg-[#0A3049]"
      }  hover:border-[#C2CBD1] w-full rounded-[20px] border border-1 py-2 px-4 lg:px-5`}
    >
      <div className="py-1.5 py-1.5 lg:py-2.5 px-3 lg:px-5 flex items-center justify-center bg-primary text-white rounded-[8px] border border-primary-375">
        <h1 className="text-sm font-normal lg:text-lg font-basement">
          {alphabet}
        </h1>
      </div>
      <p className="text-sm font-normal text-white md:text-lg font-basement">
        {description}
      </p>
    </div>
  );
};
