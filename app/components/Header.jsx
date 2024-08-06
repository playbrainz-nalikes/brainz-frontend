"use client";

import React, { useState, useEffect, useRef } from "react";
import SelectDropdown from "./SelectDropdown";
import Logo from "@/public/images/Brainz-logo.png";

import {
  ArrowDownLightIcon,
  DiamondIcon,
  EthIcon,
  MenuIcon,
  NavbarCrossIcon,
  TextCopyIcon,
  TextCopyTickIcon,
  TicketIcon,
  UsdtIcon,
} from "./Svgs";
import Ticket from "./Ticket";
import Image from "next/image";
import Profile from "@/public/images/avatar.png";
import Link from "next/link";
import { MobileSidebar } from "./MobileSidebar";
import LoagoutButton from "./LoagoutButton";
import { usePrivy } from "@privy-io/react-auth";
import { formatWalletAddress } from "@/lib/utils";
import { useWallet } from "../contexts/WalletContext";
import { useUser } from "../contexts/UserContext";
import ConnectButton from "../container/Home/ConnectButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const profileRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  const { user: privyUser } = usePrivy();
  const { user } = useUser();
  const toggleDropdown = () => {
    setIsOpenProfile(!isOpenProfile);
    if (isOpenProfile == false) {
      setIsCopied(false);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (profileRef.current && dropdownRef.current) {
      dropdownRef.current.style.width = `${profileRef.current.offsetWidth}px`;
    }
  }, [isOpenProfile]);

  const copyToClipboard = (string) => {
    setIsCopied(true);
    navigator.clipboard.writeText(string);
  };

  const { walletBalances } = useWallet();

  if (!privyUser || !user) {
    return (
      <div className="sticky top-0 z-40">
        <div className="px-4 mx-auto md:px-0 min-h-[78px] flex items-center justify-end">
          <ConnectButton />
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-0 z-40">
      <nav className="border-secondary bg-primary-350 py-3.5 md:bg-primary">
        <div className="px-4 mx-auto md:px-0">
          <div className="flex items-center justify-end border-white md:mt-0 max-md:justify-between">
            <Link
              href="/"
              className="relative w-12 h-8 lg:w-16 lg:h-12 md:hidden"
            >
              <Image
                src={Logo}
                alt="Logo"
                fill={"layout"}
                objectFit="contain"
                draggable={false}
                priority={true}
              />

              <span className="absolute w-32 bottom-0 font-basement text-[10px] text-white leading-[1.4] font-bold">
                Play Trivia, Win Crypto
              </span>
            </Link>
            <div className="flex items-center gap-10 max-md:hidden">
              <div className="block max-[1200px]:hidden">
                {walletBalances.length > 0 && (
                  <SelectDropdown
                    defaultIdx={walletBalances.findIndex(
                      (b) => b.symbol === "BNB"
                    )}
                    options={walletBalances}
                  />
                )}
              </div>
              <div>
                <Ticket
                  mainIcon={TicketIcon}
                  number={user.tickets}
                  label="Tickets"
                  bgColor="danger"
                  href="/shop"
                />
              </div>
              <div>
                <Ticket
                  mainIcon={DiamondIcon}
                  number={user.diamonds}
                  label="Diamonds"
                  bgColor="success"
                  href="/shop"
                />
              </div>
              <div
                className="relative rounded-[88px] max-lg:hidden"
                ref={profileRef}
              >
                <div
                  onClick={toggleDropdown}
                  className={`${
                    isOpenProfile ? "bg-primary-275" : "bg-primary-350"
                  } border border-primary-275 transition duration-200 hover:bg-primary-275 flex relative items-center rounded-lg py-2 pl-3 pr-5 cursor-pointer z-50 w-fit`}
                >
                  <div className="relative object-cover w-8 h-8 mr-3 overflow-hidden border rounded-full border-secondary">
                    <Image
                      src={Profile}
                      alt="Profile"
                      layout="fill"
                      className="rounded-full"
                      objectFit="contain"
                      draggable={false}
                      placeholder="blur"
                    />
                  </div>
                  <p className="ml-2 text-sm font-normal text-white font-basement">
                    {user.username}
                  </p>
                  <div className="flex items-center justify-center ml-4">
                    <ArrowDownLightIcon />
                  </div>
                </div>
                {isOpenProfile && (
                  <div
                    ref={dropdownRef}
                    className="font-basement absolute right-0 mt-[5px] bg-dark-100 text-grey-200 text-sm shadow-lg rounded-lg z-10 text-center flex justify-center flex-col px-5"
                  >
                    <div className="flex items-center justify-between pt-4 pb-2 text-sm text-grey-200">
                      <p
                        className={`hover:text-white max-w-[120px] text-ellipsis whitespace-nowrap truncate overflow-hidden ${
                          !isCopied ? "" : "text-white"
                        }`}
                      >
                        {formatWalletAddress(privyUser.wallet.address)}
                      </p>
                      {isCopied ? (
                        <TextCopyTickIcon
                          height="22"
                          width="24"
                          className={"text-white"}
                        />
                      ) : (
                        <button
                          onClick={() =>
                            copyToClipboard(privyUser.wallet.address)
                          }
                        >
                          <TextCopyIcon
                            className="hover:text-white text-grey-200"
                            height="22"
                            width="24"
                          />
                        </button>
                      )}
                    </div>
                    <div className="border-b border-grey-250" />
                    <LoagoutButton
                      onLogoutClick={() => setIsOpenProfile(false)}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="md:hidden">
                <button
                  className="text-white transition-opacity duration-300 hamburger focus:outline-none"
                  onClick={toggleMenu}
                >
                  <div className={`bar-wrapper ${isOpen ? "cross" : ""}`}>
                    <div className="mb-1.5 rounded-sm bar"></div>
                    <div className="relative mb-1.5 rounded-sm bar -right-3"></div>
                    <div className="rounded-sm bar"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 bg-primary md:hidden flex justify-start z-40 top-[60px] broder border-white">
          <div className="h-[calc(100vh-84px)] w-full px-4 mt-6 scrollbar scrollbar-w-1.5 scrollbar-thumb-rounded-full scrollbar-thumb-[#104061] overflow-y-scroll">
            <MobileSidebar onNavLinkClick={toggleMenu} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
