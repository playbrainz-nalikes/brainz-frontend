"use client";
import Image from "next/image";
import Logo from "@/public/images/Brainz-logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { DiscordIcon, LinkedInIcon, TickIcon, XIcon } from "./Svgs";
import { socialLinks } from "@/lib/config";
import { usePrivy } from "@privy-io/react-auth";
import { PromotionTasks } from "./PromotionTasks";

export const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { authenticated } = usePrivy();

  const pathname = usePathname();

  const navLinks = useMemo(
    () => [
      { title: "Home", url: "/" },
      { title: "Shop", url: "/shop", isProtected: true },
      { title: "Profile", url: "/profile", isProtected: true },
      { title: "How to Play", url: "/htp/rules" },
      {
        title: "Support",
        url: "mailto:support@playbrainz.com.com",
        external: true,
      },
    ],
    []
  );

  useEffect(() => {
    const active = navLinks.find((link) => link.url === pathname);
    if (active) setActiveLink(active.title);
  }, [pathname, navLinks]);

  const disabledClass = "opacity-50 cursor-not-allowed pointer-events-none";

  return (
    <div className="sticky top-0 w-[243px] h-full max-md:hidden px-5">
      <div className="flex flex-col justify-between h-screen">
        <div className="mt-8 px-3">
          <div className="">
            <Link href={"/"} className="relative">
              <span className="absolute bottom-0 font-basement text-[10px] text-white leading-[1.4] font-bold">
                Play Trivia, Win Crypto
              </span>
              <Image
                src={Logo}
                alt="Logo"
                width={104}
                height={52}
                objectFit="contain"
                draggable={false}
                priority={true}
              />
            </Link>
          </div>
          <div className="mt-10 ">
            <ul className="flex flex-col gap-8">
              {navLinks.map(
                (
                  { title, url, className, isProtected = false, external },
                  index
                ) => (
                  <li
                    key={index}
                    className={`hover:text-secondary font-semibold text-xl ${
                      title === activeLink ? "text-secondary" : "text-white"
                    } ${className ?? ""} ${
                      isProtected && !authenticated ? disabledClass : ""
                    }`}
                  >
                    {external ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold font-basement"
                      >
                        {title}
                      </a>
                    ) : (
                      <Link href={url} className="font-bold font-basement">
                        {title}
                      </Link>
                    )}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <PromotionTasks />
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

