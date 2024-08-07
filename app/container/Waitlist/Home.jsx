"use client";
import Link from "next/link";
import homeBanner from "../../../public/images/homebanner.png";
import logo from "../../../public/images/brainz-logo.svg";
import iphone from "@/public/images/IPhoneFrame.png";
import robot from "@/public/images/robot.png";
import Image from "next/image";
import WaveAnimation from "@/app/components/Wave";
import Footer from "@/app/components/Footer";
import { Button } from "@/app/components/Button";
import { WinBox } from "@/app/components/WinBox";
import { winBoxData } from "./data";
import { useEffect, useState } from "react";
import { calculateTimeLeft } from "@/lib/utils";

export const Waitlist = () => {
  const targetTime = new Date(Date.UTC(2024, 6, 2, 18, 0));

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${homeBanner.src})`,
          width: "100%",
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: " no-repeat",
          backgroundSize: "cover",
        }}
        className="flex flex-col items-center "
      >
        <div className="container flex flex-col items-center justify-center px-6 text-center py-14  ">
          <Link href={"/"} className="relative w-20 h-12 lg:w-28 lg:h-16">
            <Image
              src={logo}
              alt="Logo"
              fill={"layout"}
              objectFit="contain"
              draggable={false}
              priority={true}
            />
          </Link>
          <p className="text-white font-basement -mt-4">
            Play Trivia, Win Crypto.
          </p>
        </div>

        <div className="container lg:max-w-[1065px] px-6 py-8 lg:py-14  flex items-center justify-between text-white max-lg:flex-col max-lg:gap-20">
          <div className="w-full lg:w-[60%] max-lg:text-">
            <h1 className=" font-basement text-2xl md:text-3xl lg:text-4xl font-bold ">
              PLAY LIVE TRIVIA GAMES
            </h1>
            <p className=" mt-5 text-base font-normal lg:text-xl ">
              Compete Against Other Players{" "}
            </p>
            <p className="mt-2 text-base font-semibold lg:text-xl ">
              To Win The Pot!
            </p>
            <ul className="list-disc pl-5 mt-4 text-base lg:text-xl capitalize flex flex-col gap-3">
              <li>
                Use{" "}
                <span className="text-secondary font-semibold">
                  any crypto token
                </span>{" "}
                to enter the game
              </li>
              <li>
                Win the game and
                <span className="text-secondary font-semibold">
                  {" "}
                  collect the pot
                </span>
              </li>
              <li>
                <span className="text-secondary font-semibold">
                  Paid in USDT
                </span>{" "}
                straight into your wallet
              </li>
            </ul>
            <div className="flex gap-10  mt-16 lg:mt-20 flex-col">
              <div>
                <p className=" text-base font-normal max-lg:text-center">
                  First Game Pot Size
                </p>{" "}
                <h1 className="mt-2 font-basement text-xl md:text-2xl font-bold  max-lg:text-center">
                  1,000 USDT
                </h1>
              </div>
              <div className="klaviyo-form-S9y8UP"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-max flex items-center justify-center lg:justify-end ">
            <Image
              src={iphone}
              alt="iphone"
              priority={true}
              className="max-w-80"
            />
          </div>
        </div>

        <div className="container flex flex-col items-center justify-center px-6 text-center py-14 text-white ">
          <h1 className=" font-basement text-xl md:text-2xl lg:text-3xl font-bold ">
            JOIN THE RAFFLE
          </h1>
          <p className=" mt-5 text-xl font-semibold lg:text-2xl font-basement ">
            <span className="text-secondary"> $1,000 USD</span> in Prizes
          </p>
        </div>

        <div className="container flex flex-col items-center justify-center px-6 pt-10  pb-14 text-white">
          <div className="bg-primary-300 rounded-[20px] px-5 lg:px-10  py-8 md:py-16  w-full flex justify-between max-md:flex-col gap-5 lg:gap-10 md:items-center">
            <div>
              <h3 className="text-lg font-semibold lg:text-xl font-basement">
                1. Join the Waitlist
              </h3>
              {/* <p className="text-grey-100 mt-2">
                Post about Brainz on Twitter, Insta or Tiktok
              </p> */}
            </div>
            <div className=" w-[1px] bg-grey-250 md:h-28"></div>
            <div>
              <h3 className="text-lg font-semibold lg:text-xl font-basement">
                2. Re-share our Post
              </h3>
              <p className="text-grey-100 mt-2">
                On{" "}
                <Link
                  href={
                    "https://x.com/playbrainz/status/1805621828984926418?s=48&t=7Op3EQmNa6RTyJkkvVkmtw"
                  }
                  target="_blank"
                  className="text-secondary underline"
                >
                  Twitter
                </Link>
                , On{" "}
                <Link
                  href={
                    "https://www.instagram.com/p/C8pLzu0tri7/?igsh=MXIxNms1eTNlY2dsbA=="
                  }
                  target="_blank"
                  className="text-secondary underline"
                >
                  Instagram
                </Link>
              </p>
            </div>
            <div className=" w-[1px] bg-grey-250 md:h-28"></div>
            <div>
              <h3 className="text-lg font-semibold lg:text-xl font-basement">
                3. Create your Own Post
              </h3>
              <p className="text-grey-100 mt-2">
                Post on Twitter or Insta and tag @PlayBrainz
              </p>
              <p className="text-secondary mt-2">
                This is how we’ll pick the winner for the 500 USDT!
              </p>
            </div>
          </div>
        </div>

        <div className="container flex flex-col items-center justify-center px-6 text-center pt-6 lg:pt-12  ">
          <h1 className="text-3xl font-bold text-white font-basement md:text-4xl">
            THE PRIZES
          </h1>
          <p className="mt-4 text-sm font-normal uppercase lg:tracking-[3.2px]  text-grey-100 max-w-lg">
            Winners are announced before our first game on JULY 2 AT 2PM ET/ 8PM
            CET
          </p>

          <div className="relative  grid justify-center gap-8 mt-5 -bottom-14 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  pb-14 w-full">
            {winBoxData.map((item, index) => (
              <WinBox
                key={index}
                imageSrc={item.imageSrc}
                title={item.title}
                height={"h-full"}
                imageBg={item.imageBg}
              />
            ))}
          </div>
          <p className="mt-10 text-sm font-normal lg:tracking-[3.2px] text-grey-100 uppercase">
            We reserve the right to close or ban, temporarily or permanently,
            any user&apos;s account as we deem fraudulent, or any user who
            violates these terms and conditions.
          </p>
          <div className="w-full h-[1px] bg-secondary mt-10"></div>
        </div>
      </div>

      <div className="w-full overflow-hidden relative pt-14 pb-28">
        <div className="container flex flex-col items-center justify-center px-6   text-white mx-auto lg:max-w-[1065px] z-10 relative">
          <h1 className="text-xl font-bold text-white font-basement md:text-2xl text-center">
            UPCOMING GAME
          </h1>
          <div className="flex items-center w-full mt-10 max-lg:flex-col gap-16">
            <div className="w-full lg:w-1/2 flex max-lg:justify-center">
              <div className="w-full max-w-sm pt-10 pb-16 px-6 rounded-lg border shadow-glow relative bg-primary">
                <div className="z-10 relative">
                  <h1 className="text-lg font-bold text-white font-basement md:text-xl text-center">
                    PLAY TRIVIA, WIN CRYPTO
                  </h1>
                  <p className="font-bold text-white font-basement text-sm mt-2 text-center">
                    JULY 2 AT 2PM ET/ 8PM CET
                  </p>
                  <div className="mt-12 pb-5 space-y-2  font-basement text-sm  ">
                    <p className=" text-white px-4 ">Crypto 101</p>
                    <p className=" text-secondary border border-secondary bg-[linear-gradient(91deg,_rgba(223,_200,_11,_0.30)_-0.05%,_#2F2A00_99.66%)] font-bold px-4 py-0.5 rounded-md w-max">
                      The Everything Quiz
                    </p>
                    {/* <p className=" text-white px-4 ">Crypto Tokens</p> */}
                  </div>
                  <p className=" text-white px-4 mt-10">Prize Reward</p>
                  <h1 className="text-lg font-bold text-white font-basement md:text-xl border border-secondary rounded-full w-max px-4 py-0.5 mt-1">
                    1,000 USDT
                  </h1>
                </div>
                <Image
                  src={robot}
                  alt="robot"
                  priority={true}
                  className=" h-[70%]  object-contain absolute bottom-0 -right-[15%]"
                />
                <Image
                  src={logo}
                  alt="brainz"
                  priority={true}
                  className=" w-10  object-contain absolute bottom-2 right-2"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <h1 className="text-lg  text-white font-basement md:text-xl text-center">
                STARTING IN
              </h1>{" "}
              <div className="mt-6 flex gap-3 items-center">
                {timeLeft.days && (
                  <>
                    <div className="w-16 h-16 rounded-lg  text-[#000000] font-basement font-bold text-xl bg-secondary flex items-center justify-center">
                      {String(timeLeft.days).padStart(2, "0")}d
                    </div>
                    <span className="text-4xl font-basement font-bold">:</span>
                  </>
                )}
                <div className="w-16 h-16 rounded-lg  text-[#000000] font-basement font-bold text-xl bg-secondary flex items-center justify-center">
                  {String(timeLeft.hours).padStart(2, "0")}h
                </div>
                <span className="text-4xl font-basement font-bold">:</span>
                <div className="w-16 h-16 rounded-lg  text-[#000000] font-basement font-bold text-xl bg-secondary flex items-center justify-center">
                  {String(timeLeft.minutes).padStart(2, "0")}m
                </div>{" "}
                <span className="text-4xl font-basement font-bold">:</span>
                <div className="w-16 h-16 rounded-lg  text-[#000000] font-basement font-bold text-xl bg-secondary flex items-center justify-center">
                  {String(timeLeft.seconds).padStart(2, "0")}s
                </div>
              </div>
              <p className=" text-white px-4 mt-10">Prize Rewards</p>
              <h1 className="text-xl font-bold text-white font-basement md:text-2xl mt-1">
                1,000 USDT
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 h-full -z-10 max-h-full overflow-hidden">
          <WaveAnimation height={900} />
        </div>
      </div>
      <div className="m-2 border-t border-grey-250">
        <Footer />
      </div>
    </div>
  );
};
