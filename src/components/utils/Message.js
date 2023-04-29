import React from "react";
import AI from "../../images/icon.png";
import User from "../../images/user.png";
import CProfileImage from "./CProfileImage";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Chat({ ai, message }) {
  return (
    <div
      className={classNames(
        ai ? "col-start-1 col-end-8" : "col-start-6 col-end-13",
        "p-3 rounded-lg"
      )}
    >
      <div
        className={classNames(
          ai ? "flex-row" : "justify-start flex-row-reverse",
          "flex items-center"
        )}
      >
        <div
          className={classNames(
            "flex items-center justify-center h-10 w-10 rounded-full flex-shrink-0",
            ai ? "bg-white" : ""
          )}
        >
          <CProfileImage
            image={ai ? AI : User}
            className={classNames(
              "rounded-full object-cover",
              ai ? "h-16 w-16" : "h-20 w-20"
            )}
          />
        </div>
        <div
          className={classNames(
            ai ? "ml-3 bg-white" : "mr-3 bg-indigo-100",
            "relative text-m py-2 px-4 shadow rounded-xl"
          )}
        >
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
}
