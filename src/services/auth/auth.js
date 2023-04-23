import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export const isBrowser = () => typeof window !== "undefined";
export const getUser = () => {
  if (isBrowser() && Cookies.get("_PA")) {
    const rawUser = Cookies.get("_PA");
    return jwtDecode(rawUser);
  }
  return {};
};
export const getJWT = () => {
  if (isBrowser() && Cookies.get("_PA")) {
    if (Cookies.get("_PA") !== undefined) {
      return Cookies.get("_PA");
    }
  }
  return "";
};
export const isLoggedIn = () => {
  const jwt = getJWT();
  if (jwt !== "") {
    const userJWT = jwtDecode(jwt);
    return !!userJWT.exp;
  }
  return false;
};
export const logout = () => {
  Cookies.remove("_PA");
};
