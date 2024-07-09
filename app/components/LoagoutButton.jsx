"use client";
import { usePrivy } from "@privy-io/react-auth";

const LoagoutButton = () => {
  const { ready, authenticated, logout } = usePrivy();
  // Disable logout when Privy is not ready or the user is not authenticated
  const disableLogout = !ready || (ready && !authenticated);

  const handleLogout = async () => {
    // remove token from localstorage
    localStorage.clear();
    await logout();
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
