import React from "react";
import cls from "classnames";
import { CheckIcon } from "./Svgs";

export const CustomCheckbox = ({
  variant = "success",
  className,
  checked,
  setChecked,
  color = "default",
  id,
}) => {
  const handleCheckboxChange = (e) => {
    setChecked(!checked);
  };

  const inputClass = cls(
    "relative peer shrink-0 items-center flex w-[24px] h-[22px] cursor-pointer rounded-[4px] appearance-none bg-white focus:outline-none focus:ring-offset-0 focus:ring-[none] disabled:border-steel-400 disabled:bg-steel-400",
    {
      "border-grey-100 checked:bg-secondary checked:border-secondary":
        color === "default",
    }
  );

  return (
    <div className={cls`flex gap-2 items-center justify-center ${className}`}>
      <input
      id={id}
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className={inputClass}
      />
      <CheckIcon
        colorClass={color === "default" ? "dark !mt-[2px]" : variant}
      />
    </div>
  );
};
