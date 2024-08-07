"use client"

import React, { useState, useEffect, useRef } from "react"
import SelectDropdown from "./SelectDropdown"
import Logo from "@/public/images/brainz-logo.svg"

import {
  ArrowDownLightIcon,
  DiamondIcon,
  EthIcon,
  MenuIcon,
  NavbarCrossIcon,
  TextCopyIcon,
  TextCopyTickIcon,
  TicketIcon,
  UsdtIcon
} from "./Svgs"
import Ticket from "./Ticket"
import Image from "next/image"
import Profile from "@/public/images/avatar.png"
import Link from "next/link"
import { MobileSidebar } from "./MobileSidebar"
import LoagoutButton from "./LoagoutButton"
import { usePrivy } from "@privy-io/react-auth"
import { formatWalletAddress } from "@/lib/utils"
import { useWallet } from "../contexts/WalletContext"
import { useUser } from "../contexts/UserContext"
import ConnectButton from "../container/Home/ConnectButton"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenProfile, setIsOpenProfile] = useState(false)
  const profileRef = useRef(null)
  const dropdownRef = useRef(null)
  const [isCopied, setIsCopied] = useState(false)

  const { user: privyUser } = usePrivy()
  const { user } = useUser()
  const toggleDropdown = () => {
    setIsOpenProfile(!isOpenProfile)
    if (isOpenProfile == false) {
      setIsCopied(false)
    }
  }

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsOpenProfile(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (profileRef.current && dropdownRef.current) {
      dropdownRef.current.style.width = `${profileRef.current.offsetWidth}px`
    }
  }, [isOpenProfile])

  const copyToClipboard = (string) => {
    setIsCopied(true)
    navigator.clipboard.writeText(string)
  }

  const { walletBalances } = useWallet()

  if (!privyUser || !user) {
    return (
      <div className="sticky top-0 z-40">
        <div className="mx-auto flex min-h-[78px] items-center justify-end px-4 md:px-0">
          <ConnectButton />
        </div>
      </div>
    )
  }

  return (
    <div className="sticky top-0 z-40">
      <nav className="border-secondary bg-primary-350 py-3.5 md:bg-primary">
        <div className="mx-auto px-4 md:px-0">
          <div className="flex items-center justify-end border-white max-md:justify-between md:mt-0">
            <Link
              href="/"
              className="relative h-8 w-12 md:hidden lg:h-12 lg:w-16"
            >
              <Image
                src={Logo}
                alt="Logo"
                fill={"layout"}
                objectFit="contain"
                draggable={false}
                priority={true}
              />

              <span className="absolute bottom-0 w-32 font-basement text-[10px] font-bold leading-[1.4] text-white">
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
                  } relative z-50 flex w-fit cursor-pointer items-center rounded-lg border border-primary-275 py-2 pl-3 pr-5 transition duration-200 hover:bg-primary-275`}
                >
                  <div className="relative mr-3 h-8 w-8 overflow-hidden rounded-full border border-secondary object-cover">
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
                  <p className="ml-2 font-basement text-sm font-normal text-white">
                    {user.username}
                  </p>
                  <div className="ml-4 flex items-center justify-center">
                    <ArrowDownLightIcon />
                  </div>
                </div>
                {isOpenProfile && (
                  <div
                    ref={dropdownRef}
                    className="shadow-lg absolute right-0 z-10 mt-[5px] flex flex-col justify-center rounded-lg bg-dark-100 px-5 text-center font-basement text-sm text-grey-200"
                  >
                    <div className="flex items-center justify-between pb-2 pt-4 text-sm text-grey-200">
                      <p
                        className={`max-w-[120px] overflow-hidden truncate text-ellipsis whitespace-nowrap hover:text-white ${
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
                            className="text-grey-200 hover:text-white"
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
                  className="hamburger text-white transition-opacity duration-300 focus:outline-none"
                  onClick={toggleMenu}
                >
                  <div className={`bar-wrapper ${isOpen ? "cross" : ""}`}>
                    <div className="bar mb-1.5 rounded-sm"></div>
                    <div className="bar relative -right-3 mb-1.5 rounded-sm"></div>
                    <div className="bar rounded-sm"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="broder fixed inset-0 top-[60px] z-40 flex justify-start border-white bg-primary md:hidden">
          <div className="mt-6 h-[calc(100vh-84px)] w-full overflow-y-scroll px-2 scrollbar scrollbar-thumb-[#104061] scrollbar-thumb-rounded-full scrollbar-w-1.5">
            <MobileSidebar onNavLinkClick={toggleMenu} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
