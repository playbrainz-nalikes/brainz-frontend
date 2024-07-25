import { Sidebar } from "@/app/components/Sidebar";
import "../../../globals.css";
import { Inter } from "next/font/google";
import Header from "@/app/components/Header";
import { NotificationContext } from "@/app/contexts/notification";
import { SkeletonTheme } from "react-loading-skeleton";
import Loader from "@/app/components/Loader";

export default function RootLayout({ children }) {
  return (
    <Loader>
      <SkeletonTheme baseColor="#5a646b" highlightColor="#858f96">
        <div className="relative">
          <div className="flex p-0 mx-auto md:px-8">
            <Sidebar />
            <div className="w-full md:w-[calc(100%-243px)] md:pl-8 md:border-l-4 md:border-primary-350 ">
              <Header />
              <main>{children}</main>
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </Loader>
  );
}
