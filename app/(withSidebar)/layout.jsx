import { Sidebar } from "@/app/components/Sidebar";
import Header from "@/app/components/Header";
import { SkeletonTheme } from "react-loading-skeleton";

export default function RootLayout({ children }) {
  return (
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
  );
}
