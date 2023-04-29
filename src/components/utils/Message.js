import React from "react";

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
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
          {ai ? "A" : "U"}
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
