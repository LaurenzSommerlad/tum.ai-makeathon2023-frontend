import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "gatsby";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import backgroundImage from "../images/backgroundImage.jpg";
import CompanyInfo from "../components/utils/CompanyInfo";
import SEO from "../components/seo";
import { GET_TEAM } from "../graphql/team/teamGraphQL";
import Chat from "../components/utils/Chat";

export default function IndexPage() {
  const { t } = useTranslation();
  const { data } = useQuery(GET_TEAM, {
    onError: () => {
      toast.error(`${t("system.load.error")}`);
    },
  });

  return (
    <div className="bg-white">
      <SEO title={t("nav.home")} />
      {/* Hero section */}
      <div className="relative">
        {/* Background image and overlap */}
        <div
          aria-hidden="true"
          className="hidden absolute inset-0 sm:flex sm:flex-col"
        >
          <div className="flex-1 relative w-full bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={backgroundImage}
                alt="background"
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div className="w-full bg-white h-32 md:h-40 lg:h-48" />
        </div>

        <div className="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8">
          {/* Background image and overlap */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex flex-col sm:hidden"
          >
            <div className="flex-1 relative w-full bg-gray-800">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={backgroundImage}
                  alt="background banner"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="w-full bg-white h-48" />
          </div>
          <div className="relative py-32">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              {t("index.title")}
            </h1>
            <div className="mt-4 sm:mt-6">
              <Link
                to="/team"
                className="inline-block bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
              >
                {t("index.team")}
              </Link>
            </div>
          </div>
        </div>

        <section
          aria-labelledby="collection-heading"
          className="-mt-96 relative sm:mt-0"
        >
          <h2 id="collection-heading" className="sr-only">
            Collections
          </h2>
          <div className="max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-4 lg:gap-x-8">
            {data?.members?.data?.map((item) => (
              <div
                key={item.id}
                className="group relative h-96 bg-white rounded-lg shadow-xl aspect-w-3 aspect-h-5 sm:aspect-w-4 sm:aspect-h-5"
              >
                <div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                      <img
                        src={
                          item.attributes?.image?.data?.attributes?.url
                            ? process.env.GATSBY_STRAPI_URL +
                              // eslint-disable-next-line no-unsafe-optional-chaining
                              item.attributes?.image?.data?.attributes?.url
                            : null
                        }
                        alt={item.attributes?.shortDescription}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                  </div>
                  <div className="absolute inset-0 rounded-lg p-6 flex items-end">
                    <div>
                      <h3 className="mt-1 font-semibold text-white">
                        <Link to={`/member?id=${item.id}`}>
                          <span className="absolute inset-0" />
                          {item.attributes?.firstName}{" "}
                          {item?.attributes?.lastName}
                        </Link>
                      </h3>
                      <p aria-hidden="true" className="text-sm text-white">
                        {item.attributes?.shortDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section aria-labelledby="online-shop" className="relative">
        <h2 id="online-shop" className="sr-only">
          Makeathon 2023
        </h2>
        <CompanyInfo />
        <Chat />
      </section>
    </div>
  );
}
