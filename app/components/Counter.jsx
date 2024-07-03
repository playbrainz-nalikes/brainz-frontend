import { convertSecondsToHMS } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";
import TickingSound from "@/public/sounds/countdown-sound.wav";

export const Counter = ({ timeRemaining, isTickingEnabled }) => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [color, setColor] = useState("bg-secondary");
  const [soundPlayed, setSoundPlayed] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    setTime(convertSecondsToHMS(timeRemaining || 0));
  }, [timeRemaining]);

  // Function to pad single digit numbers with leading zero
  const padZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  // when time is less than 10 seconds, change color to red amd play sound
  useEffect(() => {
    if (timeRemaining !== null) {
      if (timeRemaining <= 10) {
        setColor("bg-[red]");
      }
      if (timeRemaining <= 10 && !soundPlayed && isTickingEnabled) {
        setSoundPlayed(true);
        playSound();
      }
    }
    if (
      (timeRemaining === 0 || timeRemaining === null) &&
      isTickingEnabled &&
      soundPlayed
    ) {
      stopSound();
    }
  }, [timeRemaining]);

  // Function to play the sound
  const playSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(TickingSound);
    }
    audioRef.current.play().catch((error) => {
      // Play failed - handle error
      console.error("Failed to play sound:", error);
    });
  };

  // Function to stop the sound
  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div className="w-full">
      <div className="flex gap-3 items-center justify-center">
        <div
          className={`w-12 h-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-[10px] flex items-center justify-center ${color}`}
        >
          <h1 className="text-lg sm:text-xl md:2xl lg:text-3xl font-basement font-black text-dark">
            {padZero(time.hours)}
          </h1>
        </div>
        <p className="font-basement font-black text-5xl text-white">:</p>
        <div
          className={`w-12 h-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-[10px] flex items-center justify-center ${color}`}
        >
          <h1 className="text-lg sm:text-xl md:2xl lg:text-3xl font-basement font-black text-dark">
            {padZero(time.minutes)}
          </h1>
        </div>
        <p className="font-basement font-black text-5xl text-white">:</p>
        <div
          className={`w-12 h-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-[10px] flex items-center justify-center ${color}`}
        >
          <h1 className="text-lg sm:text-xl md:2xl lg:text-3xl  font-basement font-black text-dark">
            {padZero(time.seconds)}
          </h1>
        </div>
      </div>
    </div>
  );
};
