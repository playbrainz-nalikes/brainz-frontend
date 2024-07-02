"use client";

import { TicketCard } from "@/app/components/TicketCard";
import { gameData, ticketData } from "./data";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { apiCall } from "@/lib/utils";
import { DiamondIcon, TicketIcon } from "@/app/components/Svgs";

export const Shop = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ticketPacks, setTicketPacks] = useState([]);
  const [diamondPacks, setDiamondPacks] = useState([]);
  const [bothPacks, setBothPacks] = useState([]);

  useEffect(() => {
    const getShopItems = async () => {
      const data = await apiCall("get", "/shop");
      const packs = data.packs;
      const ticketPacks = packs.filter((pack) => pack.type === "ticket");
      const diamondPacks = packs.filter((pack) => pack.type === "diamond");
      const bothPacks = packs.filter((pack) => pack.type === "both");
      setBothPacks(bothPacks);
      setTicketPacks(ticketPacks);
      setDiamondPacks(diamondPacks);
      setIsLoading(false);
    };

    getShopItems();
  }, []);

  return (
    <div className="text-white">
      <div className="bg-primary-350 py-8 md:pb-20 w-full rounded-[10px] mt-6 px-6 md:px-13">
        <h1 className="text-xl font-bold font-basement">
          Buy Tickets to enter a Session
        </h1>
        <div className=" grid flex-wrap gap-6 mt-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-14">
          {isLoading
            ? [...Array(ticketData.length)].map((_, index) => (
                <Skeleton key={index} height={196} borderRadius={"1.5rem"} />
              ))
            : ticketPacks.map((ticket, index) => (
                <TicketCard
                  key={index}
                  {...ticket}
                />
              ))}
        </div>
      </div>
      <div className="bg-primary-350 px-6 md:px-13 py-8 w-full rounded-[10px] mt-6 mb-0 md:mb-5">
        <h1 className="text-xl font-bold font-basement">
          Buy Diamonds to unlock in-game perks
        </h1>
        <div className=" grid flex-wrap gap-6 mt-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-14">
          {isLoading
            ? [...Array(gameData.length)].map((_, index) => (
                <Skeleton key={index} height={196} borderRadius={"1.5rem"} />
              ))
            : diamondPacks.map((diamond, index) => (
                <TicketCard
                  key={index}
                  {...diamond}
                />
              ))}
        </div>
      </div>
      <div className="bg-primary-350 px-6 md:px-13 py-8 w-full rounded-[10px] mt-6 mb-0 md:mb-5">
        <h1 className="text-xl font-bold font-basement">
          Exclusive Packs
        </h1>
        <div className=" grid flex-wrap gap-6 mt-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-14">
          {isLoading
            ? [...Array(gameData.length)].map((_, index) => (
                <Skeleton key={index} height={196} borderRadius={"1.5rem"} />
              ))
            : bothPacks.map((diamond, index) => (
                <TicketCard
                  key={index}
                  {...diamond}
                />
              ))}
        </div>
      </div>
    </div>
  );
};
