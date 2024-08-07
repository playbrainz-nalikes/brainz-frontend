import React, { useMemo } from "react"
import { useEffect, useState } from "react"
import { OptionSelect } from "./OptionSelect"
import { LongArrowRightIcon } from "./Svgs"
import { SessionButton } from "./SessionButton"
import { ProgressBar } from "./Progressbar"
import { MobilePointsCard } from "./MobilePointsCard"
import { ParticipationsRankTable } from "./ParticipationsRankTable"
import { GameCarousel } from "./GameCarousel"
import "react-loading-skeleton/dist/skeleton.css"
import Skeleton from "react-loading-skeleton"
import { apiCall } from "@/lib/utils"
import clickSound from "@/public/sounds/anwer-select-sound.wav"
import a from "@/public/sounds/new-question-alert-sound.mp3"
import w from "@/public/sounds/wrong.mp3"
import r from "@/public/sounds/right.mp3"
import tickSound from "@/public/sounds/ticking.mp3"
import { useUser } from "../contexts/UserContext"

const alphabets = ["A", "B", "C", "D"]

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
  stage
}) => {
  const [audio] = useState(new Audio(clickSound))
  const [wrong] = useState(new Audio(w))
  const [right] = useState(new Audio(r))
  const [tickSoundeffect] = useState(new Audio(tickSound))
  const [alert] = useState(new Audio(a))

  const [wrongSoundPlayed, setWrongSoundPlayed] = useState(false)
  const [tickingAudioPlaying, setTickingAudioPlaying] = useState(false)
  const [alertSound, setAlertSound] = useState(false)

  const [totalSessionParticipants, setTotalSessionParticipants] = useState(0)

  const [table, setTable] = useState()
  useEffect(() => {
    const getParticipants = async () => {
      try {
        const data = await apiCall(
          "get",
          `/session-stats/session/${session.id}`
        )
        if (data) {
          setTotalSessionParticipants(data.count)
        }
      } catch (err) {
        console.error("Error fetching Participants:", err)
      }
    }
    getParticipants()
  }, [leaderboard])

  const moveUser = (currentIndex, targetIndex, data) => {
    if (currentIndex >= targetIndex && currentIndex >= 0 && targetIndex >= 0) {
      const user = data[currentIndex]
      const updatedTable = [
        ...data.slice(0, currentIndex),
        ...data.slice(currentIndex + 1)
      ]
      const newTable = [
        ...updatedTable.slice(0, currentIndex - 1),
        user,
        ...updatedTable.slice(currentIndex - 1)
      ]

      setTable(newTable)

      if (currentIndex > targetIndex) {
        setTimeout(() => {
          moveUser(currentIndex - 1, targetIndex, newTable)
        }, 100)
      }
    }
  }

  const getOptionVariant = (answer, wrong) => {
    if (questionTimeRemaining > 0) return "default"
    return answer ? "success" : wrong ? "danger" : "default"
  }

  const onAnswerSelect = (answer) => {
    if (questionTimeRemaining > 0 && !question.answer) {
      setSelectedOption(answer)
      audio.play()
    }
  }

  useEffect(() => {
    if (
      questionTimeRemaining === 0 &&
      question.answer &&
      stage === "selectAnswer"
    ) {
      if (question.answer === question.correctAnswer) {
        right.play()
      } else {
        wrong.play()
      }
    }
  }, [questionTimeRemaining])
  useEffect(() => {
    if (
      (questionTimeRemaining > 0 &&
        questionTimeRemaining <= 5 &&
        !tickingAudioPlaying) ||
      (restTimeRemaining > 0 && restTimeRemaining <= 5 && !tickingAudioPlaying)
    ) {
      tickSoundeffect.currentTime = 0
      tickSoundeffect.play()
      setTickingAudioPlaying(true)
    }

    if (
      questionTimeRemaining === 0 &&
      restTimeRemaining === 0 &&
      tickingAudioPlaying
    ) {
      tickSoundeffect.pause()
      tickSoundeffect.currentTime = 0
      setTickingAudioPlaying(false)
    }
  }, [questionTimeRemaining, restTimeRemaining])

  useEffect(() => {
    if (restTimeRemaining === 0 && !alertSound) {
      alert.play()
      setAlertSound(true)
    } else {
      setAlertSound(false)
    }
  }, [restTimeRemaining])

  const { user: currentUser } = useUser()

  return (
    <div className="pb-4">
      <div className="mb-8 block bg-primary-350 md:hidden">
        <div className="px-5 pb-3.5 pt-7">
          <div className="mb-5 flex w-full items-center justify-between gap-4 rounded-lg text-4xl">
            <h1 className="max-w-36 font-basement text-xl font-bold text-white">
              {title}
            </h1>
            <QuestionTimerMobile
              questionTimeRemaining={questionTimeRemaining}
              restTimeRemaining={restTimeRemaining}
            />
          </div>
          {leaderboard?.top10.length > 0 && (
            <GameCarousel autoplay={false}>
              {leaderboard.top10.map((item, index) => (
                <MobilePointsCard data={item} key={index} />
              ))}
            </GameCarousel>
          )}
        </div>
        <div className="relative -bottom-1 pr-1.5">
          <ProgressBar progress={progress} rounded step={step} />
        </div>
      </div>
      <div className="flex flex-col gap-16 bg-primary pl-4 pr-4 md:pl-14 md:pr-9 lg:flex-row">
        <div className="w-full lg:w-3/4">
          <div className="flex items-center gap-4 md:gap-5">
            {powerUsed.fiftyFifty ||
            powerUsed.autoCorrect ||
            question.answer ? (
              <div className="w-[200px] lg:w-[234px]">
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
                className="w-[200px] lg:w-[234px]"
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
          <div className="mt-7 flex max-w-[830px] gap-4 text-start text-white md:mt-12">
            <div className="flex hidden items-center gap-4 md:flex">
              <h1 className="font-basement text-lg font-bold text-secondary lg:text-xl">
                {step}
              </h1>
              <div className="hidden md:block">
                <LongArrowRightIcon height="24" width="24" />
              </div>
            </div>
            <p className="pl-2 font-inter text-lg font-semibold md:pl-0 md:text-xl lg:text-2xl">
              {question.question}
            </p>
          </div>
          <div className="mt-6 flex max-w-[784px] flex-col gap-4 pb-5 md:pb-0 lg:mt-11">
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
                        question.answer !== question.correctAnswer
                    )}
                    answer={questionTimeRemaining === 0 && true}
                    onClick={() => onAnswerSelect(index + 1)}
                  />
                )
              })
            )}
          </div>
          {/* <div className="hidden md:flex flex items-center justify-center rounded-lg mt-16 bg-dark-200 h-[166px]">
            <h1 className="text-base font-normal uppercase font-basement text-grey-525">
              AD PLACEMENT SPACE
            </h1>
          </div> */}
        </div>
        <div className="hidden w-full space-y-6 md:block lg:w-[344px]">
          <QuestionTimer
            questionTimeRemaining={questionTimeRemaining}
            restTimeRemaining={restTimeRemaining}
          />
          <div className="rounded-lg bg-gradient-to-b from-[#061F30] to-[#061F30] px-3 pb-3 pt-5">
            <h1 className="pt-2.5 font-basement text-xl font-bold text-white">
              Participants ({totalSessionParticipants})
            </h1>
            <div className="mt-5">
              {leaderboard &&
                leaderboard.top10.map((user, index) => {
                  const opacity =
                    index <= 3
                      ? 1
                      : 1 - (index - 3) / (leaderboard.top10.length - 4)
                  const isCurrentUser = user.userId === currentUser.id
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
                        opacity: isCurrentUser || index <= 2 ? 1 : opacity
                      }}
                    />
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const useTimer = ({ questionTimeRemaining, restTimeRemaining }) => {
  const [internalTime, setInternalTime] = useState(0)
  const [showCapture, setShowCapture] = useState(false)
  const nonZeroTime = questionTimeRemaining || restTimeRemaining

  // countdown in miliseconds
  useEffect(() => {
    setInternalTime(nonZeroTime * 1000)
    const interval = setInterval(() => {
      setInternalTime((prev) => (prev - 10 < 0 ? 0 : prev - 10))
    }, 10)
    return () => clearInterval(interval)
  }, [nonZeroTime])

  useEffect(() => {
    const handleShowCapture = () => {
      setShowCapture(true)
      setTimeout(() => {
        setShowCapture(false)
      }, 1500)
    }
    document.addEventListener("answerSubmitted", handleShowCapture)

    return () => {
      document.removeEventListener("answerSubmitted", handleShowCapture)
    }
  }, [])

  const timeToShow = (internalTime / 1000).toFixed(2)
  const shouldPulse = nonZeroTime > 0 && nonZeroTime < 5

  return {
    showCapture,
    timeToShow,
    shouldPulse
  }
}

const QuestionTimer = ({ questionTimeRemaining, restTimeRemaining }) => {
  const { shouldPulse, showCapture, timeToShow } = useTimer({
    questionTimeRemaining,
    restTimeRemaining
  })

  return (
    <div className="desktop relative w-full rounded-lg bg-gradient-to-r from-[#2e414e] to-[#132836] px-6 py-4 text-4xl">
      <p className={`font-basement text-lg font-normal text-secondary`}>
        {questionTimeRemaining === 0 ? "Next question in" : "Time remaining"}
      </p>
      <div
        className={`font-basement text-3xl font-bold text-white ${
          shouldPulse ? "animate-pulse" : ""
        }`}
      >
        <span className="inline-block w-[94px]">{timeToShow}</span>
        <span>secs</span>
      </div>
      {showCapture && <TimerCard timeToShow={timeToShow} />}
    </div>
  )
}

const TimerCard = ({ timeToShow }) => {
  const [capturedTime] = useState(timeToShow)

  const baseStyles =
    "absolute top-0 left-0 right-0 font-basement text-[#000] text-4xl rounded-lg py-4 px-6 bg-secondary"
  const animateStyles =
    "max-lg:animate-scoreSlideY lg:animate-scoreSlide ease-out slide"
  return (
    <div className={`${baseStyles} ${animateStyles}`}>
      <p className="font-basement text-lg font-normal">You Time</p>
      <div className="text-3xl font-bold">
        <span className="inline-block w-[94px]">{capturedTime}</span>
        <span>secs</span>
      </div>
    </div>
  )
}

const QuestionTimerMobile = ({ questionTimeRemaining, restTimeRemaining }) => {
  const { showCapture, timeToShow } = useTimer({
    questionTimeRemaining,
    restTimeRemaining
  })

  return (
    <div className="mobile relative p-2 font-basement text-2xl font-bold text-white">
      <span className="inline-block w-[74px]">{timeToShow}</span> s
      {showCapture && <TimerCardMobile timeToShow={timeToShow} />}
    </div>
  )
}

const TimerCardMobile = ({ timeToShow }) => {
  const [capturedTime] = useState(timeToShow)
  const baseStyles =
    "absolute top-0 -left-6 p-2 rounded-[10px] text-2xl font-bold text-[#000] font-basement bg-secondary"
  const animateStyles = "animate-scoreSlide ease-out duration-1500"

  return (
    <div className={`${baseStyles} ${animateStyles}`}>
      <span className="inline-block w-[74px]">{capturedTime}</span> s
    </div>
  )
}
