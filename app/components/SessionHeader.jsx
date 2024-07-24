import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/Brainz-logo.png";

export const SessionHeader = ({ title }) => {
  return (
    <div className="pb-[70px] relative z-30 ">
      <div className="fixed top-0 flex w-full px-4 lg:px-12 bg-primary-350 py-[17px]">
        <div className="lg:border-r-2 border-primary-375 pr-1 lg:pr-9">
          <Link href="/" className="flex items-center w-full">
            <Image
              src={logo}
              alt="Logo"
              width={74}
              height={50}
              draggable={false}
              priority={true}
            />
          </Link>
        </div>
        <div className="flex items-center justify-center w-full md:w-[calc(100%-142px)]">
          <h1 className="text-lg lg:text-xl font-bold text-white font-basement">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};
