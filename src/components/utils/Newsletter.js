import React from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { CREATE_NEWSLETTER } from "../../graphql/newsletter/createNewsletterGraphQL";

export default function Newsletter() {
  const { t } = useTranslation();
  const [createNewsletter] = useMutation(CREATE_NEWSLETTER, {
    errorPolicy: "all",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewsletter({ variables: { email: e.target?.email?.value } }).then(
      (res) => {
        if (res.errors == null) {
          toast.success(t("system.save.success"));
        } else {
          toast.error(t("system.save.error"));
        }
      }
    );
  };
  return (
    <div className="mt-12 md:mt-0 md:row-start-2 md:col-start-3 md:col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4">
      <h3 className="text-sm font-medium text-gray-900">
        Sign up for our newsletter
      </h3>
      <p className="mt-6 text-sm text-gray-500">
        The latest projects and competitions, sent to your inbox monthly.
      </p>
      <form className="mt-2 flex sm:max-w-md" onSubmit={handleSubmit}>
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="text"
          autoComplete="email"
          required
          className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
        <div className="ml-4 flex-shrink-0">
          <button
            type="submit"
            className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
