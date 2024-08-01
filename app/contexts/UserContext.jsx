import TermsConditionsModal from "@/app/components/ConditionsModal";
import { apiCall, getLocalAccessToken } from "@/lib/utils";
import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (!user) return;

    // check if user has accepted terms and conditions
    console.log(user);
  }, [user]);

  const handleAccepToc = async () => {
    const data = await apiCall("patch", "/profile", {
      acceptedToc: true,
    });
    if (data) {
      setUser((prev) => ({ ...prev, ...data.profile }));
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
      <TermsConditionsModal
        isOpen={showModal}
        onAccept={handleAccepToc}
        closeModal={() => setShowModal(false)}
      />
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => {
  return useContext(UserContext);
};
