import { InfoIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import React from "react";

const classNames = {
  card: "pt-4 lg:pt-4 pb-4 lg:pb-10 pl-4 lg:pl-6 pr-4 pr-12 rounded-[10px] h-full w-full text-nowrap",
  defaultText:
    "font-basement font-bold text-lg lg:text-xl text-white	tracking-wider	",
  defaultDetails: "font-basement font-bold text-xl lg:text-3xl text-white 	",
  secondaryText:
    "font-basement font-bold text-lg lg:text-xl text-secondary tracking-wider",
  primaryText:
    "font-basement font-bold text-lg lg:text-xl text-secondary tracking-wider",
};

const styles = {
  defaultCard: "bg-gradient-to-r from-[#3a4d56]/90 to-[#152c3a] ",
  secondaryCard: "bg-[#38462b]",
  primaryCard: "bg-gradient-to-r from-[#3a4d56]/90 to-[#152c3a] ",
};

export const ResultCard = ({ title, variant, type, amount }) => {
  let cardClassName = classNames.card;
  let textClassName = classNames.defaultText;
  let detailsClassName = classNames.defaultDetails;

  if (variant === "secondary") {
    cardClassName += ` ${styles.secondaryCard}`;
    textClassName = classNames.secondaryText;
  } else if (variant === "primary") {
    cardClassName += ` ${styles.primaryCard}`;
    textClassName = classNames.primaryText;
  } else {
    cardClassName += ` ${styles.defaultCard}`;
  }

  return (
    <div className={cardClassName}>
      <div className="flex mb-4 items-center">
        <h1 className={`${textClassName}`}>{title}</h1>
        <Popover>
          <PopoverTrigger asChild>
            <button>
              <InfoIcon className=" w-5 h-5 text-white ml-4" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="text-white w-80">
            USDT rewards will be transferred to your connected wallet within next
            few hours.
          </PopoverContent>
        </Popover>
      </div>
      <h1 className={detailsClassName}>
        {type === "pot" ? `${amount} USDT` : `${amount} ${type}`}
      </h1>
    </div>
  );
};
