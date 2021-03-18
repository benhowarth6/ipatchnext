import React, { useRef, useState } from 'react'
import { Transition } from '@headlessui/react'


export default function Home() {
  let [isOpen, setIsOpen] = useState(false)
  function toggle() {
    setIsOpen(v => !v)
  }

  return (
    <div>
      <div className="flex p-12 space-x-4">
        <div className="inline-block p-12">
          <span className="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
            <button
              onClick={toggle}
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
            >
              Show modal
            </button>
          </span>
        </div>

      </div>

      <Transition
        show={isOpen}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
          <Transition.Child
            className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                
                <div className="mt-3 text-center sm:mt-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              Booking Type
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Would you like to book this device in for a mail in repair or would you like to drop the device off to one of our stores?
              </p>
            </div>
          </div>
                </div>
              </div>
        <div className="py-5 px-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <button 
            href="drop-off?model=12 Pro Max&repair=screen&price=349"
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm">
            Drop off repair
          </button>
          <button 
            onClick={toggle}
            type="button" 
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm">
            Mail in repair
          </button>
        </div>
          </Transition.Child>
        </div>
      </Transition>
    </div>
  )
}