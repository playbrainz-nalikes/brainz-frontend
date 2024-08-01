import Image from "next/image"
import { TabSwitch } from "../tab-switch"
import { DiamondIcon } from "@/app/components/Svgs"

export default function GameRulesPage() {
  return (
    <div>
      <TabSwitch activeId="rule" />
      <h3 className="mb-6 text-xl font-bold">
        <span className="text-secondary">The</span>
        &nbsp;Rules
      </h3>
      <ul className="mb-12 list-disc space-y-6 pl-7 text-base">
        <li>As the session begins, all players compete against each other.</li>
        <li>
          At the end of the session, the player with the&nbsp;
          <span className="text-secondary">highest score wins.</span>
        </li>
        <li>
          The&nbsp;
          <span className="text-secondary">
            winner collects the entire pot amount.
          </span>
          &nbsp;The reward is sent directly to the user’s wallet
        </li>
        <li>
          In case of a tie, the player with the quickest answer times wins.
        </li>
        <li>Each session includes 12 questions.</li>
        <li>Players have 8 seconds to answer each question.</li>
      </ul>

      <div className="mb-12 flex w-full flex-col gap-6 xl:flex-row xl:gap-14">
        <RuleCard1 title="Correct Answer">
          For every correct answer, you earn up to 8pts. Points are added and
          the player with the <b>highest point wins.</b>
        </RuleCard1>
        <RuleCard1 title="Speed Matters">
          Answer quickly. Questions are time-sensitive,{" "}
          <b>the quicker you answer, the more points you will earn.</b>
        </RuleCard1>
      </div>

      {/* power-ups */}
      <div>
        <h3 className="mb-6 text-xl font-bold">
          <span className="text-secondary">The</span>
          &nbsp;Jokers
        </h3>
        <p className="mb-6 text-base">You can only use 1 Joker per session</p>

        <div className="mb-12 flex w-full flex-col gap-6 xl:mb-16 xl:flex-row xl:gap-14">
          <RuleCard2 title="50/50" diamonds="01">
            Use a 50/50 to <b>remove 2 wrong answers</b> from the board.
          </RuleCard2>
          <RuleCard2 title="Auto-correct" diamonds="02">
            The Auto-correct is your free pass to <b>skip a question</b> but
            still get the points.
          </RuleCard2>
        </div>
      </div>
      {/* spin wheel */}
      <div className="mb-5">
        <h3 className="mb-6 text-xl font-bold xl:mb-0">
          <span className="text-secondary">Spin&nbsp;</span>
          The Wheel
        </h3>
        <div className="flex flex-col gap-4 xl:flex-row">
          <ul className="list-disc space-y-6 pl-7 text-base xl:mt-20">
            <li>
              Qualifying users will get a <b>free spin of the wheel</b> at the
              end of each session.
            </li>
            <li>These prizes are randomly distributed to users.</li>
            <li>You can collect Tickets, Diamonds, and cash prizes!</li>
          </ul>
          <div className="flex min-w-[359px] justify-center">
            <Image
              width={359}
              height={359}
              src="/images/rule-wheel.png"
              alt="wheel"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const RuleCard1 = ({ title, children }) => {
  return (
    <div className="flex-1 rounded-[5px] bg-gradient-card p-5">
      <h4 className="mb-[21px] text-xl font-black">{title}</h4>
      <p className="font-inter text-base [&>b]:font-bold">{children}</p>
    </div>
  )
}

const RuleCard2 = ({ title, children, diamonds }) => {
  return (
    <div className="px-5 py-7 flex-1 rounded-[5px] bg-gradient-to-r from-[#06262c] to-[#05212a]">
      <div className="flex justify-between mb-[21px]">
        <h4 className="text-lg xl:text-2xlc font-black ">{title}</h4>
        <div className="min-w-[90px] px-3 bg-success/20 rounded-[80px] flex items-center gap-2 justify-between">
          <p className="text-base leading-none xl:text-xl">{diamonds}</p>
          <DiamondIcon height={16} width={16} className="text-success" />
        </div>
      </div>
      <p className="font-inter text-base [&>b]:font-bold">{children}</p>
    </div>
  )
}
