import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { useSendTransaction, useWallets } from "@privy-io/react-auth";
import { bsc, bscTestnet } from "viem/chains";
import { getWalletBalance, getNativeWalletBalance } from "@/lib/utils";

const WalletContext = createContext(null);

const WalletProvider = ({ children }) => {
  const { wallets } = useWallets();
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [tokens, setTokens] = useState([
    {
      symbol: "BNB",
      contractAddress: process.env.NEXT_PUBLIC_WBNB_ADDRESS,
      imageUrl: "https://playbrainz-data.s3.amazonaws.com/token-logos/bnb.png",
      isNative: true,
    },
    {
      symbol: "USDT",
      contractAddress: process.env.NEXT_PUBLIC_USDT_ADDRESS,
      imageUrl: "https://playbrainz-data.s3.amazonaws.com/token-logos/usdt.png",
    },
  ]);
  const [walletAddress, setWalletAddress] = useState({});
  const [_walletBalances, setWalletBalances] = useState([]);
  const [platformAddress, setPlatformAddress] = useState(null);
  const [isPrivyWallet, setIsPrivyWallet] = useState(false);
  const { sendTransaction: privySendTransaction } = useSendTransaction();

  useEffect(() => {
    const getProvider = async () => {
      const wallet = wallets[0];
      if (!wallet) return;
      if (wallet.connectorType === "embedded") {
        setIsPrivyWallet(true);
      } else {
        setIsPrivyWallet(false);
      }
      setWalletAddress(wallet.address);
      await wallet.switchChain(
        process.env.NEXT_PUBLIC_CHAIN === "bsc" ? bsc.id : bscTestnet.id
      );
      const provider = await wallet.getEthersProvider();
      setProvider(provider);
      const signer = provider.getSigner();
      setSigner(signer);
    };

    getProvider();
  }, [wallets]);

  useEffect(() => {
    async function fetchBSCUSDBalance(walletAddress, provider) {
      const tokenAddress = process.env.NEXT_PUBLIC_USDT_ADDRESS;
      const balance = await getWalletBalance({
        provider,
        walletAddress,
        tokenAddress,
      });
      return balance;
    }
    async function fetchNativeBalance(walletAddress, provider) {
      const balance = await getNativeWalletBalance({
        provider,
        walletAddress,
      });
      return balance;
    }
    if (provider) {
      fetchNativeBalance(walletAddress, provider).then((balance) => {
        const balanceDetails = {
          balance,
          symbol: "BNB",
          imageUrl:
            "https://playbrainz-data.s3.amazonaws.com/token-logos/bnb.png",
        };
        setWalletBalances((prev) => ({ ...prev, BNB: balanceDetails }));
      });
      fetchBSCUSDBalance(walletAddress, provider).then((balance) => {
        const balanceDetails = {
          balance,
          symbol: "USDT",
          imageUrl:
            "https://playbrainz-data.s3.amazonaws.com/token-logos/usdt.png",
        };
        setWalletBalances((prev) => ({ ...prev, USDT: balanceDetails }));
      });
    }
  }, [provider, walletAddress]);


  const walletBalances = useMemo(() => {
    return Object.values(_walletBalances);
  }, [_walletBalances]);

  const sendTransaction = useMemo(() => {
    if (isPrivyWallet) {
      return privySendTransaction;
    }
    if (signer) {
      return signer.sendTransaction.bind(signer);
    }
  }, [signer, isPrivyWallet]);

  return (
    <WalletContext.Provider
      value={{
        provider,
        signer,
        walletAddress,
        tokens,
        setTokens,
        walletBalances,
        setWalletBalances,
        isPrivyWallet,
        platformAddress,
        setPlatformAddress,
        sendTransaction,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;

export const useWallet = () => {
  return useContext(WalletContext);
};
