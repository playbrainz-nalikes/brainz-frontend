"use client";
import { Button } from "@/app/components/Button";
import CryptoCard from "@/app/components/CryptoCard";
import SessionCard from "@/app/components/SessionCard";
import { TicketIcon } from "@/app/components/Svgs";
import { cryptoCardData } from "./data";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import CountdownTimer from "@/app/components/CountDownTimer";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { NumericFormat } from "react-number-format";
import { useRouter } from "next/navigation";
import { apiCall, formatBalance, getSessionEndTime } from "@/lib/utils";
import { toast } from "react-toastify";
import { useCall } from "@usedapp/core";
import { useUser } from "@/app/contexts/UserContext";

export const Dashboard = () => {
  const [games, setGames] = useState([]);
  const [nextGame, setNextGame] = useState(null);
  const [wheelRewards, setWheelRewards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const currentTime = new Date();

  if (nextGame) {
    nextGame.sessions.forEach((session) => {
      if (currentTime > new Date(session.endTime)) {
        session.status = "completed";
      } else if (currentTime < new Date(session.startTime)) {
        session.status = "upcoming";
      } else {
        session.status = "live";
      }
    });
  }
  // find an upcoming session or last session
  const findFunc = (item, idx, self) =>
    item.status === "upcoming" || self.length - 1 === idx;
  const session = nextGame ? nextGame.sessions.find(findFunc) : null;
  const sessionIdx = nextGame ? nextGame.sessions.findIndex(findFunc) : 0;

  const getGames = useCallback(async () => {
    try {
      const fetchedGames = await apiCall("get", `/games`);

      const currentTime = new Date();
      const upcomingGames = fetchedGames.filter((game) => {
        if (game.sessions.length === 0) return false;
        return currentTime < new Date(game.endTime);
      });

      // Sort remaining games by startTime in ascending order
      // upcomingGames.sort(
      //   (a, b) => new Date(a.startTime) - new Date(b.startTime)
      // );
      upcomingGames.sort((a, b) => new Date(a.endTime) - new Date(b.endTime));

      if (upcomingGames.length > 0) {
        setNextGame(upcomingGames.shift());
        setGames(upcomingGames); // Set the remaining games
      } else {
        setNextGame(null);
        setGames([]);
      }
    } catch (err) {
      console.error("Error fetching games:", err);
    }
  }, []);

  useEffect(() => {
    getGames().finally(() => setIsLoading(false));
  }, [getGames]);

  const { user } = useUser();

  // re-fetch on session enj
  useEffect(() => {
    if (!session) return;
    const currentTime = new Date();
    const startInterval = new Date(session.startTime) - currentTime + 500;
    const endInterval = new Date(session.endTime) - currentTime + 500;

    // update on session start, causes re-render
    const startTimeId = setTimeout(() => {
      setNextGame((prev) => ({ ...prev }));
    }, startInterval);

    // update on session end to next session or next game
    const endTimeId = setTimeout(() => {
      getGames();
    }, endInterval);

    return () => {
      clearTimeout(startTimeId);
      clearTimeout(endTimeId);
    };
  }, [session, getGames]);

  useEffect(() => {
    async function getSessionWheel() {
      const data = await apiCall(
        "get",
        `/wheels/session/${session.id}`,
        null,
        null,
        true
      );
  
      if (data && data.cashPrizes) {
        console.log(data.cashPrizes);
        const total = data.cashPrizes.reduce(
          (total, { amount, qty }) => total + Number(amount) * qty,
          0
        );
        setWheelRewards(total);
      }
    }
  
    if (session) {
      getSessionWheel();
    }
  }, [session]);

  const handleJoinSession = async (id) => {
    if (!user) {
      toast.error("Please connect your wallet first.");
      return;
    }
    if (!session) return;
    if (user.tickets < session.ticketsRequired) {
      toast.error("You don't have enough tickets. Buy tickets in the shop.");
      return;
    }
    if (new Date() > new Date(session.startTime)) {
      toast.error("Can't join a live session!");
      return;
    }

    // window.location.href = `${process.env.NEXT_PUBLIC_WEB_URL}/dashboard/session/${id}`;
    router.push(`/session/${id}`);
  };

  return (
    <div className="text-white bg-primary">
      {nextGame && session ? (
        <div className="bg-primary-350  pb-5 w-full rounded-[10px] mt-3 hidden lg:block">
          <div className="flex flex-wrap items-center justify-between px-8 pt-4 gap-14">
            <h1 className="flex-1 text-xl font-bold font-basement ">
              Live Games
            </h1>
            <h1 className="flex-1 pl-1 text-2xl font-bold font-basement">
              Starting in
              <CountdownTimer time={session.startTime} />
            </h1>
          </div>
          <div className="flex flex-col gap-16 mt-8 px-14 md:flex md:flex-row md:flex-wrap">
            <div className="flex-1 mb-6">
              <SessionCard
                game={nextGame}
                activeIdx={sessionIdx}
                // onSessionClick={(value) => setNextGameSelectedSession(value)}
              />
            </div>
            <div className="flex flex-col flex-1 mt-3 lg:mt-0">
              <p className="pl-1 text-lg font-normal font-basement">
                {sessionIdx + 1} of {nextGame.sessions.length} Session
              </p>
              <div className="flex flex-col xl:flex-row">
                <div>
                  <p className="text-xl font-normal font-basement pt-9">
                    Winner Pot size
                  </p>
                  <h1 className="mt-4 mb-6 text-2xl font-bold font-basement">
                    {formatBalance(session?.netPotValue || 0)} USDT
                  </h1>
                </div>
                {!!wheelRewards && (
                  <div className="xl:ml-6 xl:pt-9">
                    <p className="text-xl font-normal font-basement">
                      Spin the wheel rewards
                    </p>
                    <h1 className="mt-4 mb-6 text-2xl font-bold font-basement">
                      {wheelRewards} USDT
                    </h1>
                  </div>
                )}
              </div>
              <div>
                <Button
                  variant="outlined"
                  size="text-base"
                  disabled={!session || session.status !== "upcoming"}
                  onClick={() =>
                    handleJoinSession(
                      session?.id
                      // nextGame.sessions[nextGameSelectedSession].id
                    )
                  }
                >
                  Take a Seat
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-6">
                <TicketIcon
                  height={18}
                  width={18}
                  className={"text-danger-100"}
                />
                <p className="flex gap-1 text-base font-normal">
                  <span>
                    {" "}
                    {/* {nextGame.sessions[nextGameSelectedSession].ticketsRequired} */}
                    {session?.ticketsRequired || 0}
                  </span>
                  Ticket(s) Required to attend session
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden lg:block pb-4 bg-primary-350 rounded-[10px]">
          <div className="w-full rounded-[10px] mt-4 mb-5">
            <h1 className="pt-4 pl-8 text-xl font-bold font-basement">
              Live Games
            </h1>
            <div className="flex flex-col items-center justify-center mt-20">
              {isLoading ? (
                <div className="z-50 border-4 rounded-full w-10 h-10 animate-spin border-secondary border-s-secondary/20 " />
              ) : (
                <h1 className="text-xl font-bold font-basement">
                  No live games
                </h1>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="hidden lg:block pb-4 bg-primary-350 rounded-[10px]">
        <div className="w-full rounded-[10px] mt-4 mb-5">
          <h1 className="pt-4 pl-8 text-xl font-bold font-basement">
            Upcoming Games
          </h1>
          {isLoading ? (
            <div className="min-h-32 flex items-center justify-center">
              <div className="z-50 border-4 rounded-full w-10 h-10 animate-spin border-secondary border-s-secondary/20 " />
            </div>
          ) : games.length > 0 ? (
            <div className="grid grid-cols-1 mt-8 px-14 md:grid-cols-1 gap-14 lg:grid-cols-2 xl:grid-cols-3">
              {games.map((game, index) => (
                <CryptoCard key={index} data={game} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center mt-20">
              <h1 className="text-xl font-bold font-basement">
                No upcoming games
              </h1>
            </div>
          )}
        </div>
      </div>
      {/* Mobile Screen Tabs */}
      <div className="pt-3 lg:hidden ">
        <Tab.Group>
          <Tab.List className="flex justify-center w-full px-5">
            <Tab className={"w-full focus:outline-none"}>
              {({ selected }) => (
                <h1
                  className={`pt-4 text-base font-basement font-bold focus:outline-none pb-2.5
                       ${
                         selected
                           ? "border-b-2 border-secondary focus:outline-none"
                           : "border-b-2 border-grey-500 text-grey-500 "
                       }`}
                >
                  Live Games
                </h1>
              )}
            </Tab>
            <Tab className={"w-full focus:outline-none"}>
              {({ selected }) => (
                <h1
                  className={`pt-4 text-base font-basement font-bold focus:outline-none  pb-2.5 w-full
                       ${
                         selected
                           ? "border-b-2 border-secondary focus:outline-none"
                           : "border-b-2 border-grey-500 text-grey-500"
                       }`}
                >
                  Upcoming Games
                </h1>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels className={"pb-0"}>
            <Tab.Panel>
              {nextGame && session ? (
                <div className="flex flex-col gap-4 pl-6 pr-12 mt-10 text-center">
                  <div className="text-center">
                    <h1 className="pl-0 text-xl font-bold md:pl-8 font-basement">
                      Starting in
                      <CountdownTimer time={nextGame.startTime} />
                    </h1>
                  </div>
                  <div className="flex-1">
                    <SessionCard
                      game={nextGame}
                      activeIdx={sessionIdx}
                      // onSessionClick={(value) =>
                      //   setNextGameSelectedSession(value)
                      // }
                    />
                  </div>
                  <div className="flex flex-col flex-1 mt-8 lg:mt-0">
                    <p className="text-lg lg:text-xl pl-[5px] font-basement font-normal">
                      {sessionIdx + 1} of {nextGame.sessions.length} Session
                      {/*  |{" "}{formatDuration(
                        session?.startTime,
                        session?.endTime
                      )} */}
                    </p>

                    <div className="flex flex-col">
                      <div>
                        <p className="pt-5 text-lg font-normal font-basement ">
                          Winner Pot size
                        </p>
                        <h1 className="text-xl font-basement font-bold mt-3 mb-6">
                          {session?.netPotValue} USDT
                        </h1>
                      </div>
                      {!!wheelRewards && (
                        <div c>
                          <p className="text-lg font-normal font-basement ">
                            Spin the wheel rewards
                          </p>
                          <h1 className="text-xl font-basement font-bold mt-3 mb-6">
                            {wheelRewards} USDT
                          </h1>
                        </div>
                      )}
                    </div>

                    <div>
                      <Button
                        variant="outlined"
                        size="text-base lg:text-xl"
                        onClick={() =>
                          handleJoinSession(
                            session?.id
                            // nextGame.sessions[nextGameSelectedSession].id
                          )
                        }
                      >
                        Take a Seat
                      </Button>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-6">
                      <TicketIcon
                        height={18}
                        width={18}
                        className={"text-danger-100"}
                      />
                      <p className="text-base font-normal">
                        <span>{session?.ticketsRequired || 0}</span>
                        Ticket(s) Required to attend session
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4 pl-6 pr-12 mt-10 text-center">
                  <div className="text-center">
                    <h1 className="pl-0 text-xl font-bold md:pl-8 font-basement">
                      No Live Games
                    </h1>
                  </div>
                </div>
              )}
            </Tab.Panel>
            <Tab.Panel>
              {games.length ? (
                <div className="mt-10 w-full rounded-[10px] mb-5 pl-6 pr-10">
                  {/* <h1 className="text-xl font-bold text-center font-basement">
                  Upcoming Games
                </h1> */}
                  <div className="flex flex-col mt-4 gap-9 lg:flex-row">
                    {games.map((game, index) => (
                      <CryptoCard key={index} data={game} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4 pl-6 pr-12 mt-10 text-center">
                  <div className="text-center">
                    <h1 className="pl-0 text-xl font-bold md:pl-8 font-basement">
                      No Upcoming Games
                    </h1>
                  </div>
                </div>
              )}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};
