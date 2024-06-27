"use client";

import { useEffect, useState } from "react";

type User = {
  firstName: string;
  lastName: string;
};

export const useSession = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser({
      firstName: "Shad",
      lastName: "Choudhary",
    });
  }, []);

  return {
    user,
  };
};

export default useSession;
