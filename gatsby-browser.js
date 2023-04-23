import React from "react";
import { isLoggedIn } from "./src/services/auth/auth";
import Login from "./src/pages/login";
import Layout from "./src/components/layout";
import { UserContextProvider } from "./src/components/providers/user";

export { wrapRootElement } from "./src/apollo/provider";
export const wrapPageElement = ({ element }) => {
  if (
    !isLoggedIn() &&
    element.props.location.pathname !== "/forgotPassword" &&
    element.props.location.pathname !== "/resetPassword" &&
    element.props.location.pathname !== "/" &&
    element.props.location.pathname !== "/articles" &&
    element.props.location.pathname !== "/article" &&
    element.props.location.pathname !== "/articles/" &&
    element.props.location.pathname !== "/article/" &&
    element.props.location.pathname !== "/team" &&
    element.props.location.pathname !== "/member" &&
    element.props.location.pathname !== "/team/" &&
    element.props.location.pathname !== "/member/" &&
    element.props.location.pathname !== "/about" &&
    element.props.location.pathname !== "/about/" &&
    element.props.location.pathname !== "/contact" &&
    element.props.location.pathname !== "/contact/" &&
    element.props.location.pathname !== "/faq" &&
    element.props.location.pathname !== "/faq/" &&
    element.props.location.pathname !== "/findus" &&
    element.props.location.pathname !== "/findus/" &&
    element.props.location.pathname !== "/legal" &&
    element.props.location.pathname !== "/legal/" &&
    element.props.location.pathname !== "/createAccount" &&
    element.props.location.pathname !== "/createAccount/" &&
    element.props.location.pathname !== "/resetPassword/"
  ) {
    return <Login />;
  }
  return (
    <UserContextProvider>
      <Layout>{element}</Layout>
    </UserContextProvider>
  );
};
export default {};
