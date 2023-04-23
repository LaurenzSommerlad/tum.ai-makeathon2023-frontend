import React from "react";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import SEO from "../components/seo";
import { CREATE_CONTACT } from "../graphql/contact/createContactGraphQL";

export default function Contact() {
  const { t } = useTranslation();
  const [createContact] = useMutation(CREATE_CONTACT, {
    errorPolicy: "all",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    createContact({
      variables: {
        firstName: e.target?.firstName?.value,
        lastName: e.target?.lastName?.value,
        email: e.target?.email?.value,
        phone: e.target?.phone?.value,
        subject: e.target?.subject?.value,
        message: e.target?.message?.value,
      },
    }).then((res) => {
      if (res.errors == null) {
        toast.success(t("system.save.success"));
      } else {
        toast.error(t("system.save.error"));
      }
    });
  };
  return (
    <div className="bg-gray-50">
      <SEO title={t("nav.contact")} />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="relative bg-white shadow-xl">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative overflow-hidden py-10 px-6 bg-indigo-600 sm:px-10 xl:p-12">
              <div
                className="absolute inset-0 pointer-events-none sm:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white">
                Contact information
              </h3>
              <p className="mt-6 text-base text-indigo-50 max-w-3xl">
                Need to get in touch with the team? Feel free to leave us any
                questions concerning the challenge or our solution!
              </p>
              <dl className="mt-8 space-y-6">
                <dt className="sr-only">Postal address</dt>
                <dd className="text-base text-indigo-50">
                  <p>TUM.ai Makeathon 2023 cooler-name Team</p>
                  <p>Boltzmannstraße 15</p>
                  <p>85748 Garching bei München</p>
                </dd>
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex text-base text-indigo-50">
                  <PhoneIcon
                    className="flex-shrink-0 w-6 h-6 text-indigo-200"
                    aria-hidden="true"
                  />
                  <span className="ml-3">+49 89 289 01</span>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-indigo-50">
                  <MailIcon
                    className="flex-shrink-0 w-6 h-6 text-indigo-200"
                    aria-hidden="true"
                  />
                  <span className="ml-3">makeathon@tum-ai.com</span>
                </dd>
              </dl>
              <ul className="mt-8 flex space-x-12">
                <li>
                  <a
                    className="text-indigo-200 hover:text-indigo-100"
                    href="https://www.linkedin.com/company/tum-ai/"
                    target="_blank"
                    rel="noreferrer"
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
                  </a>
                </li>
                <li>
                  <a
                    className="text-indigo-200 hover:text-indigo-100"
                    href="https://github.com/LaurenzSommerlad/tum.ai-makeathon2023"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="text-indigo-200 hover:text-indigo-100"
                    href="https://goo.gl/maps/24BHtLJCuAZnwkDZ7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Google Maps</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      width={24}
                      height={24}
                      viewBox="0 0 50 50"
                    >
                      <path
                        fill="currentColor"
                        d="M 36 2 C 35.570313 2 35.136719 2.015625 34.71875 2.0625 C 34.605469 2.074219 34.488281 2.109375 34.375 2.125 C 34.070313 2.164063 33.765625 2.21875 33.46875 2.28125 C 33.355469 2.304688 33.269531 2.316406 33.15625 2.34375 C 32.863281 2.414063 32.566406 2.5 32.28125 2.59375 C 32.1875 2.625 32.09375 2.652344 32 2.6875 C 31.699219 2.796875 31.382813 2.929688 31.09375 3.0625 C 31.023438 3.09375 30.976563 3.125 30.90625 3.15625 C 30.597656 3.304688 30.292969 3.453125 30 3.625 C 29.953125 3.652344 29.890625 3.691406 29.84375 3.71875 C 29.53125 3.90625 29.230469 4.097656 28.9375 4.3125 C 28.914063 4.332031 28.898438 4.355469 28.875 4.375 C 28.5625 4.609375 28.257813 4.863281 27.96875 5.125 C 27.960938 5.132813 27.945313 5.117188 27.9375 5.125 C 27.636719 5.398438 27.363281 5.699219 27.09375 6 C 25.1875 8.125 24 10.925781 24 14 C 24 18.148438 26.136719 20.992188 28.40625 24 C 29.230469 25.09375 30.109375 26.246094 30.9375 27.53125 C 32.722656 29.773438 34.371094 32.410156 35.28125 35.90625 C 35.421875 36.449219 35.417969 36.875 35.65625 37.0625 C 35.765625 37.085938 35.871094 37.09375 36 37.09375 C 36.128906 37.09375 36.234375 37.082031 36.34375 37.0625 C 36.582031 36.875 36.578125 36.449219 36.71875 35.90625 C 37.628906 32.410156 39.277344 29.773438 41.0625 27.53125 C 41.890625 26.246094 42.769531 25.089844 43.59375 24 C 43.734375 23.816406 43.863281 23.621094 44 23.4375 C 44.214844 23.152344 44.417969 22.878906 44.625 22.59375 C 44.722656 22.460938 44.808594 22.320313 44.90625 22.1875 C 45.0625 21.964844 45.222656 21.753906 45.375 21.53125 C 45.484375 21.367188 45.582031 21.195313 45.6875 21.03125 C 45.820313 20.828125 45.972656 20.644531 46.09375 20.4375 C 46.203125 20.253906 46.304688 20.0625 46.40625 19.875 C 46.515625 19.679688 46.621094 19.480469 46.71875 19.28125 C 46.820313 19.078125 46.910156 18.863281 47 18.65625 C 47.085938 18.464844 47.175781 18.257813 47.25 18.0625 C 47.339844 17.832031 47.394531 17.613281 47.46875 17.375 C 47.527344 17.1875 47.605469 17.003906 47.65625 16.8125 C 47.726563 16.53125 47.761719 16.230469 47.8125 15.9375 C 47.839844 15.773438 47.886719 15.636719 47.90625 15.46875 C 47.964844 15 48 14.503906 48 14 C 48 7.382813 42.617188 2 36 2 Z M 6.34375 6 C 3.953125 6 2 7.953125 2 10.34375 L 2 43.65625 C 2 43.882813 2.027344 44.09375 2.0625 44.3125 C 2.382813 46.386719 4.179688 48 6.34375 48 L 39.65625 48 C 39.882813 48 40.09375 47.972656 40.3125 47.9375 C 42.277344 47.632813 43.8125 46.011719 43.96875 44 L 44 44 L 44 26.78125 C 43.582031 27.355469 43.160156 27.957031 42.75 28.59375 L 42.625 28.78125 C 40.597656 31.328125 39.367188 33.675781 38.65625 36.40625 C 38.625 36.523438 38.613281 36.617188 38.59375 36.71875 C 38.515625 37.125 38.371094 37.773438 37.90625 38.3125 L 42 42.40625 L 42 43.65625 C 42 44.941406 40.941406 46 39.65625 46 L 38.40625 46 L 24.34375 31.96875 L 27.9375 28.3125 L 31.5 31.90625 C 30.914063 30.871094 30.21875 29.839844 29.375 28.78125 L 29.25 28.59375 C 28.667969 27.691406 28.078125 26.902344 27.5 26.125 L 7.59375 46 L 6.34375 46 C 5.058594 46 4 44.941406 4 43.65625 L 4 42.40625 L 24.46875 21.90625 C 23.058594 19.671875 22 17.183594 22 14 C 22 11.027344 22.941406 8.269531 24.53125 6 Z M 12.125 10 C 13.710938 10 15.132813 10.605469 16.21875 11.59375 L 14.5 13.3125 C 13.855469 12.761719 13.039063 12.4375 12.125 12.4375 C 10.089844 12.4375 8.4375 14.089844 8.4375 16.125 C 8.4375 18.160156 10.089844 19.8125 12.125 19.8125 C 13.835938 19.8125 15.003906 18.789063 15.4375 17.375 L 12.125 17.375 L 12.125 15.03125 L 17.875 15.03125 C 18.378906 17.414063 17.46875 22.21875 12.125 22.21875 C 8.75 22.21875 6 19.5 6 16.125 C 6 12.75 8.75 10 12.125 10 Z M 36 11 C 37.65625 11 39 12.34375 39 14 C 39 15.65625 37.65625 17 36 17 C 34.34375 17 33 15.65625 33 14 C 33 12.34375 34.34375 11 36 11 Z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact form */}
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-gray-900">
                Send us a message
              </h3>
              <form
                onSubmit={handleSubmit}
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      autoComplete="given-name"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                      autoComplete="family-name"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Phone
                    </label>
                    <span id="phone-optional" className="text-sm text-gray-500">
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Message
                    </label>
                    <span id="message-max" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                      aria-describedby="message-max"
                      defaultValue=""
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
