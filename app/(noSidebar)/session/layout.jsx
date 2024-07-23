import { Sidebar } from "@/app/components/Sidebar";
import "../../../../globals.css";
import { Inter } from "next/font/google";
import Header from "@/app/components/Header";
import { SessionHeader } from "@/app/components/SessionHeader";
import { NotificationContext } from "@/app/contexts/notification";
import { SkeletonTheme } from "react-loading-skeleton";
import Loader from "@/app/components/Loader";

export default function RootLayout({ children }) {
  return (
    <Loader>
      <SkeletonTheme baseColor="#5a646b" highlightColor="#858f96">
        <div>
          {/* <SessionHeader /> */}
          {children}
        </div>
      </SkeletonTheme>
    </Loader>
  );
}
