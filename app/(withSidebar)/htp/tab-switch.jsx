"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const TabSwitch = ({ activeId }) => {
  return (
    <div className="mb-[85px] max-w-[600px] mx-auto h-[90px] flex border-[3px] border-secondary-200 rounded-[10px]">
      <Link
        href="/htp/rules"
        className={cn(
          "text-2xl flex-1 flex items-center justify-center font-bold",
          activeId === "rule" && "rounded-r-[10px] bg-secondary-200 text-[#000]"
        )}
      >
        Game Rules
      </Link>
      <Link
        href="/htp/how-to"
        className={cn(
          "text-2xl flex-1 flex items-center justify-center font-bold",
          activeId === "htp" && "rounded-l-[10px] bg-secondary-200 text-[#000]"
        )}
      >
        How To Play
      </Link>
    </div>
  );
};
