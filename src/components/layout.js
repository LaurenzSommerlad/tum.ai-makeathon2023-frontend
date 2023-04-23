import React, { useState } from "react";
import withTrans from "../i18n/withTrans";
import { getUser } from "../services/auth/auth";
import NotAuthorized from "../pages/notAuthorized";
import { useUserInfo } from "./providers/user";
import NavigationHeader from "./navigation-header";
import Footer from "./footer";

function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const [user] = useUserInfo();

  return user &&
    getUser().id !== undefined &&
    ["Client"].includes(user.role?.name) &&
    (children.props?.location?.pathname === "/accounts/" ||
      children.props?.location?.pathname === "/accounts" ||
      children.props?.location?.pathname === "/deliveryNotes" ||
      children.props?.location?.pathname === "/clients" ||
      children.props?.location?.pathname === "/deliveryNotes/" ||
      children.props?.location?.pathname === "/clients/") ? (
    <NotAuthorized />
  ) : (
    <div>
      <NavigationHeader open={open} setOpen={setOpen} />
      <main className="flex-1 relative overflow-y-auto focus:outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
}
export default withTrans(Layout);
