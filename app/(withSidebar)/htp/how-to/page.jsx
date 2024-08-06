"use client"
import { cn } from "@/lib/utils"
import { TabSwitch } from "../tab-switch"
import Image from "next/image"

export default function HTPPage() {
  return (
    <div>
      <TabSwitch activeId="htp" />
      <div className="mb-12 xl:mb-16">
        <ul className="list-disc space-y-6 pl-7 text-base">
          <li>To enter a game you must use a Ticket.</li>
          <li>You can buy tickets using Credit Card or Crypto.</li>
        </ul>
      </div>
      <StepDivider stepNum={1} />
      <Step1 />
      <StepDivider stepNum={2} />
      <Step2 />
      <StepDivider stepNum={3} />
      <Step3 />
      <StepDivider stepNum={4} />
      <Step4 />
    </div>
  )
}

const Step1 = () => {
  return (
    <div className="mb-10 mt-7 xl:mb-16 xl:mt-10">
      <div className="mb-16 flex justify-between gap-2">
        <h3 className="mt-6 min-w-[190px] text-xl font-bold lg:mt-12 lg:max-w-[320px] xl:text-2xl">
          <span className="text-secondary">Buying </span>
          Tickets
          <span className="mt-6 block">Using Crypto</span>
        </h3>
        <div className="max-lg:max-w-[220px] xl:mr-24">
          <Image
            width={277}
            height={305}
            alt="ticket card"
            src="/images/ticket-card.png"
          />
        </div>
      </div>
      <div>
        <p className="mb-4 text-lg font-bold xl:text-xl">
          If you are connected with an{" "}
          <span className="underline">email address</span>
        </p>
        <ol className="mb-6 list-decimal pl-8 text-base">
          <li>Go to “shop”(Link)</li>
          <li>Choose a pack and click Buy Now</li>
          <li>Select “Checkout with Crypto”</li>
          <li>Choose which crypto to pay with from the drop-down</li>
          <li>
            A unique QR code will be generated for you to send your crypto
          </li>
          <li>
            After a few minutes, you will get your tickets directly into your
            account
          </li>
        </ol>
        <p className="mb-6 text-base xl:text-xl">
          <span className="text-secondary">IMPORTANT: </span>
          The QR code is a single-use address. Do not attempt to deposit funds
          to the same QR code more than once. You must generate a new QR code
          for each purchase.
        </p>
        <p className="mb-4 text-lg font-bold xl:text-xl">
          If you are connected with a <span className="underline">wallet</span>:
        </p>
        <ol className="mb-6 list-decimal pl-8 text-base">
          <li> Go to “shop”(Link)</li>
          <li> Choose a Pack and click Buy Now</li>
          <li> Select checkout with Crypto</li>
          <li> Confirm the transaction</li>
        </ol>
        <p className="mb-6 text-base xl:text-xl">
          <span className="text-secondary">IMPORTANT: </span>
          To complete the transaction, you must have enough gas tokens to pay
          the transaction fee. Ensure you have sufficient gas tokens in your
          wallet
        </p>
      </div>
    </div>
  )
}

const Step2 = () => {
  return (
    <div className="mb-10 mt-7 xl:mb-16 xl:mt-10">
      <h3 className="mb-8 text-xl font-bold">
        <span className="text-secondary">Look For </span>
        Next Game
      </h3>
      <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-start">
        <div>
          <Image
            width={577}
            height={304}
            alt="live game card"
            src="/images/live-game.png"
          />
        </div>
        <div>
          <Image
            className="max-lg:max-w-[260px]"
            width={312}
            height={458}
            alt="game start countdown"
            src="/images/countdown.png"
          />
        </div>
      </div>
      <ul className="mt-8 list-disc space-y-6 pl-7 text-base c_1300:-mt-[90px]">
        <li className="c_1300:max-w-[570px]">
          Set an email reminder to be notified 30 minutes before the next game.
        </li>
        <li className="c_1300:max-w-[580px]">
          Take a Seat at any time to secure your spot.
        </li>
        <li>
          Once you take a seat you can exit the page without losing your spot,
          as long as you come back before the session starts.
        </li>
      </ul>
    </div>
  )
}

const Step3 = () => {
  return (
    <div className="mb-10 mt-7 xl:mb-16 xl:mt-10">
      <h3 className="mb-8 text-xl font-bold">
        <span className="text-secondary">The Game </span>
        Play
      </h3>

      <div>
        <Image
          width={1448}
          height={915}
          alt="screenshot of game question"
          src="/images/game-play.png"
        />
      </div>
    </div>
  )
}

const Step4 = () => {
  return (
    <div className="mb-10 mt-7 xl:mb-16 xl:mt-10">
      <div className="mb-8 flex items-center justify-between gap-4">
        <ul className="list-disc pl-7 text-base">
          <li>Win the Game, Collect the Pot</li>
          <li>Spin to Win a Bonus Prize</li>
        </ul>
        <h3 className="text-xl font-bold">
          <span className="text-secondary">The </span>
          Reward
        </h3>
      </div>

      <div className="lg:-ml-[61px] lg:-mr-[67px]">
        <Image
          width={1080}
          height={941}
          alt="screenshot of game rewards"
          src="/images/game-reward.png"
        />
      </div>
    </div>
  )
}

const StepDivider = ({ stepNum }) => {
  return (
    <div
      className={cn(
        "flex items-center gap-6 xl:gap-10",
        stepNum % 2 === 0 && "flex-row-reverse"
      )}
    >
      <p className="text-nowrap text-xl font-bold">STEP {stepNum}</p>
      <div className="h-[3px] w-full bg-secondary-100" />
    </div>
  )
}
