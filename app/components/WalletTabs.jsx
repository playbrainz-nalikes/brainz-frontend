import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import {
  BtcIcon,
  DiamondIcon,
  EthIcon,
  PayementIcon,
  TicketIcon,
} from "./Svgs";
import TokenSelectDropdown from "./TokenSelectDropdown";
import { Button } from "./Button";
import { PriceAdjuster } from "./PriceAdjuster";
import DepositSelectDropdown from "./DepositSelectDropdown";
import { usePrivy } from "@privy-io/react-auth";
import QRCode from "qrcode.react";
import { ethers } from "ethers";
import { useWallet } from "../contexts/WalletContext";
import { erc20Abi } from "viem";
import { toast } from "react-toastify";

const WalletTabs = () => {
  const { walletBalances, tokens } = useWallet();
  const [depositToken, setDepositToken] = useState("USDT");
  const handleDepositTokenChange = (token) => {
    setDepositToken(token.symbol);
  };

  const { user } = usePrivy();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState(0);
  const [txHash, setTxHash] = useState("");

  const { signer } = useWallet();

  const sendTransaction = async () => {
    if (!signer) {
      toast.error("Please connect your wallet first.");
      return;
    }
    if (!recipient) {
      toast.error("Please enter a valid recipient address.");
      return;
    }

    const isValid = ethers.utils.isAddress(recipient);
    if (!isValid) {
      toast.error("Please enter a valid recipient address.");
      return;
    }

    try {
      const token_address = tokens.find(
        (token) => token.symbol === depositToken
      ).contractAddress;

      const tokenContract = new ethers.Contract(
        token_address,
        erc20Abi,
        signer
      );

      const decimals = await tokenContract.decimals();
      const tx = await tokenContract.transfer(
        recipient,
        ethers.utils.parseUnits(amount.toString(), Number(decimals))
      );

      const receipt = await tx.wait();
      setTxHash(receipt.transactionHash);
    } catch (error) {
      console.error("Error sending transaction:", error);
    }
  };

  return (
    <Tab.Group>
      <Tab.List
        className={
          "justify-center md:justify-start px-3 md:px-0 flex flex-row gap-4 md:gap-6 lg:gap-8"
        }
      >
        {/* <Tab className="w-full outline-none max-w-40 md:max-w-fit">
          {({ selected }) => (
            <div
              className={`transition  ease-in-out border border-[#132836] text-nowrap text-base lg:text-xl font-basement  bg-gradient-to-r from-[#2e414e] to-[#132836] font-bold rounded-[10px] inline-flex items-center duration-200 px-6 md:px-10 py-3  ${
                selected
                  ? "text-secondary border-[#132836]"
                  : "text-white hover:border-white"
              }`}
            >
              Transactions
            </div>
          )}
        </Tab> */}

        <Tab className={"outline-none md:ml-0 w-full max-w-40 md:max-w-fit"}>
          {({ selected }) => (
            <div
              className={`w-full justify-center transition ease-in-out border border-[#132836] text-nowrap text-base lg:text-xl font-basement bg-gradient-to-r from-[#2e414e] to-[#132836] font-bold rounded-[10px] inline-flex items-center duration-200 px-6 md:px-10 py-3   ${
                selected
                  ? "text-secondary border-[#132836]"
                  : "text-white hover:border-white"
              }`}
            >
              Wallet
            </div>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        {/* <Tab.Panel className={"bg-primary-350  rounded-[10px] pb-6"}>
          <div className="pt-6 pl-0 pr-0 mt-6 md:pl-8 md:pr-16">
            <Tab.Group>
              <Tab.List
                className={
                  "flex flex-wrap justify-center md:justify-start gap-2 md:gap-7"
                }
              >
                <Tab className={"outline-none w-full max-w-28 md:max-w-fit"}>
                  {({ selected }) => (
                    <div
                      className={`w-full px-0 justify-center md:px-8 transition  ease-in-out border border-primary-350 px4 py-2.5 text-nowrap text-base lg:text-xl font-basement bg-gradient-to-r from-[#2e414e] to-[#132836] font-bold rounded-[10px] inline-flex items-center duration-200 ${
                        selected
                          ? "text-secondary border-[#132836]"
                          : "text-white hover:border-white"
                      } `}
                    >
                      <div className="hidden md:flex items-center justify-center bg-[#265670] w-10 h-10 rounded-[80px] mr-2.5">
                        <PayementIcon />
                      </div>
                      Payments
                    </div>
                  )}
                </Tab>
                <Tab className={"outline-none w-full max-w-28 md:max-w-fit"}>
                  {({ selected }) => (
                    <div
                      className={`w-full justify-center transition px-0 md:px-8 ease-in-out border border-primary-350 px4 py-2.5 text-nowrap text-base lg:text-xl font-basement bg-gradient-to-r from-[#2e414e] to-[#132836] font-bold rounded-[10px] inline-flex items-center duration-200  ${
                        selected
                          ? "text-secondary border-[#132836]"
                          : "text-white hover:border-white"
                      }`}
                    >
                      <div className="hidden md:flex items-center justify-center bg-success/20 w-10 h-10 rounded-[80px] mr-2.5">
                        <DiamondIcon
                          width="26"
                          height="26"
                          className={"text-success"}
                        />
                      </div>
                      Diamond
                    </div>
                  )}
                </Tab>
                <Tab className={"outline-none w-full max-w-28 md:max-w-fit"}>
                  {({ selected }) => (
                    <div
                      className={`w-full justify-center transition px-0 md:px-8 ease-in-out border border-primary-350 px4 py-2.5 text-nowrap text-base lg:text-xl font-basement bg-gradient-to-r from-[#2e414e] to-[#132836] font-bold rounded-[10px] inline-flex items-center duration-200  ${
                        selected
                          ? "text-secondary border-[#132836]"
                          : "text-white hover:border-white"
                      }`}
                    >
                      <div className="hidden md:flex  items-center justify-center bg-danger/20 w-10 h-10 rounded-[80px] mr-2.5">
                        <TicketIcon
                          width="26"
                          height="26"
                          className={"text-danger-100"}
                        />
                      </div>
                      Tickets
                    </div>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel className={"px-4 md:px-0"}>
                  <div className="mt-8 mb-8 md:mt-14">
                    <h1 className="text-xl font-bold text-white font-basement">
                      Transactions
                    </h1>
                    <p className="pt-3 text-lg font-medium font-inter text-grey-550">
                      Updated every several minutes
                    </p>
                  </div>
                  <TransactionsTable />
                </Tab.Panel>
                <Tab.Panel className={"text-white px-4 md:px-0 mt-8 md:mt-14"}>
                  Content 2
                </Tab.Panel>
                <Tab.Panel className={"text-white px-4 md:px-0 mt-8 md:mt-14"}>
                  Content 3
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </Tab.Panel> */}
        {/* Wallet */}
        <Tab.Panel className={"bg-primary-350  rounded-[10px] pb-6"}>
          <div className="pt-6 pl-6 pr-6 mt-6 md:pl-8 md:pr-16">
            <Tab.Group>
              <Tab.List
                className={
                  "flex justify-center md:justify-start gap-2 md:gap-7 flex-row"
                }
              >
                <Tab
                  className={"outline-none peer w-full max-w-28 md:max-w-fit"}
                >
                  {({ selected }) => (
                    <div
                      className={`w-full justify-center md:justify-start transition  ease-in-out border border-primary-350 px-0 md:px-14 py-2.5 md:py-3 text-nowrap text-base lg:text-xl font-basement   font-bold rounded-[10px] inline-flex items-center duration-200  peer-checked:bg-blue-600
                       ${
                         selected
                           ? "bg-secondary/10 text-secondary "
                           : "bg-gradient-to-r from-[#2e414e] to-[#132836] text-white hover:border-white"
                       }`}
                    >
                      Deposit
                    </div>
                  )}
                </Tab>
                <Tab
                  className={"outline-none peer w-full max-w-28 md:max-w-fit"}
                >
                  {({ selected }) => (
                    <div
                      className={`w-full justify-center md:justify-start transition  ease-in-out border border-primary-350 px-0 md:px-11 py-2.5 md:py-3 text-nowrap text-base lg:text-xl font-basement font-bold rounded-[10px] inline-flex items-center duration-200  peer-checked:bg-blue-600
                       ${
                         selected
                           ? "bg-secondary/10 text-secondary "
                           : "bg-gradient-to-r from-[#2e414e] to-[#132836] text-white hover:border-white"
                       }`}
                    >
                      Withdraw
                    </div>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="mt-8 mb-8 md:mt-14">
                    {/* <h1 className="text-lg font-bold text-white lg:text-xl font-basement">
                      Deposit Token
                    </h1> */}
                  </div>
                  <div className="grid grid-cols-1 gap-12 mt-8 lg:mt-0 lg:grid-cols-2 lg:gap-20 ">
                    <div>
                      <div className="relative w-full ">
                        <QRCode
                          size={300}
                          value={user?.wallet?.address}
                          bgColor={"#ffffff"} // The QR Background Color
                          fgColor={"#000000"} // The Qr Color
                          level={"Q"} // Levels Can be L,M,Q,H Default is L
                          includeMargin={false}
                          renderAs={"svg"}
                          // Uncomment the Line to add Image to the QR CODE
                          // imageSettings={{
                          //   src: networks.BTC,
                          //   x: null,
                          //   y: null,
                          //   height: 40,
                          //   width: 40,
                          //   excavate: true
                          // }}
                        />
                      </div>
                      <h1 className="text-secondary font-basement font-normal lg:text-lg mt-4 max-w-[500px]">
                        Only deposit over the Binance Smart Chain network.
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-lg font-bold text-white lg:text-xl font-basement ">
                        Deposit Tokens
                      </h1>
                      <p className=" text-grey-600 font-inter font-normal lg:text-lg mt-4 max-w-[500px] ">
                        Select the token of your choice and deposit to the
                        address below on the Binance Smart Chain (BSC) Network
                      </p>
                      <div className="flex items-center gap-8 mt-8">
                        <p className="font-normal font-inter text-grey-600">
                          Select the Token:
                        </p>
                        <div className="w-full max-w-[206px]">
                          <TokenSelectDropdown
                            options={walletBalances}
                            // onChange={handleTokenChange}
                          />
                        </div>
                      </div>
                      <div className="mt-8 max-w-[420px]">
                        <label className="text-sm font-medium lg:text-lg font-inter text-grey-550 ">
                          Your Personal Deposit Address (BSC)
                        </label>
                        <input
                          type="text"
                          readOnly={true}
                          placeholder={"0xjhsduh7ehpaefklafo8y678t78ghjkbn"}
                          value={user?.wallet?.address}
                          className={`mt-2.5 text-gray-500 z-0	bg-primary w-full px-4  py-4 rounded-[20px] border border-primary-275 focus:outline-none text-white`}
                        />
                        <Button
                          variant={"outlined"}
                          className={"mt-8"}
                          onClick={() => {
                            navigator.clipboard.writeText(
                              user?.wallet?.address
                            );
                            toast.success("Address copied to Clipboard!");
                          }}
                        >
                          Copy Address
                        </Button>
                      </div>
                      {/* <p className="mt-8 text-base font-normal lg:text-lg text-grey-600 font-inter">
                        Send the amount of USDT of your choice to the following
                        Address to receive the equivalent in the account.
                      </p> */}
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="mt-8 md:mt-14">
                    <h1 className="text-lg font-bold text-white font-basement lg:text-xl">
                      Withdraw Tokens
                    </h1>
                    <div className="flex items-center gap-8 mt-8">
                      <p className="font-normal font-inter text-grey-600">
                        Select the Token:
                      </p>
                      <div className="w-full max-w-[206px]">
                        <TokenSelectDropdown
                          options={walletBalances}
                          onChange={handleDepositTokenChange}
                        />
                        <p className="text-right text-sm text-white mt-1">
                          Balance:{" "}
                          {
                            walletBalances.find(
                              (balance) => balance.symbol === depositToken
                            )?.balance
                          }
                        </p>
                      </div>
                    </div>
                    <div className="mt-8 max-w-[712px]">
                      <label className="text-base font-bold text-white lg:text-xl font-basement ">
                        Receiving Address
                      </label>
                      <input
                        type="text"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        placeholder={`Paste your ${depositToken} Wallet Address here`}
                        className={`mt-2.5 text-gray-500 z-0	bg-primary text-white w-full pl-4 pr-[88px] py-4 rounded-[20px] border border-primary-275 focus:outline-none `}
                      />
                    </div>
                    <div className="mt-7">
                      <h1 className="text-base font-bold text-white lg:text-xl font-basement ">
                        Withdrawal Amount
                      </h1>
                      <div className=" mt-2.5">
                        <PriceAdjuster
                          value={amount}
                          currency={depositToken}
                          onChange={(value) => setAmount(value)}
                        />
                      </div>
                    </div>
                    <Button
                      variant={"outlined"}
                      className={"mt-10 py-2 px-7"}
                      size="text-base lg:text-lg"
                      onClick={sendTransaction}
                    >
                      Request Withdrawal
                    </Button>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default WalletTabs;
