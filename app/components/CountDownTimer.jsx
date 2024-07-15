import { useEffect, useState, useCallback } from "react";
import { calculateTimeLeft } from "@/lib/utils";

const CountdownTimer = ({ time }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(time));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(time));
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <span className={"px-2 text-lg lg:text-3xl font-black text-white font-basement"}>
      {timeLeft.days > 0
        ? `${String(timeLeft.days).padStart(2, "0")}d : ${String(timeLeft.hours).padStart(2, "0")}h : ${String(timeLeft.minutes).padStart(2, "0")}m`
        : `${String(timeLeft.hours).padStart(2, "0")}h : ${String(timeLeft.minutes).padStart(2, "0")}m : ${String(timeLeft.seconds).padStart(2, "0")}s`}
    </span>
  );
};

export default CountdownTimer;
