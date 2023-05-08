import React, { Fragment } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  HomeIcon,
  InformationCircleIcon,
  LoginIcon,
  MenuIcon,
  UserGroupIcon,
  UserAddIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";
import Icon from "../images/fullLogo.png";

export default function NavigationHeader({ open, setOpen }) {
  const { t } = useTranslation();
  const navigation = {
    pages: [
      { name: t("navigation.home"), href: "/", current: true, icon: HomeIcon },
      {
        name: t("navigation.team"),
        href: "/team",
        current: false,
        icon: UserGroupIcon,
      },
      {
        name: t("navigation.about"),
        href: "/about",
        current: false,
        icon: InformationCircleIcon,
      },
      {
        name: t("navigation.contact"),
        href: "/contact",
        current: false,
        icon: UsersIcon,
      },
    ],
  };
  return (
    <div className="bg-white">
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link
                      to={page.href}
                      className={
                        (page.current
                          ? "bg-gray-300 text-gray-900"
                          : "text-gray-600 hover:bg-gray-200 hover:text-gray-900",
                        "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md hover:text-gray-900 hover:bg-gray-50")
                      }
                    >
                      <page.icon
                        className={
                          (page.current
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "mr-3 flex-shrink-0 h-6 w-6")
                        }
                        aria-hidden="true"
                      />
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <Link
                    to="/createAccount"
                    className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md hover:text-gray-900 hover:bg-gray-50"
                  >
                    <UserAddIcon className="mr-3 flex-shrink-0 h-6 w-6" />
                    {t("index.createAccount")}
                  </Link>
                </div>
                <div className="flow-root">
                  <Link
                    to="/login"
                    className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md hover:text-gray-900 hover:bg-gray-50"
                  >
                    <LoginIcon className="mr-3 flex-shrink-0 h-6 w-6" />
                    {t("index.signin")}
                  </Link>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
      <header className="relative">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-16 flex items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex-1 lg:flex lg:items-center">
                  <Link to="/">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-36 w-auto"
                      src={Icon}
                      alt="My Potato Logo"
                    />
                  </Link>
                </div>

                <div className="hidden h-full lg:flex">
                  {/* Flyout menus */}
                  <Popover.Group className="px-4 bottom-0 inset-x-0">
                    <div className="pt-4 h-3/4 flex content-center justify-center space-x-4">
                      {navigation.pages.map((page) => (
                        <Link
                          key={page.name}
                          to={page.href}
                          className={
                            (page.current
                              ? "bg-gray-300 text-gray-900"
                              : "text-gray-600 hover:bg-gray-200 hover:text-gray-900",
                            "group w-full flex whitespace-nowrap items-center px-2 py-2 text-base font-medium rounded-md hover:text-gray-900 hover:bg-gray-50")
                          }
                        >
                          {page.name}
                        </Link>
                      ))}
                    </div>
                  </Popover.Group>
                </div>

                {/* Mobile menu */}
                <div className="flex-1 flex items-center lg:hidden">
                  <button
                    type="button"
                    className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                    onClick={() => setOpen(true)}
                  >
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Logo (lg-) */}
                <Link to="/" className="lg:hidden">
                  <span className="sr-only">Workflow</span>
                  <img
                    src={Icon}
                    alt="My Potato Logo"
                    className="h-20 w-auto"
                  />
                </Link>

                <div className="flex-1 flex items-center justify-end">
                  <Link
                    to="/login"
                    className="text-gray-600 hover:text-violet-600 px-4 py-2 text-base font-medium rounded-md"
                  >
                    {t("index.signin")}
                  </Link>
                  <div className="flex items-center">
                    <Link
                      to="/createAccount"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-violet-900 focus:ring-violet-600 truncate"
                    >
                      {t("index.createAccount")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
