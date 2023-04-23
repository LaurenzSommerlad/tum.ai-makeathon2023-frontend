import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { navigate } from "gatsby";
import { RESET_PASSWORD_MUTATION } from "../graphql/user/resetPasswordGraphQL";
import MyPotatoLogo from "../images/icon.png";
import CInputBox from "../components/utils/CInputBox";
import SEO from "../components/seo";

export default function ResetPassword({ location }) {
  const params = new URLSearchParams(location.search);
  const code = params.get("code");
  const [isError, setIsError] = useState(false);
  const [reset] = useMutation(RESET_PASSWORD_MUTATION, {
    errorPolicy: "all",
  });
  const { t } = useTranslation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const passwordConfirmation = e.target.cPassword.value;
    if (password && passwordConfirmation && password === passwordConfirmation) {
      reset({
        variables: {
          password,
          passwordConfirmation,
          code,
        },
      }).then((res) => {
        if (res.errors == null) {
          toast.success(`${t("system.save.success")}`);
          navigate("/login");
        } else {
          toast.error(`${t("system.save.error")}`);
        }
      });
    } else if (password !== passwordConfirmation) {
      setIsError(true);
    }
  };
  const handleInput = () => {
    setIsError(false);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <SEO title={t("reset.password.title")} />
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-20 w-20 rounded-full"
          src={MyPotatoLogo}
          alt="PackAngels"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {t("reset.password.title")}
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6" method="POST">
            <div className="sm:col-span-3">
              <CInputBox
                label="password"
                defaultValue=""
                onChange={handleInput}
                text={t("reset.password.newPasswordInp")}
                type="password"
                isRequired
              />
            </div>
            <div className="sm:col-span-3">
              <CInputBox
                label="cPassword"
                defaultValue=""
                onChange={handleInput}
                text={t("reset.password.newPasswordConfirmationInp")}
                type="password"
                isRequired
                isError={isError}
                errorMessage={t(
                  "reset.password.newPasswordConfirmationErrorMsg"
                )}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {t("reset.password.saveBtn")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
