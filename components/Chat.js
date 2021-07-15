/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import Script from "next/script";

export default function Chat() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Script src="https://static.cdn-apple.com/businesschat/start-chat-button/2/index.js" 
      strategy="afterInteractive"/>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="fixed z-50 pb-5 md:pb-10 inset-x-0 bottom-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div
                    className="apple-business-chat-banner-container"
                    data-apple-business-id="0fcea5c2-1c93-46a2-bf0c-5d896afb62f7"
                    data-apple-business-phone="+4401132469388"
                    data-apple-business-intent-id="Customer Enquiry"
                    data-apple-business-group-id="Technician"
                    data-apple-banner-cta="Got questions?"
                    data-apple-banner-context="Chat with a technician now."
                    data-apple-banner-scale="1"
                    data-apple-banner-background-color="rgb(255, 255, 255)"
                    data-apple-banner-text-color="rgb(0, 0, 0)"
                    data-apple-banner-icon-background-color="rgb(239, 239, 244)"
                    data-apple-banner-icon-color="rgba(0, 122, 255)"
                    data-apple-banner-orientation="right"
                  ></div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}

