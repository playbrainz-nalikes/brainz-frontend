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
      <h1 className={`${textClassName} mb-4`}>{title}</h1>
      <h1 className={detailsClassName}>
        {type === "pot" ? `${amount} USDT` : `${amount} ${type}`}
      </h1>
    </div>
  );
};
