import React from "react";

export default ({ handleChange, handleSubmit, post }) => {
  return (
    <div className="form-container">
      <form
        className="kwes-form"
        action="https://kwes.io/api/foreign/forms/N52Hhfi6oCrKkb3FaKU6"
      >
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Your Details
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  We'll use this email to send your confirmation.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        onChange={handleChange}
                        value={post.first_name}
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        rules="required|max:255"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        onChange={handleChange}
                        value={post.last_name}
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        rules="required|max:255"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email_address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        onChange={handleChange}
                        value={post.email}
                        name="email_address"
                        id="email_address"
                        autoComplete="email"
                        rules="required|max:255"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="contact_number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        onChange={handleChange}
                        value={post.number}
                        name="contact_number"
                        id="contact_number"
                        autoComplete="tel"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
