import { getLocalAccessToken } from "@/lib/utils";
import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const accessToken = getLocalAccessToken();
        if (accessToken) {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/profile`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setUser(res.data.profile);
        }
      } catch (error) {
        console.log(error);
      }
    };

    // if (!user) {
    //   getUser();
    // }
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => {
  return useContext(UserContext);
};
