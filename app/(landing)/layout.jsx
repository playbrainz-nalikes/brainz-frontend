import { SkeletonTheme } from "react-loading-skeleton";

export default function layout({ children }) {
  return (
    <SkeletonTheme baseColor="#5a646b" highlightColor="#858f96">
      {children}
    </SkeletonTheme>
  );
}
