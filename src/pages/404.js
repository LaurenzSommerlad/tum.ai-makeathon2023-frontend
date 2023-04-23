import React from "react";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";
import SEO from "../components/seo";
import pageNotFound from "../images/notFoundImage.jpg";

const browser = typeof window !== "undefined" && window;
export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
    browser && (
      <div className="bg-white min-h-screen px-4 py-8 sm:px-6 sm:py-8 md:grid md:place-items-center lg:px-8">
        <SEO title={t("404")} />

        <div className="max-w-max mx-auto">
          <div className="flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Go back home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Contact support
            </Link>
          </div>
          <main className="sm:flex pt-6">
            <img
              alt="403 not Authorized"
              className="block mx-auto w-1/2"
              src={pageNotFound}
            />
          </main>
        </div>
      </div>
    )
  );
}
