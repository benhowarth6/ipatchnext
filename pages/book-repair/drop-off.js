import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Listbox, Popover, RadioGroup, Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  CheckIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  SelectorIcon,
} from "@heroicons/react/solid";
import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays";
import Axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import repairs from "../../data/all-repairs.json";

const steps = [
  { name: "Booking Type", status: "complete" },
  { name: "Booking Information", status: "current" },
  { name: "Confirmation", status: "upcoming" },
];

const times = [
  { id: 1, name: "09:30" },
  { id: 2, name: "10:00" },
  { id: 3, name: "10:30" },
  { id: 4, name: "11:00" },
  { id: 5, name: "11:30" },
  { id: 6, name: "12:00" },
  { id: 7, name: "12:30" },
  { id: 8, name: "13:00" },
  { id: 9, name: "13:30" },
  { id: 10, name: "14:00" },
  { id: 11, name: "14:30" },
  { id: 12, name: "15:00" },
  { id: 13, name: "15:30" },
  { id: 14, name: "16:00" },
  { id: 15, name: "16:30" },
];

const BookingSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Your first name is too short!")
    .max(50, "Your first name is too Long!")
    .required("Your first name is required."),
  lastName: Yup.string()
    .min(2, "Your last name is too short!")
    .max(50, "Your last name is too Long!")
    .required("Your last name is required."),
  email: Yup.string()
    .email("Invalid email")
    .required("Your email address is required."),
  phone: Yup.string()
    .min(5, "Your phone number is too short!")
    .max(13, "Your phone number is too long!!"),
  terms: Yup.boolean().oneOf(
    [true],
    "You must agree to the repair terms and conditions to continue."
  ),
  appointmentDate: Yup.string().required("An appointment date is required."),
});

export default function DropOff() {
  const key = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;

  const router = useRouter();
  const { id } = router.query;

  const [selected, setSelected] = useState(times[0]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [startDate, setStartDate] = useState(new Date());
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 1 && day !== 0;
  };

  const selectedRepair = repairs.filter((repairs) => repairs.id === `${id}`);

  return (
    <div>
      <Head>
        <title>Drop off repair booking | iPatch</title>
        <meta
          name="description"
          content="Book a device repair with us for a drop off repair."
          key="desc"
        />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <div className="bg-gray-50">
        {/* Mobile menu */}

        <div className="bg-white">
          {/* Background color split screen for large screens */}
          <div
            className="hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white"
            aria-hidden="true"
          />
          <div
            className="hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-gray-50"
            aria-hidden="true"
          />

          <header className="relative bg-white border-b border-gray-200 text-sm font-medium text-gray-700">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-end sm:justify-center">
                <Link href="/">
                  <a className="absolute left-0 top-1/2 -mt-2">
                    <span className="sr-only">iPatch</span>
                    <img src="/logo.svg" alt="" className="h-5 w-auto" />
                  </a>
                </Link>
                <nav aria-label="Progress" className="hidden sm:block">
                  <ol role="list" className="flex space-x-4">
                    {steps.map((step, stepIdx) => (
                      <li key={step.name} className="flex items-center">
                        {step.status === "current" ? (
                          <Link href={`drop-off?id=${id}`}>
                            <a aria-current="page" className="text-blue-600">
                              {step.name}
                            </a>
                          </Link>
                        ) : step.status === "complete" ? (
                          <Link href={`booking-type?id=${id}`}>
                            {step.name}
                          </Link>
                        ) : (
                          <Link href={`drop-off?id=${id}`}>{step.name}</Link>
                        )}

                        {stepIdx !== steps.length - 1 ? (
                          <ChevronRightIcon
                            className="w-5 h-5 text-gray-300 ml-4"
                            aria-hidden="true"
                          />
                        ) : null}
                      </li>
                    ))}
                  </ol>
                </nav>
                <p className="sm:hidden">Step 2 of 3</p>
              </div>
            </div>
          </header>

          <main className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 xl:gap-x-48">
            <h1 className="sr-only">Order information</h1>

            <section
              aria-labelledby="summary-heading"
              className="bg-gray-50 pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2"
            >
              <div className="max-w-lg mx-auto lg:max-w-none">
                {repairs
                  .filter((repairs) => repairs.id == `${id}`)
                  .map((filteredRepairs) => {
                    const { id, name, price, model, image } = filteredRepairs;
                    return (
                      <div key={id}>
                        <h2
                          id="summary-heading"
                          className="text-lg font-medium text-gray-900"
                        >
                          Booking summary
                        </h2>

                        <ul
                          role="list"
                          className="text-sm font-medium text-gray-900 divide-y divide-gray-200"
                        >
                          <li className="flex items-start py-6 space-x-4">
                            <img
                              src={image}
                              alt={""}
                              className="flex-none w-24 h-24 rounded-md object-center object-cover"
                            />
                            <div className="flex-auto space-y-1">
                              <h3>{model}</h3>
                              <p className="text-gray-500">{name}</p>
                              <p className="text-gray-500">£{price}</p>
                            </div>
                            <p className="flex-none text-base font-medium">
                              {""}
                            </p>
                          </li>
                        </ul>

                        <dl className="hidden text-sm font-medium text-gray-900 space-y-6 border-t border-gray-200 py-6 lg:block">
                          <div className="flex items-center justify-between">
                            <dt className="text-gray-600">Location</dt>
                            <dd>Trinity Leeds</dd>
                          </div>
                        </dl>

                        <dl className="hidden text-sm font-medium text-gray-900 space-y-6 border-t border-gray-200 pt-6 lg:block">
                          <div className="flex items-center justify-between">
                            <dt className="text-gray-600">Subtotal</dt>
                            <dd>£{((parseInt(price) / 1.2) * 1).toFixed(2)}</dd>
                          </div>

                          <div className="flex items-center justify-between">
                            <dt className="text-gray-600">VAT</dt>
                            <dd>
                              £{((parseInt(price) / 1.2) * 0.2).toFixed(2)}
                            </dd>
                          </div>

                          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                            <dt className="text-base">Total</dt>
                            <dd className="text-base">
                              £{parseInt(price).toFixed(2)}
                            </dd>
                          </div>
                        </dl>

                        <Popover className="fixed bottom-0 z-50 inset-x-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
                          <div className="relative z-10 bg-white border-t border-gray-200 px-4 sm:px-6">
                            <div className="max-w-lg mx-auto">
                              <Popover.Button className="w-full flex items-center py-6 font-medium focus:outline-none">
                                <span className="text-base mr-auto">Total</span>
                                <span className="text-base mr-2">£{price}</span>
                                <ChevronUpIcon
                                  className="w-5 h-5 text-gray-500"
                                  aria-hidden="true"
                                />
                              </Popover.Button>
                            </div>
                          </div>

                          <Transition.Root as={Fragment}>
                            <div>
                              <Transition.Child
                                as={Fragment}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Popover.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                              </Transition.Child>

                              <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-y-full"
                                enterTo="translate-y-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-y-0"
                                leaveTo="translate-y-full"
                              >
                                <Popover.Panel className="relative bg-white px-4 py-6 sm:px-6">
                                  <dl className="max-w-lg mx-auto space-y-6">
                                    <div className="flex items-center justify-between">
                                      <dt className="text-gray-600">
                                        Subtotal
                                      </dt>
                                      <dd>
                                        £
                                        {((parseInt(price) / 1.2) * 1).toFixed(
                                          2
                                        )}
                                      </dd>
                                    </div>

                                    <div className="flex items-center justify-between">
                                      <dt className="text-gray-600">VAT</dt>
                                      <dd>
                                        £
                                        {(
                                          (parseInt(price) / 1.2) *
                                          0.2
                                        ).toFixed(2)}
                                      </dd>
                                    </div>
                                  </dl>
                                </Popover.Panel>
                              </Transition.Child>
                            </div>
                          </Transition.Root>
                        </Popover>
                      </div>
                    );
                  })}
              </div>
            </section>
            <Formik
              enableReinitialize
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                appointmentLocation: "Trinity Leeds",
                appointmentDate: "",
                appointmentTime: "09:30",
                deviceModel: "",
                deviceRepair: "",
                repairCost: "",
                terms: false,
              }}
              validationSchema={BookingSchema}
              onSubmit={async (values) => {
                const data = {
                  records: [
                    {
                      fields: {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.email,
                        phone: values.phone,
                        appointmentLocation: values.appointmentLocation,
                        appointmentDate: values.appointmentDate,
                        appointmentTime: values.appointmentTime,
                        deviceModel: values.deviceModel,
                        deviceRepair: values.deviceRepair,
                        repairCost: values.repairCost,
                      },
                    },
                  ],
                };

                const axiosConfig = {
                  headers: {
                    Authorization: `Bearer ${key}`,
                    "Content-type": "application/json",
                  },
                };

                await Axios.post(
                  "https://api.airtable.com/v0/apptENX9O16U7Ynmi/Drop%20Off%20Repairs",
                  data,
                  axiosConfig
                ).then((response) => {
                  router.push({
                    pathname: "drop-off-confirmation",
                    query: {
                      id: id,
                      location: values.appointmentLocation,
                      time: values.appointmentTime,
                      date: values.appointmentDate.toLocaleDateString(),
                    },
                  });
                });
              }}
            >
              {({ errors, values, touched, field, setFieldValue }) => (
                <Form className="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1">
                  <div className="max-w-lg mx-auto lg:max-w-none">
                    <section aria-labelledby="contact-info-heading">
                      <h2
                        id="contact-info-heading"
                        className="text-lg font-medium text-gray-900"
                      >
                        Contact information
                      </h2>

                      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                        <div>
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First name
                          </label>
                          <div className="mt-1">
                            <Field
                              type="text"
                              id="firstName"
                              name="firstName"
                              autoComplete="given-name"
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.firstName && touched.firstName ? (
                              <p
                                className="mt-2 text-sm text-red-600"
                                id="firstName-error"
                              >
                                {errors.firstName}
                              </p>
                            ) : null}
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last name
                          </label>
                          <div className="mt-1">
                            <Field
                              type="text"
                              id="lastName"
                              name="lastName"
                              autoComplete="family-name"
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.lastName && touched.lastName ? (
                              <p
                                className="mt-2 text-sm text-red-600"
                                id="lastName-error"
                              >
                                {errors.lastName}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <div className="mt-1">
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                          {errors.email && touched.email ? (
                            <p
                              className="mt-2 text-sm text-red-600"
                              id="email-error"
                            >
                              {errors.email}
                            </p>
                          ) : null}
                        </div>
                      </div>

                      <div className="mt-6">
                        <label
                          htmlFor="contact-number"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Contact Number
                        </label>
                        <div className="mt-1">
                          <Field
                            type="tel"
                            id="phone"
                            name="phone"
                            autoComplete="tel"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                          {errors.phone && touched.phone ? (
                            <p
                              className="mt-2 text-sm text-red-600"
                              id="phone-error"
                            >
                              {errors.phone}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </section>

                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Appointment date
                        </label>
                        <div className="mt-1">
                          <div className="relative">
                            <DatePicker
                              dateFormat="dd/MM/yyyy"
                              selected={values.appointmentDate}
                              onChange={(e) =>
                                setFieldValue("appointmentDate", e)
                              }
                              selectsStart
                              name="appointment-date"
                              calendarStartDay={1}
                              minDate={subDays(new Date(), 0)}
                              onFocus={(e) => e.target.blur()}
                              startDate={startDate}
                              nextMonthButtonLabel=">"
                              previousMonthButtonLabel="<"
                            />
                            {errors.appointmentDate &&
                            touched.appointmentDate ? (
                              <p
                                className="mt-2 text-sm text-red-600"
                                id="firstName-error"
                              >
                                {errors.appointmentDate}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <div>
                        <Listbox
                          value={values.appointmentTime}
                          onChange={(e) => setFieldValue("appointmentTime", e)}
                        >
                          {({ open }) => (
                            <>
                              <Listbox.Label className="block text-sm font-medium text-gray-700">
                                Appointment time
                              </Listbox.Label>
                              <div className="mt-1 relative">
                                <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                  <span className="block truncate">
                                    {values.appointmentTime}
                                  </span>
                                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <SelectorIcon
                                      className="h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Listbox.Button>

                                <Transition
                                  show={open}
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options className="absolute z-50 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                    {times.map((time) => (
                                      <Listbox.Option
                                        key={time.id}
                                        className={({ active }) =>
                                          classNames(
                                            active
                                              ? "text-white bg-blue-600"
                                              : "text-gray-900",
                                            "cursor-default select-none relative py-2 pl-8 pr-4"
                                          )
                                        }
                                        value={time.name}
                                        onChange={setSelected}
                                      >
                                        {({ selected, active }) => (
                                          <>
                                            <span
                                              className={classNames(
                                                selected
                                                  ? "font-semibold"
                                                  : "font-normal",
                                                "block truncate"
                                              )}
                                            >
                                              {time.name}
                                            </span>

                                            {selected ? (
                                              <span
                                                className={classNames(
                                                  active
                                                    ? "text-white"
                                                    : "text-blue-600",
                                                  "absolute inset-y-0 left-0 flex items-center pl-1.5"
                                                )}
                                              >
                                                <CheckIcon
                                                  className="h-5 w-5"
                                                  aria-hidden="true"
                                                />
                                              </span>
                                            ) : null}
                                          </>
                                        )}
                                      </Listbox.Option>
                                    ))}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </>
                          )}
                        </Listbox>
                      </div>
                    </div>
                    <div className="mt-10 border-t border-gray-200 pt-10">
                      <h2
                        id="contact-info-heading"
                        className="text-lg font-medium text-gray-900"
                      >
                        Terms
                      </h2>
                      <div className="mt-6 flex items-center">
                        <Field
                          type="checkbox"
                          id="terms"
                          name="terms"
                          className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                        />
                        <div className="ml-2">
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium text-gray-900"
                          >
                            I agree to the repair{" "}
                            <Link href="/terms">
                              <a
                                target="_blank"
                                className="font-semibold text-blue-600 hover:text-blue-500"
                              >
                                terms and condtions.
                              </a>
                            </Link>
                          </label>
                        </div>
                      </div>
                      {errors.terms && touched.terms ? (
                        <p
                          className="mt-2 text-sm text-red-600"
                          id="terms-error"
                        >
                          {errors.terms}
                        </p>
                      ) : null}
                    </div>
                    {selectedRepair.map((repairs) => (
                      <div
                        key={repairs.name}
                        className="mt-10 pt-6 border-t border-gray-200 sm:flex sm:items-center sm:justify-between"
                      >
                        <button
                          className="w-full bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500 sm:ml-6 sm:order-last sm:w-auto"
                          type="submit"
                          onClick={async () => {
                            setFieldValue("deviceModel", repairs.model);
                            setFieldValue("deviceRepair", repairs.name);
                            setFieldValue("repairCost", repairs.price);
                            // Hack to wait for new value to be applied
                            // Pending https://github.com/jaredpalmer/formik/issues/529
                            await Promise.resolve();
                          }}
                        >
                          Continue
                        </button>
                        <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                          We take payment on collection of your device.
                        </p>
                      </div>
                    ))}
                  </div>
                </Form>
              )}
            </Formik>
          </main>
        </div>
      </div>
      );
    </div>
  );
}
