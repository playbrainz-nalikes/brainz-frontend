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

export const Dashboard = () => {
  const [games, setGames] = useState([]);
  const [nextGame, setNextGame] = useState(null);
  const [currentTime] = useState(new Date());
  const [nextGameSelectedSession, setNextGameSelectedSession] = useState(0);
  // const [sessionStats, setSessionStats] = useState(null);
  const [session, setSession] = useState(null);
  // const router = useRouter();

  const getGames = useCallback(async () => {
    try {
      const fetchedGames = await apiCall("get", `/games`);
      // Filter out games that have already started
      const currentDateTime = new Date();
      const upcomingGames = fetchedGames.filter((game) => {
        if (game.sessions.length === 0) return false;
        // maybe we don't need this check?
        return new Date(game.sessions[0].endTime) > currentDateTime;
      });

      // Sort remaining games by startTime in ascending order
      upcomingGames.sort(
        (a, b) => new Date(a.startTime) - new Date(b.startTime)
      );
      if (upcomingGames.length > 0) {
        setNextGame(upcomingGames.shift());
        setGames(upcomingGames); // Set the remaining games
      }
    } catch (err) {
      console.error("Error fetching games:", err);
    }
  }, []);

  useEffect(() => {
    getGames();
  }, [getGames]);

  // re-fetch on session end
  useEffect(() => {
    if (!nextGame || nextGame.sessions.length === 0) return;
    const sessionEnd = nextGame.sessions[0].endTime;
    const endInterval = new Date(sessionEnd) - currentTime;

    const timeoutId = setTimeout(() => {
      getGames();
    }, endInterval);

    return () => clearTimeout(timeoutId);
  }, [currentTime, getGames, nextGame]);

  // useEffect(() => {
  //   const getSessionStats = async () => {
  //     try {
  //       const data = await apiCall(
  //         "get",
  //         `/session-stats/${nextGame.sessions[nextGameSelectedSession].id}`
  //       );
  //       console.log(data);
  //       setSessionStats(data);
  //     } catch (err) {
  //       console.error("Error fetching games:", err);
  //     }
  //   };

  //   if (nextGame) {
  //     getSessionStats();
  //   }
  // }, [nextGame]);

  const formatDuration = (startTime, endTime) => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const durationMs = end - start;

    // Convert milliseconds to hours, minutes, and seconds
    const hours = Math.floor(durationMs / 1000 / 60 / 60);
    const minutes = Math.floor((durationMs / 1000 / 60) % 60);
    const seconds = Math.floor((durationMs / 1000) % 60);

    // Build the duration string
    let durationStr = "";

    if (hours > 0) {
      durationStr += `${hours} hours `;
    }

    if (minutes > 0) {
      durationStr += `${minutes} mins `;
    }

    if (seconds > 0 || durationStr === "") {
      // show seconds if no hours/minutes
      durationStr += `${seconds} secs`;
    }

    return durationStr.trim();
  };

  const handleJoinSession = async (id) => {
    // const data = await apiCall("post", "/session-stats", { sessionID: id });
    // Check for response status and handle messages
    // if (data) {
    // toast.success(data.message || "Session joined successfully!");
    window.location.href = `${process.env.NEXT_PUBLIC_WEB_URL}/dashboard/session/${id}`;
    // }
  };

  useEffect(() => {
    // const getSession = async (id) => {
    //   const data = await apiCall("get", `/sessions/${id}`);
    //   setSession(data);
    // };
    if (nextGame && nextGame.sessions.length > 0) {
      const selectedSession = nextGame.sessions[nextGameSelectedSession];
      // make it easier to check when to disable join button
      selectedSession.startTime = new Date(selectedSession.startTime);
      setSession(selectedSession);
      // getSession(nextGame.sessions[nextGameSelectedSession].id);
    }
  }, [nextGame, nextGameSelectedSession]);

  return (
    <div className="text-white bg-primary">
      {nextGame && nextGame.sessions.length > 0 ? (
        <div className="bg-primary-350  pb-5 w-full rounded-[10px] mt-3 hidden md:block">
          <div className="flex flex-wrap items-center justify-between px-8 pt-4 gap-14">
            <h1 className="flex-1 text-xl font-bold font-basement ">
              Live Games
            </h1>
            <h1 className="flex-1 pl-1 text-2xl font-bold font-basement">
              Starting in
              <CountdownTimer time={nextGame.startTime} />
            </h1>
          </div>
          <div className="flex flex-col gap-16 mt-8 px-14 md:flex md:flex-row md:flex-wrap">
            <div className="flex-1 mb-6">
              <SessionCard
                game={nextGame}
                onSessionClick={(value) => setNextGameSelectedSession(value)}
              />
            </div>
            <div className="flex flex-col flex-1 mt-3 lg:mt-0">
              <p className="pl-1 text-lg font-normal font-basement">
                {nextGameSelectedSession + 1} of {nextGame.sessions.length}{" "}
                Session |{" "}
                {formatDuration(
                  nextGame.sessions[nextGameSelectedSession].startTime,
                  nextGame.sessions[nextGameSelectedSession].endTime
                  // getSessionEndTime(nextGame.sessions[nextGameSelectedSession])
                )}
              </p>
              <p className="text-xl font-normal font-basement pt-9">Pot Size</p>
              <h1 className="mt-4 mb-6 text-2xl font-bold font-basement">
                {formatBalance(session?.netPotValue || 0)} USDT
              </h1>
              <div>
                <Button
                  variant="outlined"
                  size="text-base"
                  disabled={!session || currentTime > session.startTime}
                  onClick={() =>
                    handleJoinSession(
                      nextGame.sessions[nextGameSelectedSession].id
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
                    {nextGame.sessions[nextGameSelectedSession].ticketsRequired}
                  </span>
                  Ticket Required to attend session
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pb-0 lg:pb-4 bg-primary-350 rounded-[10px]">
          <div className=" hidden md:block  w-full rounded-[10px] mt-4 mb-5">
            <h1 className="pt-4 pl-8 text-xl font-bold font-basement">
              Live Games
            </h1>
            <div className="flex flex-col items-center justify-center mt-20">
              <h1 className="text-xl font-bold font-basement">No live games</h1>
            </div>
          </div>
        </div>
      )}
      <div className="pb-0 lg:pb-4 bg-primary-350 rounded-[10px]">
        <div className=" hidden md:block  w-full rounded-[10px] mt-4 mb-5">
          <h1 className="pt-4 pl-8 text-xl font-bold font-basement">
            Upcoming Games
          </h1>
          {games.length > 0 ? (
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
      <div className="pt-3 md:hidden ">
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
              {nextGame && nextGame.sessions.length > 0 && (
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
                      onSessionClick={(value) =>
                        setNextGameSelectedSession(value)
                      }
                    />
                  </div>
                  <div className="flex flex-col flex-1 mt-8 lg:mt-0">
                    <p className="text-lg lg:text-xl pl-[5px] font-basement font-normal">
                      {nextGameSelectedSession + 1} of{" "}
                      {nextGame.sessions.length} Session |{" "}
                      {formatDuration(
                        nextGame.sessions[nextGameSelectedSession].startTime,
                        getSessionEndTime(
                          nextGame.sessions[nextGameSelectedSession]
                        )
                      )}
                    </p>
                    <p className="pt-5 text-lg font-normal lg:text-xl font-basement lg:pt-9">
                      Pot Size
                    </p>
                    <h1 className="text-xl lg:text-[26px] font-basement font-bold mt-3 lg:mt-4 mb-6">
                      {nextGame.sessions[nextGameSelectedSession].potValue} USDT
                    </h1>
                    <div>
                      <Button
                        variant="outlined"
                        size="text-base lg:text-xl"
                        onClick={() =>
                          handleJoinSession(
                            nextGame.sessions[nextGameSelectedSession].id
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
                        {nextGame.sessions[nextGameSelectedSession].tickets}{" "}
                        Tickets Required to attend session
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </Tab.Panel>
            <Tab.Panel>
              {games.length && (
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
              )}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};
