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
      {`${String(timeLeft.hours).padStart(2, "0")}:${String(
        timeLeft.minutes
      ).padStart(2, "0")}:${String(timeLeft.seconds).padStart(2, "0")}`}
    </span>
  );
};

export default CountdownTimer;
