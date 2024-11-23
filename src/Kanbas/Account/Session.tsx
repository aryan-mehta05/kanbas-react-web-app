import { useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";

import * as client from "./client";
import { setCurrentUser } from "./reducer";

const Session = ({ children }: { children: any }) => {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  
  const fetchProfile = useCallback(async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      console.error(err);
    }

    setPending(false);
  }, [dispatch]);
  
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);
  
  if (!pending) {
    return children;
  };
};

export default Session;
