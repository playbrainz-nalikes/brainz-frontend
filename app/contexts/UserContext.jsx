import TermsConditionsModal from "@/app/components/ConditionsModal";
import { apiCall, getLocalAccessToken } from "@/lib/utils";
import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleAccepToc = async () => {
    const data = await apiCall("patch", "/profile", { acceptedToc: true });
    if (data) {
      setUser((prev) => ({ ...prev, ...data.profile }));
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
      <TermsConditionsModal
        isOpen={!!user && !user.hasAcceptedToc}
        onAccept={handleAccepToc}
      />
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => {
  return useContext(UserContext);
};
