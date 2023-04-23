import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import React from "react";
import { HashtagIcon } from "@heroicons/react/solid";
import { Link } from "gatsby";
import { BackspaceIcon } from "@heroicons/react/outline";
import { Converter } from "showdown";
import NotFoundPage from "./404";
import SEO from "../components/seo";
import { GET_MEMBER_BY_ID } from "../graphql/team/memberByIDGraphQL";

export default function Member({ location }) {
  const showdown = new Converter();
  const { t } = useTranslation();
  const id = new URLSearchParams(location.search).get("id");
  const { data } = useQuery(GET_MEMBER_BY_ID, {
    variables: { id },
    onError: () => {
      toast.error(`${t("system.load.error")}`);
    },
  });
  const member = data?.member?.data?.attributes;
  // Handler for input box fields
  if (member) {
    return (
      <div>
        <SEO title={`${member?.firstName} ${member?.lastName}`} />
        <div className="max-w-2xl mx-auto py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* member details */}
          <div className="lg:max-w-lg lg:self-end">
            <Link to="/team">
              <button
                type="button"
                className="flex flex-row items-center text-center w-fit pr-2 h-7 bg-indigo-500 border border-transparent rounded-md text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                <BackspaceIcon className="w-5 h-5 text-white m-2" />
                <p>{t("nav.back")}</p>
              </button>
            </Link>
            <div className="mt-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {member?.firstName} {member?.lastName}
              </h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Member information
              </h2>

              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">{/* todo */}</p>

                <div className="ml-4 pl-4 border-l border-gray-300">
                  <h2 className="sr-only">{/* todo */}</h2>
                  <div className="flex items-center">
                    <p className="ml-2 text-sm text-indigo-500 hover:text-indigo-700">
                      {/* todo */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-6">
                <div
                  className="text-base text-gray-500 block"
                  dangerouslySetInnerHTML={{
                    __html: showdown.makeHtml(member?.description),
                  }}
                />
              </div>
              <div className="mt-6 flex items-center">
                <HashtagIcon
                  className="flex-shrink-0 w-5 h-5 text-indigo-500"
                  aria-hidden="true"
                />
                <p className="ml-2 text-m text-gray-500">
                  Skill 1, Skill 2, Skill 3
                </p>
              </div>
            </section>
          </div>

          {/* member image */}
          <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center mb-8">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img
                src={
                  member?.image?.data?.attributes?.url
                    ? process.env.GATSBY_STRAPI_URL +
                      // eslint-disable-next-line no-unsafe-optional-chaining
                      member?.image?.data?.attributes?.url
                    : null
                }
                alt={member?.shortDescription}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>

          {/* member form */}
          <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
            <section aria-labelledby="options-heading">
              <h2 id="options-heading" className="sr-only">
                todo
              </h2>

              <form>
                <div className="sm:flex sm:justify-between flex-col">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-buttonColor-loginButton"
                  >
                    {/* todo */}
                  </label>
                </div>
                <div className="mt-10">
                  <Link to="/contact">
                    <button
                      type="button"
                      className="w-full bg-indigo-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    >
                      {t("nav.contact")}
                    </button>
                  </Link>
                </div>
                <div className="mt-6 text-center">
                  <a
                    href="https://openai.com/safety"
                    className="group inline-flex text-base font-medium text-gray-500 hover:text-gray-700"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 455 455"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 0v455h455V0H0zm141.522 378.002H74.016V174.906h67.506v203.096zm-33.753-230.816h-.446C84.678 147.186 70 131.585 70 112.085c0-19.928 15.107-35.087 38.211-35.087 23.109 0 37.31 15.159 37.752 35.087 0 19.5-14.643 35.101-38.194 35.101zM385 378.002h-67.524V269.345c0-27.291-9.756-45.92-34.195-45.92-18.664 0-29.755 12.543-34.641 24.693-1.776 4.34-2.24 10.373-2.24 16.459v113.426h-67.537s.905-184.043 0-203.096H246.4v28.779c8.973-13.807 24.986-33.547 60.856-33.547 44.437 0 77.744 29.02 77.744 91.398v116.465z"
                        fill="currentColor"
                      />
                    </svg>
                    &nbsp;LinkedIn
                  </a>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  }
  return <NotFoundPage />;
}
