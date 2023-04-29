import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";

export default function Chat() {
  const [json, setJson] = useState({ context: [] });
  const lastMessage = useRef(null);
  const getJson = async (x) => {
    console.log("hallo");
    await fetch(process.env.API_ENDPOINT, {
      method: "POST",
      body: JSON.stringify({
        context: x?.context,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJson(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getJson({
      context: [],
    }).then((r) => console.log(json, r));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("abc");
    const data = json;
    if (data?.context) {
      console.log("bbb");
      const lastElement = data?.context[data.context.length - 1];
      console.log(lastElement);
      if (lastElement) {
        console.log("ccc");
        lastElement.response = e.target.message.value;
        data.context[data.context.length - 1] = lastElement;
        setJson(data);
        console.log(data);
        getJson(data).then(() =>
          lastMessage.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          })
        );
      }
    }
    e.target.message.value = "";
  };

  return (
    <div>
      <div className="flex flex-col flex-auto h-full p-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4 overflow-y-auto">
          <div className="flex flex-col h-full overflow-x-auto pb-4">
            <div className="flex flex-col h-full max-h-128 pb-52">
              <div className="grid grid-cols-12 gap-y-2">
                {json?.context?.map((context) => {
                  return [
                    context.question ? (
                      <Message
                        ai
                        message={context?.question}
                        key={`${context?.id}AI`}
                      />
                    ) : null,
                    context?.response ? (
                      <Message
                        message={context?.response}
                        key={`${context?.id}U`}
                      />
                    ) : null,
                  ];
                })}
                <div className="pb-52" />
                <div
                  className="col-start-1 col-end-8 sm:pt-60 md:p-6"
                  ref={lastMessage}
                />
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
            <div>
              <button
                type="button"
                className="flex items-center justify-center text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-grow ml-4">
              <div className="relative w-full">
                <input
                  type="text"
                  id="message"
                  name="message"
                  required
                  className="flex w-full border rounded-xl focus:outline-none focus:border-violet-600 pl-4 h-10"
                />
                <button
                  type="button"
                  className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="ml-4">
              <button
                type="submit"
                className="flex items-center justify-center bg-violet-500 hover:bg-violet-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
              >
                <span>Send</span>
                <span className="ml-2">
                  <svg
                    className="w-4 h-4 transform rotate-45 -mt-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
