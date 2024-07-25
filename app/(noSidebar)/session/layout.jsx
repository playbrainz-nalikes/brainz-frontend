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
