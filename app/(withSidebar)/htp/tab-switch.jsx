"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const TabSwitch = ({ activeId }) => {
  return (
    <div className="mx-auto mb-12 flex h-[55px] w-[85%] rounded-[10px] border-[3px] border-secondary-200 sm:h-[60px] sm:max-w-[450px] xl:mb-16">
      <Link
        href="/htp/rules"
        className={cn(
          "flex flex-1 items-center justify-center text-lg font-bold xl:text-xl",
          activeId === "rule" && "rounded-r-[10px] bg-secondary-200 text-[#000]"
        )}
      >
        Game Rules
      </Link>
      <Link
        href="/htp/how-to"
        className={cn(
          "flex flex-1 items-center justify-center text-lg font-bold xl:text-xl",
          activeId === "htp" && "rounded-l-[10px] bg-secondary-200 text-[#000]"
        )}
      >
        How To Play
      </Link>
    </div>
  )
}
