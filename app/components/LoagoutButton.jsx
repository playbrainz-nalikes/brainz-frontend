"use client";
import { usePrivy } from "@privy-io/react-auth";
import { useUser } from "../contexts/UserContext";
import { useRouter } from "next/navigation";

const LoagoutButton = ({ onLogoutClick }) => {
  const { ready, authenticated, logout } = usePrivy();
  const { setUser } = useUser();
  // Disable logout when Privy is not ready or the user is not authenticated
  const router = useRouter();
  const disableLogout = !ready || (ready && !authenticated);

  const handleLogout = async () => {
    // remove token from localstorage
    localStorage.clear();
    router.push("/");
    setUser(null);
    await logout();
    onLogoutClick();
  };
  return (
    <button
      disabled={disableLogout}
      onClick={handleLogout}
      className="block px-4 py-2 text-sm text-grey-200 hover:text-white"
    >
      Log out
    </button>
  );
};

export default LoagoutButton;
