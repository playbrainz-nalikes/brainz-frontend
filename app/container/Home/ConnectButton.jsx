"use client";
import React, { useEffect } from "react";
import { usePrivy, useLogin, getAccessToken } from "@privy-io/react-auth";
import { Button } from "@/app/components/Button";
import Link from "next/link";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { authenticate } from "@/lib/utils";

const ConnectButton = () => {
  const { ready, authenticated, logout } = usePrivy();
  const searchParams = useSearchParams();
  const router = useRouter();
  // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = !ready || (ready && authenticated);

  const { login } = useLogin({
    onComplete: () => {
      router.push("/dashboard");
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

  // useEffect(() => {
  //   if (authenticated) {
  //     router.push("/dashboard");
  //   }
  // }, [authenticated, router]);

  return authenticated ? (
    <>
      <Link href={"/dashboard"}>
        <Button variant={"outlined"} size="text-2xl">
          Dashboard
        </Button>
      </Link>
      {/* <Notification open={true} /> */}
    </>
  ) : (
    <Button
      variant={"outlined"}
      size="text-2xl"
      disabled={disableLogin}
      onClick={login}
    >
      Connect
    </Button>
  );
};

export default ConnectButton;
