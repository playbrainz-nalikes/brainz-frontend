import React, { useEffect, useState } from "react";
import SessionTitleCard from "./SessionTitleCard";
import { DiamondIcon } from "./Svgs";
import { Counter } from "./Counter";
import { calculateTimeLeft, formatBalance } from "@/lib/utils";

export const CountDown = ({ session, timeRemaining }) => {
  return (
    <div className="flex flex-col w-full lg:flex-row md:flex-row sm:flex-col">
      <div className="w-full px-0 lg:w-2/3 lg:px-12 ">
        <div className="flex flex-col items-center justify-center h-full text-white">
          <div className="text-center">
            <p className="font-basement mb-[20px] text-base lg:text-lg font-normal uppercase">
              starting in
            </p>
            <div>
              <Counter timeRemaining={timeRemaining || null} isTickingEnabled={true} />
            </div>
            <div className="flex flex-col items-center justify-between mt-3 lg:mt-9">
              <p className="mb-3 text-lg font-normal lg:text-xl font-basement">
                Pot
              </p>
              <p className="text-2xl font-bold font-basement lg:text-3xl">
                {formatBalance(session.netPotValue || 0)} USDT
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* second grid */}
      <div className="flex flex-col items-center mt-6 text-white lg:mt-0">
        <div className="w-full">
          <h2 className="mb-5 text-xl font-bold text-white capitalize font-basement lg:text-2xl lg:mb-7">
            Rules
          </h2>
          <div className="flex flex-col w-full lg:flex-row gap-4">
            <div className="w-full mb-4 lg:w-1/2 lg:mb-0">
              <SessionTitleCard
                title="Speed Matters"
                speed=""
                description="Answer quickly. In case of 2 or more players reaching the highest score, the player with the quickest completion time wins."
                bgColor="bg-gradient-to-r from-[#283b49] to-[#0f2433]"
                noIcon
              />
            </div>
            <div className="flex-1">
              <SessionTitleCard
                title="Free Spin The Wheel"
                speed=""
                description="At the end of each session, every player will get a free spin of the wheel, offering a chance to win more prizes!"
                bgColor="bg-gradient-to-r from-[#283b49] to-[#0f2433]"
                noIcon
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-9">
          <p className="mb-5 text-xl font-semibold text-white lg:text-2xl font-basement lg:flex lg:items-end">
            You can only use 1 of these in a Session
          </p>
          <div className="flex flex-col w-full gap-4 lg:flex-row">
            <div className="flex-1 mb-4 lg:mb-0">
              <SessionTitleCard
                title="50/50"
                number="1"
                icon={DiamondIcon}
                description="Use a 50/50 to remove 2 wrong answers from the board."
                bgColor="bg-gradient-to-r from-[#06262c] to-[#05212a]"
              />
            </div>
            <div className="flex-1">
              <SessionTitleCard
                title="Auto correct"
                number="2"
                icon={DiamondIcon}
                description="The Auto-correct is your free pass to skip a question but still get the points"
                bgColor="bg-gradient-to-r from-[#06262c] to-[#05212a]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
