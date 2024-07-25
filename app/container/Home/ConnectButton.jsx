"use client";
import React, { useEffect } from "react";
import { usePrivy, useLogin, getAccessToken } from "@privy-io/react-auth";
import { Button } from "@/app/components/Button";
import { useSearchParams } from "next/navigation";
import { useUser } from "@/app/contexts/UserContext";

const ConnectButton = () => {
  const { ready, authenticated } = usePrivy();
  const searchParams = useSearchParams();
  // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = !ready || (ready && authenticated);

  const { login } = useLogin({
    onComplete: () => {
      localStorage.removeItem("token");
    },
  });

  useEffect(() => {
    // check if local storage has referralId and delete it
    // check if searchParams has referralId and store it in local storage
    const existingRefrralId = localStorage.getItem("referralId");
    if (existingRefrralId) {
      localStorage.removeItem("referralId");
    }
    const referralId = searchParams.get("referralId");
    if (referralId) {
      localStorage.setItem("referralId", referralId);
    }
  }, []);

  return (
    <Button
      variant={"outlined"}
      size="text-xl"
      className="disabled:opacity-70"
      disabled={disableLogin}
      onClick={login}
    >
      Connect
    </Button>
  );
};

export default ConnectButton;
