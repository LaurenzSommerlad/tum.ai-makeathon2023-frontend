import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link, navigate } from "gatsby";
import { useMutation } from "@apollo/client";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import Logo from "../images/icon.jpg";
import { LOGIN_MUTATION } from "../graphql/user/loginGraphQL";
import { useUserInfo } from "../components/providers/user";
import SEO from "../components/seo";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { loading: mutationLoading, error: mutationError }] =
    useMutation(LOGIN_MUTATION, { errorPolicy: "all" });

  const { t } = useTranslation();

  const [, loadUserInfo] = useUserInfo();

  const handleSubmit = async (event) => {
    event.preventDefault();
    login({
      variables: {
        email,
        password,
      },
    }).then((res) => {
      if (res?.data?.login?.jwt !== undefined) {
        Cookies.set("_PA", res.data.login.jwt, {
          expires: 1,
          secure: true,
          sameSite: "strict",
        });
        loadUserInfo();
        navigate("/offers");
      }
    });
  };
  if (mutationLoading) {
    toast.info(`${t("toast.loading")}`);
  }
  useEffect(() => {
    if (mutationError !== undefined) {
      toast.error(`${t("toast.wrongCredentials")}`);
    }
  }, [mutationError, t]);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <SEO title={t("index.signin")} />
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-20 w-auto rounded-full"
          src={Logo}
          alt="KJFLogo"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {t("login.title")}
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                {t("input.email")}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                {t("input.password")}
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  {t("login.remember.me")}
                </label>
              </div>
              <div className="text-sm">
                <Link
                  to="/forgotPassword"
                  className="font-medium text-red-600 hover:text-red-500"
                >
                  {t("login.forgot.password")}
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center login py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                {t("login.button")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
