import React from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/seo";

export default function FindUs() {
  const { t } = useTranslation();
  return (
    <div className="h-screen">
      <SEO title={t("nav.findus")} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2656.0973595563546!2d11.667516088501452!3d48.26249562006101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e72ecea34e265%3A0x1a8c02db0f117cfb!2sTechnical%20University%20of%20Munich%20Garching!5e0!3m2!1ses!2sde!4v1682253350454!5m2!1ses!2sde"
        width="100%"
        height="100%"
        className="border-0"
        allowFullScreen
        loading="lazy"
        title="find us"
      />
    </div>
  );
}
