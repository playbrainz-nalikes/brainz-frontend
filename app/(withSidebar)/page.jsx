"use client";
import Dashboard from "@/app/container/Dashboard";
import Loader from "../components/Loader";
import { usePrivy } from "@privy-io/react-auth";

export default function Page() {
  const { authenticated } = usePrivy();

  if (authenticated) {
    return (
      <Loader>
        <Dashboard />
      </Loader>
    );
  }

  return (
    <div>
      <Dashboard />
    </div>
  );
}
