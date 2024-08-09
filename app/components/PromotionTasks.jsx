import { apiCall } from "@/lib/utils";
import { useUser } from "../contexts/UserContext";
import { useEffect, useState } from "react";
import { TickIcon } from "./Svgs";

export const PromotionTasks = () => {
  const { user } = useUser();

  const [loading, setLoading] = useState(true);
  const [steps, setSteps] = useState([
    false, // Verify Email
    false, // buy tickets
    false, // Play Game
  ]);
  const [rewardAmt, setRewardAmt] = useState(0);
  const stepLabels = ["Verify Email", "Purchase Tickets", "Play Game"];

  useEffect(() => {
    const getUserTasks = async () => {
      const tasksData = await apiCall("get", "/users/tasks");
      if (tasksData) {
        setSteps([
          tasksData.verifyEmail,
          tasksData.buyTicket,
          tasksData.buyTicket ? tasksData.playGame : false
        ]);
        setRewardAmt(tasksData.rewardAmt);
      }
    };
    getUserTasks().finally(() => setLoading(false));
  }, [user]);

  if (!user || loading) return null;
  const completedStepsCount = steps.filter(Boolean).length;

  return (
    <div className="font-basement bg-primary-350 rounded-[10px] px-[13px] py-3">
      <div className="flex justify-between border-b-[4px] border-white pb-2">
        <p className="text-white font-normal text-[14px]">
          Complete Steps <br />& win{" "}
          <span className="text-[#00FF1A]">{rewardAmt} diamonds</span>
        </p>
        <div className="flex mt-2">
          <p className="text-secondary">{completedStepsCount}</p>
          <span className="text-white">/3</span>
        </div>
      </div>
      {stepLabels.map((label, index) => (
        <div key={index}>
          <div className="mt-2.5 flex justify-between items-center ">
            <p className="text-white text-[14px] font-normal duration-200">
              {label}
            </p>
            <div
              className="group flex items-center justify-center rounded-full w-[26px] h-[26px]  border-[#445764] border-[3px]"
              style={{
                backgroundColor: steps[index] ? "yellow" : "transparent",
                color: steps[index] ? "black" : "#445764",
                borderColor: steps[index] ? "yellow" : "#445764",
              }}
            >
              <TickIcon />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
