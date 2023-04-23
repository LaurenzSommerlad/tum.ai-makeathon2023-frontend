import React from "react";
import { useTranslation } from "react-i18next";
import accessDenied from "../images/accessDenied.jpg";
import SEO from "../components/seo";

export default function NotAuthorized() {
  const browser = typeof window !== "undefined" && window;
  const { t } = useTranslation();
  return (
    browser && (
      <div>
        <SEO title={t("unauthorizedTitel")} />
        <img
          alt="403 not Authorized"
          className="block mx-auto w-1/2"
          src={accessDenied}
        />
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          {t("unauthorizedText")}
        </h2>
      </div>
    )
  );
}
