import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { navigate } from "gatsby";
import { FORGOT_PASSWORD_MUTATION } from "../graphql/user/forgotPasswordGraphQL";
import MyPotatoLogo from "../images/icon.png";
import SEO from "../components/seo";

export default function ForgotPassword() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [forgot] = useMutation(FORGOT_PASSWORD_MUTATION, {
    errorPolicy: "all",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    forgot({
      variables: {
        email,
      },
    }).then((res) => {
      if (res.errors == null) {
        toast.success(
          <>
            <p className="text-base font-medium text-green-800">
              {t("toast.forgotPassword.recoverPassword")}
            </p>
            <div className="mt-2 text-sm text-green-700">
              <p>{t("toast.forgotPassword.recoverPassword.desc")}</p>
            </div>
          </>
        );
        setTimeout(() => {
          navigate("/login");
        }, 3200);
      } else {
        console.log(res.errors);
        toast.error(`${t("system.load.error")}`);
      }
    });
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <SEO title={t("login.forgot.password")} />
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-20 w-20 rounded-full"
          src={MyPotatoLogo}
          alt="PackAngels"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {t("forgot.password.title")}
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
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {t("forgot.password.button")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
