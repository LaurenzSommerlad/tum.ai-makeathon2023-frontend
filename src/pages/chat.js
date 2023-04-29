import React from "react";
import SEO from "../components/seo";
import Chat from "../components/utils/Chat";
import CompanyInfo from "../components/utils/CompanyInfo";

export default function Consultant() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center sm:px-6 lg:px-8">
      <SEO title="ChatBot" />
      <div className="-mt-28">
        <CompanyInfo />
      </div>
      <div className="-mt-24">
        <Chat />
      </div>
    </div>
  );
}
