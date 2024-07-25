"use client";
import Image from "next/image";
import Logo from "@/public/images/Brainz-logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { DiscordIcon, LinkedInIcon, TickIcon, XIcon } from "./Svgs";
import { socialLinks } from "@/lib/config";

export const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const [steps, setSteps] = useState([
    { title: "Verify Email", checked: true },
    { title: "Deposit", checked: false },
    { title: "Play Game", checked: false },
  ]);

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

  const handleStepClick = (index) => {
    const newSteps = [...steps];
    newSteps[index].checked = !newSteps[index].checked;
    setSteps(newSteps);
  };

  const completedStepsCount = steps.filter((step) => step.checked).length;

  return (
    <div className="sticky top-0 w-[243px] h-full  max-md:hidden">
      <div className="flex flex-col justify-between h-screen">
        <div className="mt-8 px-3 ">
          <div className="">
            <Link href={"/dashboard"}>
              <Image
                src={Logo}
                alt="Logo"
                width={90}
                height={52}
                objectFit="contain"
                draggable={false}
                priority={true}
              />
            </Link>
          </div>
          <div className="mt-10 ">
            <ul className="flex flex-col gap-8 pl-[22px]">
              {navLinks.map(({ title, url }, index) => (
                <li
                  key={index}
                  className={`hover:text-secondary font-semibold text-xl ${
                    title === activeLink ? "text-secondary" : "text-white"
                  }`}
                >
                  <Link href={url} className="font-bold font-basement">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className=" mt-9 w-[200px] bg-primary-350 rounded-[10px] px-[13px] py-3">
            <div className="flex justify-center items-center border-b border-b-[4px] border-white pb-2">
              <p className="text-white font-basement font-normal text-[14px]">
                Complete Steps & win 10 diamonds
              </p>
              <div className="flex">
                <p className="text-secondary">{completedStepsCount}</p>
                <span className="text-white">/3</span>
              </div>
            </div>
            {steps.map((step, index) => (
              <div key={index}>
                <div className="mt-2.5 flex justify-between items-center ">
                  <p className="text-white hover:text-secondary text-[14px] font-basement font-normal cursor-pointer duration-200 hover:underline">
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
        </div>
        <div className="mt-[13%] pb-[5%] text-center">
          <div className="border-white flex justify-center gap-5">
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
                  className={"text-white cursor-pointer group-hover:text-dark"}
                />
              </Link>
            ))}
          </div>
          <p className="mt-4 text-grey-100">Brainz © 2024</p>
        </div>
      </div>
    </div>
  );
};
