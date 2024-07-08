"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import profileImage from "@/public/images/avatar.png";
import { CheckCirclekIcon } from "../components/Svgs";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Context = createContext();

export const NotificationContext = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <Context.Provider value={{ open, toggleOpen }}>
      {open && <Notification onClose={toggleOpen} />}
      {children}
    </Context.Provider>
  );
};
export const useNotification = () => useContext(Context);
export const Notification = ({ open, onClose }) => {
  const router = useRouter();
  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 4) {
          clearInterval(timer);
          // onClose(false);
          return 0;
        } else {
          return prevProgress + 1;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [open]);
  const handleRedirect = () => {
    router.push("/dashboard/profile");
  };
  return (
    <div className="max-w-xs md:max-w-md w-full z-50 fixed top-12 -right-[140px] md:-right-[126px] transform -translate-x-1/2 bg-primary-350 pt-3 pb-4 pl-8 pr-8 rounded-[10px] shadow-lg">
      <div className="text-white">
        <h1 className="text-base font-semibold font-inter text-start">
          Connected as
        </h1>
        <div
          className="flex items-center justify-between gap-4 cursor-pointer"
          onClick={handleRedirect}
        >
          <div className="flex items-center gap-2 pt-2.5">
            <div className="relative min-w-10 min-h-10 rounded-full pt-2.5">
              <Image
                src={profileImage}
                alt="Profile"
                layout="fill"
                className="rounded-full"
                objectFit="contain"
              />
            </div>
            <p className="text-xl font-normal text-left text-wrap max-w-44">
              Blue_guy78 0x1aCD...4754
            </p>
          </div>
          <div>
            <CheckCirclekIcon />
          </div>
        </div>
        <div className="w-full h-1 mt-3 overflow-hidden bg-white rounded">
          <div
            className="h-full bg-secondary"
            style={{
              width: `100%`,
              transition: "width .8s linear",
            }}
          />
        </div>
      </div>
    </div>
  );
};
