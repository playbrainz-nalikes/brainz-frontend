import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import { OptionSelect } from "./OptionSelect";
import { LongArrowRightIcon } from "./Svgs";
import { SessionButton } from "./SessionButton";
import { ProgressBar } from "./Progressbar";
import { MobilePointsCard } from "./MobilePointsCard";
import { ParticipationsRankTable } from "./ParticipationsRankTable";
import { GameCarousel } from "./GameCarousel";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { apiCall } from "@/lib/utils";
import clickSound from "@/public/sounds/anwer-select-sound.wav";
import a from "@/public/sounds/new-question-alert-sound.mp3";
import w from "@/public/sounds/wrong.mp3";
import r from "@/public/sounds/right.mp3";
import tickSound from "@/public/sounds/ticking.mp3";
import { useUser } from "../contexts/UserContext";

const alphabets = ["A", "B", "C", "D"];

export const SelectAnswer = ({
  setSelectedOption,
  question = {},
  step = 0,
  questionTimeRemaining,
  restTimeRemaining,
  progress,
  leaderboard,
  handleUsePower,
  title,
  powerUsed,
  session,
  stage,
}) => {
  const [audio] = useState(new Audio(clickSound));
  const [wrong] = useState(new Audio(w));
  const [right] = useState(new Audio(r));
  const [tickSoundeffect] = useState(new Audio(tickSound));
  const [alert] = useState(new Audio(a));

  const [wrongSoundPlayed, setWrongSoundPlayed] = useState(false);
  const [tickingAudioPlaying, setTickingAudioPlaying] = useState(false);
  const [alertSound, setAlertSound] = useState(false);

  const [totalSessionParticipants, setTotalSessionParticipants] = useState(0);

  const [table, setTable] = useState();
  useEffect(() => {
    const getParticipants = async () => {
      try {
        const data = await apiCall(
          "get",
          `/session-stats/session/${session.id}`,
        );
        if (data) {
          setTotalSessionParticipants(data.count);
        }
      } catch (err) {
        console.error("Error fetching Participants:", err);
      }
    };
    getParticipants();
  }, [leaderboard]);

  const moveUser = (currentIndex, targetIndex, data) => {
    if (currentIndex >= targetIndex && currentIndex >= 0 && targetIndex >= 0) {
      const user = data[currentIndex];
      const updatedTable = [
        ...data.slice(0, currentIndex),
        ...data.slice(currentIndex + 1),
      ];
      const newTable = [
        ...updatedTable.slice(0, currentIndex - 1),
        user,
        ...updatedTable.slice(currentIndex - 1),
      ];

      setTable(newTable);

      if (currentIndex > targetIndex) {
        setTimeout(() => {
          moveUser(currentIndex - 1, targetIndex, newTable);
        }, 100);
      }
    }
  };

  const getOptionVariant = (answer, wrong) => {
    if (questionTimeRemaining > 0) return "default";
    return answer ? "success" : wrong ? "danger" : "default";
  };

  const onAnswerSelect = (answer) => {
    if (questionTimeRemaining > 0 && !question.answer) {
      setSelectedOption(answer);
      audio.play();
    }
  };

  useEffect(() => {
    if (
      questionTimeRemaining === 0 &&
      question.answer &&
      stage === "selectAnswer"
    ) {
      if (question.answer === question.correctAnswer) {
        right.play();
      } else {
        wrong.play();
      }
    }
  }, [questionTimeRemaining]);
  useEffect(() => {
    if (
      (questionTimeRemaining > 0 &&
        questionTimeRemaining <= 5 &&
        !tickingAudioPlaying) ||
      (restTimeRemaining > 0 && restTimeRemaining <= 5 && !tickingAudioPlaying)
    ) {
      tickSoundeffect.currentTime = 0;
      tickSoundeffect.play();
      setTickingAudioPlaying(true);
    }

    if (
      questionTimeRemaining === 0 &&
      restTimeRemaining === 0 &&
      tickingAudioPlaying
    ) {
      tickSoundeffect.pause();
      tickSoundeffect.currentTime = 0;
      setTickingAudioPlaying(false);
    }
  }, [questionTimeRemaining, restTimeRemaining]);

  useEffect(() => {
    if (restTimeRemaining === 0 && !alertSound) {
      alert.play();
      setAlertSound(true);
    } else {
      setAlertSound(false);
    }
  }, [restTimeRemaining]);

  const { user: currentUser } = useUser();

  return (
    <div className="pb-4">
      <div className="block mb-8 md:hidden bg-primary-350">
        <div className="px-5 pt-7 pb-3.5">
          <div className="flex items-center justify-between w-full gap-4 mb-5 text-4xl rounded-lg ">
            <h1 className="text-xl font-bold text-white font-basement max-w-36">
              {title}
            </h1>
            <h1 className="text-2xl font-bold text-white font-basement">
              {questionTimeRemaining === 0
                ? restTimeRemaining
                : questionTimeRemaining}{" "}
              s
            </h1>
          </div>
          {leaderboard?.top10.length > 0 && (
            <GameCarousel autoplay={false}>
              {leaderboard.top10.map((item, index) => (
                <MobilePointsCard data={item} key={index} />
              ))}
            </GameCarousel>
          )}
        </div>
        <div className="relative pr-1.5 -bottom-1">
          <ProgressBar progress={progress} rounded step={step} />
        </div>
      </div>
      <div className="flex flex-col gap-16 pl-4 pr-4 lg:flex-row md:pl-14 md:pr-9 bg-primary">
        <div className="w-full lg:w-3/4 ">
          <div className="flex items-center gap-4 md:gap-5">
            {powerUsed.fiftyFifty ||
            powerUsed.autoCorrect ||
            question.answer ? (
              <div className=" w-[200px] lg:w-[234px]">
                <SessionButton
                  title="50/50"
                  count={1}
                  svgFill="#1b5d3b"
                  mainStyles="bg-gradient-to-r from-[#2e414e]/20 to-[#132836]/10"
                  badgeBg="bg-success/5"
                  titleStyles="text-base md:text-xl text-white/20"
                  countSize="text-base text-white/10 "
                />
              </div>
            ) : (
              <div
                className=" w-[200px] lg:w-[234px]"
                onClick={() => handleUsePower("fifty-fifty")}
              >
                <SessionButton
                  title="50/50"
                  count={1}
                  mainStyles="bg-gradient-to-r from-[#2e414e] to-[#132836]"
                  badgeBg="bg-success/20"
                  titleStyles="text-base md:text-xl"
                  countSize="text-base"
                  hover
                />
              </div>
            )}
            {powerUsed.fiftyFifty ||
            powerUsed.autoCorrect ||
            question.answer ? (
              <div className="w-[200px] lg:w-[234px]">
                <SessionButton
                  title="Auto-correct"
                  count={2}
                  svgFill="#1b5d3b"
                  mainStyles="bg-gradient-to-r from-[#2e414e]/20 to-[#132836]/10"
                  badgeBg="bg-success/5"
                  titleStyles="text-base md:text-xl text-white/20"
                  countSize="text-base text-white/10 "
                />
              </div>
            ) : (
              <div
                className="w-[200px] lg:w-[234px]"
                onClick={() => handleUsePower("auto-correct")}
              >
                <SessionButton
                  title="Auto-correct"
                  count={2}
                  mainStyles="bg-gradient-to-r from-[#2e414e] to-[#132836]"
                  badgeBg="bg-success/20"
                  titleStyles="text-base md:text-xl"
                  countSize="text-base"
                  hover
                />
              </div>
            )}
          </div>
          <div className="flex gap-4 text-white mt-7 md:mt-12 max-w-[830px] text-start">
            <div className="flex items-center hidden gap-4 md:flex ">
              <h1 className="text-lg font-bold lg:text-xl font-basement text-secondary">
                {step}
              </h1>
              <div className="hidden md:block">
                <LongArrowRightIcon height="24" width="24" />
              </div>
            </div>
            <p className="pl-2 text-lg font-semibold md:text-xl lg:text-2xl font-inter md:pl-0">
              {question.question}
            </p>
          </div>
          <div className="pb-5 md:pb-0 flex flex-col mt-6 lg:mt-11 gap-4 max-w-[784px]">
            {restTimeRemaining < 2 &&
            restTimeRemaining >= 0 &&
            !question.answer &&
            questionTimeRemaining === 0 ? (
              <>
                <div className="hidden md:block">
                  <Skeleton
                    count={4}
                    height={64}
                    borderRadius={"1rem"}
                    style={{ marginBottom: "1rem" }}
                  />
                </div>
                <div className="md:hidden">
                  <Skeleton
                    count={4}
                    height={48}
                    borderRadius={"1rem"}
                    style={{ marginBottom: "1rem" }}
                  />
                </div>
              </>
            ) : (
              question.answers.map(({ text, index }, idx) => {
                return (
                  <OptionSelect
                    key={index}
                    alphabet={alphabets[idx]}
                    description={text}
                    isActive={question.answer === index + 1}
                    variant={getOptionVariant(
                      question.correctAnswer === index + 1,
                      question.answer === index + 1 &&
                        question.answer !== question.correctAnswer,
                    )}
                    answer={questionTimeRemaining === 0 && true}
                    onClick={() => onAnswerSelect(index + 1)}
                  />
                );
              })
            )}
          </div>
          {/* <div className="hidden md:flex flex items-center justify-center rounded-lg mt-16 bg-dark-200 h-[166px]">
            <h1 className="text-base font-normal uppercase font-basement text-grey-525">
              AD PLACEMENT SPACE
            </h1>
          </div> */}
        </div>
        <div className="hidden md:block w-full lg:w-[344px] space-y-6 block ">
          <div className="flex flex-col w-full text-4xl bg-gradient-to-r from-[#2e414e] to-[#132836] rounded-lg py-4 px-6">
            <p className={`text-lg font-normal font-basement text-secondary`}>
              {questionTimeRemaining === 0
                ? "Next question in"
                : "Time remaining"}
            </p>
            <h1
              className={`text-3xl font-bold text-white font-basement ${
                (questionTimeRemaining > 0 && questionTimeRemaining < 5) ||
                (restTimeRemaining > 0 && restTimeRemaining < 5)
                  ? "animate-pulse"
                  : ""
              }
              `}
            >
              {questionTimeRemaining === 0
                ? restTimeRemaining
                : questionTimeRemaining}{" "}
              seconds
            </h1>
          </div>
          <div className="px-3 pt-5 pb-3 bg-gradient-to-b from-[#061F30] to-[#061F30] rounded-lg">
            <h1 className="pt-2.5 font-basement font-bold text-xl text-white ">
              Participants ({totalSessionParticipants})
            </h1>
            <div className="mt-5">
              {leaderboard &&
                leaderboard.top10.map((user, index) => {
                  const opacity =
                    index <= 3
                      ? 1
                      : 1 - (index - 3) / (leaderboard.top10.length - 4);
                  const isCurrentUser = user.userId === currentUser.id;
                  return (
                    <ParticipationsRankTable
                      key={index}
                      rank={user.rank}
                      userName={user.username}
                      // userId={user.userId}
                      points={user.totalPoints}
                      // profileImage={user.profileImage}
                      // showWinnerIcon={index < 3}
                      isCurrentUser={isCurrentUser}
                      animate={questionTimeRemaining < 0}
                      style={{
                        opacity: isCurrentUser || index <= 2 ? 1 : opacity,
                      }}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
