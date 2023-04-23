import React, { useContext, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { ME_QUERY } from "../../graphql/user/meGraphQL";

export const UserContext = React.createContext([null, () => {}]);
export function useUserInfo() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  const [loadMe, { queryError, queryLoading, data }] = useLazyQuery(ME_QUERY);
  const [welcome, setWelcome] = useState(true);
  useEffect(() => {
    loadMe()
      .then((r) => {
        if (r.error == null && data && data?.me) {
          setUser(data?.me);
        }
      })
      .catch((error) => {
        if (error) console.log(error); // toast.error(`${t("system.load.error")}`);
      });
  }, [data, loadMe, t]);
  if (queryError) {
    toast.error(`${t("system.load.error")}`);
  }
  if (!queryLoading && user && welcome) {
    toast(`${t("welcome.message")} ${user.username}`);
    setWelcome(false);
  }
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={[user, loadMe]}>
      {" "}
      {children}
    </UserContext.Provider>
  );
}
export const UserContextConsumer = UserContext.Consumer;
