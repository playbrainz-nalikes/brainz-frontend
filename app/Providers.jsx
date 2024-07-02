"use client";

import { PrivyProvider } from "@privy-io/react-auth";
// import { Arbitrum, DAppProvider, MetamaskConnector } from "@usedapp/core";
import { bsc, bscTestnet } from "viem/chains";
import WalletProvider from "./contexts/WalletContext";
import UserProvider from "./contexts/UserContext";

export default function Providers({ children }) {
  // const config = {
  //   networks: [Arbitrum],
  //   readOnlyUrls: {
  //     [Arbitrum.chainId]: "https://arb1.arbitrum.io/rpc",
  //   },

  //   connectors: {
  //     injected: new MetamaskConnector(),
  //   },
  //   refresh: 10,
  //   noMetamaskDeactivate: true,
  // };

  return (
    // <DAppProvider config={config}>
      <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
        config={{
          // Customize Privy's appearance in your app
          appearance: {
            theme: "light",
            accentColor: "#676FFF",
            logo: "",
          },
          // Create embedded wallets for users who don't have a wallet
          embeddedWallets: {
            createOnLogin: "users-without-wallets",
          },
          supportedChains: [process.env.NEXT_PUBLIC_CHAIN === "bsc" ? bsc : bscTestnet],
        }}
      >
        <WalletProvider>
          <UserProvider>{children}</UserProvider>
        </WalletProvider>
      </PrivyProvider>
    // </DAppProvider>
  );
}
