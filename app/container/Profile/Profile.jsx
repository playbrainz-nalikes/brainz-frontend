"use client";
import Input from "@/app/components/Input";
import TermsConditionsModal from "@/app/components/TermsConditionsModal";
import WalletTabs from "@/app/components/WalletTabs";
import { useUser } from "@/app/contexts/UserContext";
import { apiCall, formatNumber } from "@/lib/utils";
import { useLinkAccount, usePrivy } from "@privy-io/react-auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user: privyUser } = usePrivy();
  const { user, setUser } = useUser();

  const { linkEmail } = useLinkAccount({
    onSuccess: async (user) => {
      const data = await apiCall("patch", "/profile", {
        email: user.email?.address,
      });
      setUser((prev) => (prev ? { ...prev, ...data.profile } : null));
    },
  });

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    if (!username) return;
    const data = await apiCall("patch", "/profile", { username });
    if (data) {
      setUser((prev) => (prev ? { ...prev, ...data.profile } : null));
      toast.success("Profile updated successfully!");
    }
  };

  useEffect(() => {
    const fetchUserRewards = async () => {
      const data = await apiCall("get", "/rewards/total");
      setUser((prev) => (prev ? { ...prev, ...data } : null));
    };
    fetchUserRewards();
  }, [setUser]);

  return (
    <div className="mb-0 md:mb-8">
      <div className="bg-primary-350 pt-9 pb-12 w-full rounded-[10px] mt-6 pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-8 md:pr-12 text-white">
        <h1 className="text-lg font-bold lg:text-xl font-basement ">
          Profile Settings
        </h1>
        <div className="mt-6 flex flex-wrap gap-12 lg:gap-[110]">
          <div className="flex-1  relative">
            <Input
              type="text"
              label="Email"
              value={privyUser?.email?.address ?? ""}
              readOnly
              placeholder={"youremail@gmail.com"}
              className={!privyUser?.email?.address && "pr-[110px]"}
              showCheckIcon
              isSaved={!!privyUser?.email?.address}
            />
            {!privyUser?.email?.address && (
              <button
                onClick={linkEmail}
                className="absolute right-0 bottom-2.5  h-max text-white py-2 px-6 rounded-md focus:outline-none"
              >
                Link
              </button>
            )}
          </div>
          <form onSubmit={handleUpdate} className="flex-1  relative">
            <Input
              name="username"
              label="Username"
              defaultValue={user.username}
              className="pr-[110px]"
              showCheckIcon
              isSaved={!!user.username}
            />
            <button
              type="submit"
              className="absolute right-0 bottom-2.5  h-max text-white py-2 px-6 rounded-md focus:outline-none"
            >
              Update
            </button>
          </form>
        </div>
        <div className="flex flex-wrap gap-12 mt-8">
          <div className="flex-1 max-w-full lg:max-w-[48%]">
            <Input
              type="text"
              label={"Wallet Address"}
              value={privyUser.wallet.address}
              readOnly
              showCopy
              placeholder={"0x1234567890abcdef1234567890abcdef12345678"}
            />
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-12 lg:gap-[110]">
          <div className="flex-1 min-w-[240px] ">
            <h1 className="mb-3 text-lg font-bold font-basement lg:text-xl">
              Refer friends and get rewarded
            </h1>
            <Link
              href="#"
              onClick={open}
              className="text-sm outline-none font-basement hover:underline hover:text-secondary hover:cursor-pointer text-grey-550"
            >
              Click to see terms of the referral program
            </Link>
            <TermsConditionsModal openModal={isOpen} closeModal={close} />
            <div className="mt-5">
              <Input
                label="Your referral link"
                readOnly
                showCopy
                value={`${process.env.NEXT_PUBLIC_WEB_URL}/referral?code=${user.referralId}`}
              />
            </div>
          </div>
          <div className="flex items-end justify-center flex-1 w-full gap-16 lg:justify-start ">
            <div>
              <p className="text-lg font-normal font-basement text-grey-550">
                Invites
              </p>
              <h1 className="text-base font-bold text-white font-basement lg:text-xl">
                {formatNumber(user.total_referred, 0)}
              </h1>
            </div>
            <div>
              <p className="text-lg font-normal font-basement text-grey-550">
                Earned
              </p>
              <h1 className="text-base font-bold font-basement text-secondary lg:text-xl">
                $ {formatNumber(user?.totalRewards?.referral || 0)}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9">
        <WalletTabs />
      </div>
    </div>
  );
};
