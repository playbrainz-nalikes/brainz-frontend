"use client";
import { apiCall, authenticate, getWalletBalance } from "@/lib/utils";
import { getAccessToken, usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from "../contexts/UserContext";
import { useWallet } from "../contexts/WalletContext";

const Loader = ({ children }) => {
  const { ready, authenticated } = usePrivy();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const { user, setUser } = useUser();
  const {
    walletAddress,
    tokens,
    setTokens,
    walletBalances,
    setWalletBalances,
    provider,
    platformAddress,
    setPlatformAddress,
  } = useWallet();

  useEffect(() => {
    const checkAuthentication = async () => {
      if (ready && authenticated) {
        let token = localStorage.getItem("token");
        const expiresAt = localStorage.getItem("expiresAt");
        const expired = new Date(expiresAt) < new Date();

        if (!token || expired) {
          const data = await authenticate();
          if (!data) {
            logout();
            return;
          }
          token = data.token;
        }

        if (!user) {
          const userData = await apiCall("get", "/profile");
          if (!userData) {
            logout();
            return;
          }
          setUser(userData.profile);
          setLoggedIn(true);
        }
      } else if (ready && !authenticated) {
        router.push("/");
        localStorage.removeItem("token");
        localStorage.removeItem("expiresAt");
      }

      setLoading(false);
    };

    if (ready) {
      checkAuthentication();
    }
  }, [ready, authenticated, router]);

  useEffect(() => {
    const getBalances = async () => {
      const tokens = await apiCall("get", "/token");
      if (tokens) {
        setTokens((prev) => [...prev, ...tokens.items]);
        if (provider && walletBalances.length <= 1) {
          tokens.items.forEach(async (token) => {
            const balance = await getWalletBalance({
              provider,
              walletAddress,
              tokenAddress: token.contractAddress,
            });
            const balanceDetails = {
              balance,
              symbol: token.symbol,
              imageUrl: token.imageUrl,
            };
            setWalletBalances((prev) => [...prev, balanceDetails]);
          });
        }
      }
    };

    const getPlatformAddress = async () => {
      const data = await apiCall("get", "/platformWallet");
      if (data) {
        setPlatformAddress(data.platformWallet);
      }
    };
    if (loggedIn) {
      getBalances();
    }

    if (loggedIn && !platformAddress) {
      getPlatformAddress();
    }
  }, [loggedIn, provider]);

  if (!ready || loading) {
    return (
      <div className="fixed top-0 right-0 flex items-center justify-center w-full h-screen gap-4 text-white bg-primary z-[1000000]">
        <div className="z-50 border-4 rounded-full w-10 h-10 animate-spin border-secondary border-s-secondary/20 " />
        Loading
      </div>
    );
  }

  if (ready && authenticated && loggedIn && !loading) {
    return children;
  }

  return null;
};

export default Loader;
