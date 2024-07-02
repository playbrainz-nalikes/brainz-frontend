import Link from "next/link";
import { CrossIcon } from "./Svgs";
import { formatNumber } from "@/lib/utils";

const bgColors = {
  success: "bg-success/25",
  danger: "bg-danger-100/25",
};

const bgIconColors = {
  success: "bg-success",
  danger: "bg-danger-100",
};
const Ticket = ({
  mainIcon: MainIcon,
  number,
  label,
  bgColor = "danger",
  href = "/",
}) => {
  const backgroundColor = bgColors[bgColor];
  const IconBackgroundColor = bgIconColors[bgColor];

  return (
    <Link href={href} className="w-fit	 flex gap-2.5 group">
      <div
        className={`transition duration-100 ease  relative flex items-center ${backgroundColor} w-10 h-10 rounded-full justify-center ${
          bgColor === "danger"
            ? "group-hover:bg-danger-100"
            : "group-hover:bg-success"
        }  `}
      >
        <MainIcon
          className={` ${
            bgColor === "danger" && "text-danger-100 group-hover:text-dark"
          } ${
            bgColor === "success" && "text-[#58FF69] group-hover:text-dark"
          } `}
        />
        <div
          className={`flex items-center ${IconBackgroundColor} p-1 rounded w-4 h-4 absolute -bottom-2 right-1 cursor-pointer`}
        >
          <CrossIcon />
        </div>
      </div>
      <div className="text-white">
        <h1 className="text-base font-bold font-basement">
          {formatNumber(number, true)}
        </h1>
        <p className="text-sm font-basement">{label}</p>
      </div>
    </Link>
  );
};

export default Ticket;
