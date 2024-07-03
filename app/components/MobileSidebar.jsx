"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  BtcIcon,
  DiamondIcon,
  DiscordIcon,
  EthIcon,
  LinkedInIcon,
  TickIcon,
  TicketIcon,
  XIcon,
} from "./Svgs";
import myProfile from "@/public/images/avatar.jpeg";
import { socialLinks } from "@/lib/config";
import SelectDropdown from "./SelectDropdown";
import { useWallet } from "../contexts/WalletContext";
import { useUser } from "../contexts/UserContext";
import { formatNumber } from "@/lib/utils";

export const MobileSidebar = ({ onNavLinkClick }) => {
  const [activeLink, setActiveLink] = useState("");
  const { walletBalances } = useWallet();
  const { user } = useUser();

  const pathname = usePathname();
  // const [steps, setSteps] = useState([
  //   { title: "Verify Email", checked: true },
  //   { title: "Deposit", checked: false },
  //   { title: "Play Game", checked: false },
  // ]);

  const navLinks = useMemo(
    () => [
      { title: "Home", url: "/dashboard" },
      { title: "Shop", url: "/dashboard/shop" },
      { title: "Profile", url: "/dashboard/profile" },
      // { title: "Support", url: "/dashboard/support" },
    ],
    []
  );

  useEffect(() => {
    const active = navLinks.find((link) => link.url === pathname);
    if (active) setActiveLink(active.title);
  }, [pathname, navLinks]);

  // const handleStepClick = (index) => {
  //   const newSteps = [...steps];
  //   newSteps[index].checked = !newSteps[index].checked;
  //   setSteps(newSteps);
  // };

  // const completedStepsCount = steps.filter((step) => step.checked).length;

  const handleLinkClick = () => {
    if (onNavLinkClick) {
      onNavLinkClick();
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex lg:hidden justify-between w-full gap-4 px-4 py-2 rounded-full  bg-primary-350">
          <div className="flex items-center">
            <div className="relative object-cover w-8 h-8 overflow-hidden border rounded-full border-secondary ">
              <Image
                src={myProfile}
                alt="Profile"
                layout="fill"
                className="rounded-full"
                objectFit="cover"
                draggable={false}
                priority={true}
              />
            </div>
            <p className="ml-2 text-base font-normal text-white font-basement ">
              {user.username}
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="/dashboard/shop">
              <div className="w-fit bg-danger/25 flex gap-1 items-center py-[8px] px-[10px] rounded-full">
                <TicketIcon
                  width={19}
                  height={19}
                  className={"text-danger-100"}
                />
                <h1 className="text-sm font-bold text-white font-basement">
                  {formatNumber(user.tickets)}
                </h1>
              </div>
            </Link>
            <Link href="/dashboard/shop">
              <div className="w-fit bg-[#58FF69]/25 flex gap-1 items-center py-[8px] px-[10px] rounded-full">
                <DiamondIcon
                  width={19}
                  height={19}
                  className={"text-[#58FF69]"}
                />
                <h1 className="text-sm font-bold text-white font-basement">
                  {formatNumber(user.diamonds)}
                </h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-6">
          {walletBalances.length > 0 && (
            <SelectDropdown options={walletBalances} />
          )}
        </div>
      </div>
      {/* nav links */}
      <ul className="flex flex-col items-center justify-center gap-5 mt-8 text-center">
        {navLinks.map(({ title, url }, index) => (
          <li
            key={index}
            className={`w-fit ${
              title === activeLink ? "text-secondary" : "text-white"
            }`}
          >
            <Link
              href={url}
              className="text-3xl font-bold font-basement hover:text-secondary"
              onClick={handleLinkClick}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="w-full gap-2 px-3 pb-6 mt-8 bg-primary">
        <div>
          {/* <div className="bg-primary-350 rounded-[10px]  px-5 py-4">
            <div className="flex items-center justify-between pb-2">
              <p className="text-white font-basement font-normal text-[14px]">
                Complete Steps & win 10 diamonds
              </p>
              <div className="flex ml-3">
                <p className="text-secondary">{completedStepsCount}</p>
                <span className="text-white">/3</span>
              </div>
            </div>
            {steps.map((step, index) => (
              <div key={index}>
                <div className="mt-2.5 flex justify-between items-center ">
                  <p className="text-white duration-200 cursor-pointer hover:text-secondary hover:underline">
                    {step.title}
                  </p>
                  <div
                    className="group flex items-center justify-center rounded-full w-[26px] h-[26px] rounded border border-[#445764] border-[3px] cursor-pointer"
                    onClick={() => handleStepClick(index)}
                    style={{
                      backgroundColor: step.checked ? "yellow" : "transparent",
                      color: step.checked ? "black" : "#445764",
                      borderColor: step.checked ? "yellow" : "#445764",
                    }}
                  >
                    <TickIcon />
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <div className="text-center mt-9">
            <div className="flex justify-center gap-5 border-white">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  className="group py-[8px] transition-colors flex items-center justify-center w-[36px] h-[38px] rounded-[4px] bg-primary-350 hover:bg-secondary duration-200"
                >
                  <link.icon
                    width={21}
                    height={23}
                    className={
                      "text-white cursor-pointer group-hover:text-dark"
                    }
                  />
                </Link>
              ))}
            </div>
            <p className="mt-4 text-grey-100">
              Brainz © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
