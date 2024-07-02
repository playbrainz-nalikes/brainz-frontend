import Link from "next/link";
import { Button } from "./Button";
import { Counter } from "./Counter";
import { PointsDetails } from "./PointsDetails";
import { ResultCard } from "./ResultCard";
import { ConfettiBackground } from "./ConfettiBackground ";
import WheelModal from "./WheelModal";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { apiCall, getLocalAccessToken } from "@/lib/utils";
import Image from "next/image";
import CountdownTimer from "./CountDownTimer";
import { toast } from "react-toastify";

const SPIN_DURATION = 2 * 1000;

export const SessionResult = ({ leaderboard, session, game, rewardEarned }) => {
  const [remainingWheelTime, setRemainingWheelTime] = useState(
    session.wheelDuration
  );
  const [totalSessionParticipants, setTotalSessionParticipants] = useState(0);
  const [isOpenWheelModal, setIsOpenWheelModal] = useState(false);
  const [wheelData, setWheelData] = useState([]);
  const [spinning, setSpinning] = useState(false);
  const [winningPrize, setWiningPrize] = useState({
    type: "",
    amount: "",
  });
  const [spinned, setSpinned] = useState(false);
  const wheelRef = useRef(null);
  const [nextSession, setNextSession] = useState(null);

  // if game has sessions get the next session
  useEffect(() => {
    if (game && game.sessions && game.sessions.length > 0) {
      const nextSessions = game.sessions.find(
        (session) => new Date(session.startTime) > new Date()
      );
      // get least time session
      if (nextSessions) {
        const nextSession = nextSessions.reduce((prev, current) =>
          prev.startTime < current.startTime ? prev : current
        );
        setNextSession(nextSession);
      }
    }
  }, [game]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingWheelTime((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(interval);
          !spinning && setIsOpenWheelModal(false);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const accessToken = getLocalAccessToken();
    const getWheelData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/wheels/session/${session.id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const diamondQuantity = res.data.wheel.diamondsQty;
        const ticketQuantity = res.data.wheel.ticketsQty;
        const cashPrizes = res.data.wheel.cashPrizes;
        // get average for each prize to set weight on wheel
        const totalPrizes = cashPrizes.length + 3;
        const diamondWeight = diamondQuantity / totalPrizes;
        const ticketWeight = ticketQuantity / totalPrizes;

        const data = [
          {
            label: "2 Diamonds",
            weight: diamondWeight,
          },
          {
            label: "1 Ticket",
            weight: ticketWeight,
          },
        ];
        cashPrizes.forEach((prize) => {
          data.push({
            label: `$${prize.amount}`,
            weight: prize.qty / totalPrizes,
          });
        });
        console.log({ wheelData: data });
        setWheelData(data);
      } catch (err) {
        console.error("Error fetching wheel data:", err);
      }
    };
    const getParticipants = async () => {
      try {
        const data = await apiCall(
          "get",
          `/session-stats/session/${session.id}`
        );
        if (data) {
          setTotalSessionParticipants(data.count);
        }
      } catch (err) {
        console.error("Error fetching total Participants:", err);
      }
    };
    getParticipants();
    getWheelData();
  }, []);

  const getWinningPrize = async () => {
    const data = apiCall("post", `/wheels/spin`, { sessionId: session.id });
    if (data) {
      setWiningPrize(data);
      return data;
    } else {
      toast.error("Error spinning the wheel");
    }
  };

  const handleSpin = async () => {
    if (spinning || spinned) {
      return toast.error("you can spin only one time");
    }
    setSpinning(true);
    const winningPrize = await getWinningPrize();
    let winningMessage = "";
    let winningItem = "noPrize";
    let winningIndex = 0;
    if (winningPrize.type === "noPrize") {
      winningMessage = "Better luck next time";
    } else if (winningPrize.type === "diamonds") {
      winningMessage = `You won ${winningPrize.amount} diamonds`;
      winningItem = "2 Diamonds";
      winningIndex = wheelData.findIndex((item) => item.label === "2 Diamonds");
    } else if (winningPrize.type === "tickets") {
      winningMessage = `You won ${winningPrize.amount} tickets`;
      winningItem = "1 Ticket";
      winningIndex = wheelData.findIndex((item) => item.label === "1 Ticket");
    } else {
      winningMessage = `You won $${winningPrize.amount}`;
      winningItem = `$${winningPrize.amount}`;
      winningIndex = wheelData.findIndex((item) => item.label === winningItem);
    }
    wheelRef.current.spinToItem(winningIndex, SPIN_DURATION, true, 2, 1);
    setTimeout(() => {
      setSpinning(false);
      setIsOpenWheelModal(false);
      setSpinned(true);
      setRemainingWheelTime(0);
      if (winningPrize.type === "noPrize") {
        toast.error(winningMessage);
      } else {
        toast.success(winningMessage);
      }
    }, SPIN_DURATION);
  };

  const handleJoinSession = async (id) => {
    const data = await apiCall("post", "/session-stats", { sessionID: id });
    // Check for response status and handle messages
    if (data) {
      toast.success(data.message);
      // TODO: Redirect to session page
      // router.push(`/dashboard/session/${id}`);
    }
  };

  return (
    <div className="content">
      <ConfettiBackground />
      <div className="flex flex-wrap gap-6 lg:gap-16 border-secondary">
        <div className="flex-1 text-center lg:text-start">
          <div
            className={
              "pt-4 lg:pt-4 pb-4 lg:pb-6 pl-4 lg:pl-6 pr-4 lg:pr-12 rounded-[10px] h-full w-full text-nowrap bg-gradient-to-r from-[#3a4d56]/90 to-[#152c3a]"
            }
          >
            <h1
              className={`font-basement font-bold text-lg lg:text-xl text-white	tracking-wider	 mb-4`}
            >
              You Ranked{" "}
              <span className="text-secondary uppercase">
                {leaderboard.currentUser.rank}
                {leaderboard.currentUser.rank === 1
                  ? "st"
                  : leaderboard.currentUser.rank === 2
                  ? "nd"
                  : leaderboard.currentUser.rank === 3
                  ? "rd"
                  : "th"}
              </span>
            </h1>
            <h1
              className={`font-basement font-bold text-lg lg:text-xl text-white	tracking-wider	 mb-4`}
            >
              Your Points{" "}
              <span className="text-secondary uppercase">
                {leaderboard.currentUser.totalPoints}
              </span>
            </h1>
            {/* <h1
              className={`font-basement font-bold text-lg lg:text-xl text-white	tracking-wider	 `}
            >
              Correct Answers{" "}
              <span className="text-secondary uppercase">
                {leaderboard.currentUser.totalPoints}
              </span>
              /{session.totalQuestions}
            </h1> */}
          </div>
        </div>
        <div className="flex-1 text-center lg:text-start">
          <ResultCard
            title="Reward"
            amount={rewardEarned.amount || undefined}
            type={rewardEarned.type || undefined}
            variant="secondary"
          />
        </div>
        <div className="flex-1 text-center lg:text-start">
          <div
            className={
              "pt-4 lg:pt-4 pb-4 lg:pb-6 pl-4 lg:pl-6 pr-4 lg:pr-12 rounded-[10px] h-full w-full text-nowrap bg-gradient-to-r from-[#3a4d56]/90 to-[#152c3a] relative overflow-hidden cursor-pointer hover:bg-secondary"
            }
            onClick={() => remainingWheelTime > 0 && setIsOpenWheelModal(true)}
          >
            <div className="z-10 relative">
              <h1
                className={`font-basement font-bold text-lg lg:text-xl text-white	tracking-wider	 mb-4`}
              >
                Spin the wheel{" "}
              </h1>
              <h1
                className={`font-basement font-bold text-xl lg:text-3xl text-white`}
              >
                {remainingWheelTime}s
              </h1>
            </div>
            <Image
              src={"/images/wheel.png"}
              alt="wheel"
              width={320}
              height={320}
              className="absolute -right-20 -bottom-28 "
            />
          </div>
        </div>
      </div>

      <div className="flex-col lg:flex-row flex flex-wrap gap-10 lg:gap-16 justify-center bg-gradient-to-r from-[#3a4d56]/80 to-[#152c3a]/90 rounded-[10px] mt-6 lg:mt-10 py-4 lg:py-11 px-4 lg:px-6">
        <div className="flex-1 items-center flex">
          <h1 className="w-full text-lg text-center lg:text-start  lg:text-3xl font-black text-white font-basement">
            Next Session Starting in
          </h1>
        </div>
        <div className="flex-1 items-center flex ">
          {nextSession ? (
            <CountdownTimer time={nextSession.startTime} />
          ) : (
            <h1 className="w-full text-lg text-center lg:text-start  lg:text-3xl font-black text-white font-basement">
              No upcoming sessions
            </h1>
          )}
        </div>
        <div className="flex-1 flex flex-wrap flex-row lg:flex-col items-center justify-center gap-4 lg:gap-8 ">
          <div className="flex gap-4 justify-center flex-row lg:flex-col items-center">
            {nextSession && (
              <div href={"/dashboard/session"} className="flex justify-center">
                <Button
                  variant={"outlined"}
                  size="text-sm lg:text-2xl"
                  className={"px-6 lg:px-9 w-full"}
                  onClick={() => handleJoinSession(nextSession.id)}
                >
                  Take a seat
                </Button>
              </div>
            )}
            <Link href={"/dashboard"} className="w-full">
              <Button
                variant={"outlinedWhite"}
                size="text-sm lg:text-2xl"
                className={"w-full px-12 lg:px-9"}
              >
                Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl lg:text-4xl font-black text-white font-basement">
          Participants ({totalSessionParticipants})
        </h2>
        <div className="mt-5 lg:mt-9 h-[370px] cursor-grab active:cursor-grabbing	 scrollbar scrollbar-w-[5.6px] scrollbar-h-[5.6px] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-thumb-[#104061]">
          <div className="flex flex-wrap justify-between gap-0 lg:gap-14">
            <div className="flex-1">
              {leaderboard.top10.slice(0, 5).map((user, index) => (
                <PointsDetails
                  key={index}
                  rank={user.rank}
                  userName={user.username.slice(0, 10)}
                  points={user.totalPoints}
                  // profileImage={rank.profileImage}
                  // reward={rank.reward}
                  myRank={leaderboard.currentUser.rank}
                  bgColorGrey
                  showWinnerIcon
                />
              ))}
            </div>
            <div className="flex-1">
              {leaderboard.top10.slice(5, 10).map((user, index) => (
                <PointsDetails
                  key={index}
                  rank={user.rank}
                  userName={user.username.slice(0, 10)}
                  points={user.totalPoints}
                  // profileImage={rank.profileImage}
                  // reward={rank.reward}
                  myRank={leaderboard.currentUser.rank}
                  bgColorGrey
                  showWinnerIcon
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {isOpenWheelModal && (
        <WheelModal
          showModal={isOpenWheelModal}
          setShowModal={setIsOpenWheelModal}
          wheelData={wheelData}
          wheelRef={wheelRef}
          onSpin={handleSpin}
          spinning={spinning}
        />
      )}
    </div>
  );
};
