import TermsConditionsModal from "@/app/components/ConditionsModal";
import { apiCall, getLocalAccessToken } from "@/lib/utils";
import React, { createContext, useContext, useState, useEffect } from "react";
import WelcomeModal from "../components/WelcomeModal";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleAccepToc = async () => {
    const data = await apiCall("patch", "/profile", { acceptedToc: true });
    if (data) {
      setUser((prev) => ({ ...prev, ...data.profile }));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(true);
    }, 1000);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
      <TermsConditionsModal
        isOpen={!!user && !user.hasAcceptedToc}
        onAccept={handleAccepToc}
      />
      <WelcomeModal showModal={!user && showWelcome} setShowModal={setShowWelcome} />
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => {
  return useContext(UserContext);
};
