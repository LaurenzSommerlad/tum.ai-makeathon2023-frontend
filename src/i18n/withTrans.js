import React from "react";
import { I18nextProvider, withTranslation } from "react-i18next";
import i18next from "./config";

export default function withTrans(WrappedComponent) {
  withTranslation()(WrappedComponent);
  return function (props) {
    return (
      <I18nextProvider i18n={i18next}>
        <WrappedComponent {...props} language={i18next.language} />
      </I18nextProvider>
    );
  };
}
