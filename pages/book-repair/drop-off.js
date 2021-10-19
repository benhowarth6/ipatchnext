import { NextSeo } from "next-seo";
import Link from "next/link";
import { Fragment, useState } from 'react'
import { Listbox, Popover, RadioGroup, Transition } from '@headlessui/react'
import { CheckCircleIcon, CheckIcon, ChevronRightIcon, ChevronUpIcon, SelectorIcon } from '@heroicons/react/solid'
import { useRouter } from "next/router";
import DatePicker, { ReactDatePicker } from 'react-datepicker'
import subDays from "date-fns/subDays";

import repairs from '../../data/iphone/iphone-repairs.json';

const steps = [
    { name: 'Booking Type', status: 'complete' },
    { name: 'Device Information', status: 'current' },
    { name: 'Confirmation', status: 'upcoming' },
]

const appointmentLocation = [
    { id: 1, title: 'Trinity Leeds', turnaround: 'Open 7 days a week' },
    { id: 2, title: 'Kirkstall Morrisons', turnaround: 'Open Tuesday - Saturday' },
]

const times = [
    { id: 1, name: '09:30' },
    { id: 2, name: '10:00' },
    { id: 3, name: '10:30' },
    { id: 4, name: '11:00' },
    { id: 5, name: '11:30' },
    { id: 6, name: '12:00' },
    { id: 7, name: '12:30' },
    { id: 8, name: '13:00' },
    { id: 9, name: '13:30' },
    { id: 10, name: '14:00' },
    { id: 11, name: '14:30' },
    { id: 12, name: '15:00' },
    { id: 13, name: '15:30' },
    { id: 14, name: '16:00' },
    { id: 15, name: '16:30' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [open, setOpen] = useState(false)
    const [selectedAppointmentLocation, setselectedAppointmentLocation] = useState(appointmentLocation[0])

    const [selected, setSelected] = useState(times[0])

    const router = useRouter();
    const { id } = router.query;

    const [startDate, setStartDate, selectedDate] = useState(new Date())
    const handleChangeRaw = (value) => {
    }
    const isWeekday = date => {
        const day = date.getDay();
        return day !== 1 && day !== 0;
    }

    return (
        <div>
            <NextSeo
                title="Drop off repair booking in Leeds - iPatch"
                description="Book your device in with us for a drop-off repair at one of our Leeds stores using this form."
            />
            <div className="bg-gray-50">
                {/* Mobile menu */}

                <div className="bg-white">
                    {/* Background color split screen for large screens */}
                    <div className="hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
                    <div className="hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true" />

                    <header className="relative bg-white border-b border-gray-200 text-sm font-medium text-gray-700">
                        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                            <div className="relative flex justify-end sm:justify-center">
                                <a href="/" className="absolute left-0 top-1/2 -mt-2">
                                    <span className="sr-only">iPatch</span>
                                    <img
                                        src="/logo.svg"
                                        alt=""
                                        className="h-5 w-auto"
                                    />
                                </a>
                                <nav aria-label="Progress" className="hidden sm:block">
                                    <ol role="list" className="flex space-x-4">
                                        {steps.map((step, stepIdx) => (
                                            <li key={step.name} className="flex items-center">
                                                {step.status === 'current' ? (
                                                    <a href={`drop-off?id=${id}`} aria-current="page" className="text-blue-600">
                                                        {step.name}
                                                    </a>
                                                ) : step.status === 'complete' ? (
                                                    <a href={`booking-type?id=${id}`}>{step.name}</a>
                                                ) : (
                                                    <a href={`drop-off?id=${id}`}>{step.name}</a>
                                                )}

                                                {stepIdx !== steps.length - 1 ? (
                                                    <ChevronRightIcon className="w-5 h-5 text-gray-300 ml-4" aria-hidden="true" />
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
                                {repairs.filter(repairs => repairs.id == `${id}`).map(filteredRepairs => {
                                    const { id, name, price, model, image } = filteredRepairs;
                                    return (
                                        <div>
                                            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                                                Booking summary
                                            </h2>

                                            <ul role="list" className="text-sm font-medium text-gray-900 divide-y divide-gray-200">

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
                                                    <p className="flex-none text-base font-medium">{""}</p>
                                                </li>

                                            </ul>

                                            <dl className="hidden text-sm font-medium text-gray-900 space-y-6 border-t border-gray-200 pt-6 lg:block">
                                                <div className="flex items-center justify-between">
                                                    <dt className="text-gray-600">Subtotal</dt>
                                                    <dd>£{(parseInt(price) / (1.2) * 1).toFixed(2)}</dd>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <dt className="text-gray-600">VAT</dt>
                                                    <dd>£{(parseInt(price) / (1.2) * 0.2).toFixed(2)}
                                                    </dd>
                                                </div>

                                                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                                    <dt className="text-base">Total</dt>
                                                    <dd className="text-base">£{(parseInt(price).toFixed(2))}</dd>
                                                </div>
                                            </dl>

                                            <Popover className="fixed bottom-0 z-50 inset-x-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
                                                <div className="relative z-10 bg-white border-t border-gray-200 px-4 sm:px-6">
                                                    <div className="max-w-lg mx-auto">
                                                        <Popover.Button className="w-full flex items-center py-6 font-medium focus:outline-none">
                                                            <span className="text-base mr-auto">Total</span>
                                                            <span className="text-base mr-2">£{price}</span>
                                                            <ChevronUpIcon className="w-5 h-5 text-gray-500" aria-hidden="true" />
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
                                                                        <dt className="text-gray-600">Subtotal</dt>
                                                                        <dd>£{(parseInt(price) / (1.2) * 1).toFixed(2)}</dd>
                                                                    </div>

                                                                    <div className="flex items-center justify-between">
                                                                        <dt className="text-gray-600">VAT</dt>
                                                                        <dd>£{(parseInt(price) / (1.2) * 0.2).toFixed(2)}</dd>
                                                                    </div>
                                                                </dl>
                                                            </Popover.Panel>
                                                        </Transition.Child>
                                                    </div>
                                                </Transition.Root>
                                            </Popover>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>

                        <form className="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1">
                            <div className="max-w-lg mx-auto lg:max-w-none">
                                <section aria-labelledby="contact-info-heading">
                                    <h2 id="contact-info-heading" className="text-lg font-medium text-gray-900">
                                        Contact information
                                    </h2>

                                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                        <div>
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                First name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    id="first-name"
                                                    name="first-name"
                                                    autoComplete="given-name"
                                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Last name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    id="last-name"
                                                    name="last-name"
                                                    autoComplete="family-name"
                                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                            Email address
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="email"
                                                id="email-address"
                                                name="email-address"
                                                autoComplete="email"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                            Phone number
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                autoComplete="tel"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                </section>

                                <div className="mt-10 border-t border-gray-200 pt-10">
                                    <RadioGroup value={selectedAppointmentLocation} onChange={setselectedAppointmentLocation}>
                                        <RadioGroup.Label className="text-lg font-medium text-gray-900">Appointment details</RadioGroup.Label>

                                        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                            {appointmentLocation.map((appointmentLocation) => (
                                                <RadioGroup.Option
                                                    key={appointmentLocation.id}
                                                    value={appointmentLocation}
                                                    className={({ checked, active }) =>
                                                        classNames(
                                                            checked ? 'border-transparent' : 'border-gray-300',
                                                            active ? 'ring-2 ring-blue-500' : '',
                                                            'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none'
                                                        )
                                                    }
                                                >
                                                    {({ checked, active }) => (
                                                        <>
                                                            <div className="flex-1 flex">
                                                                <div className="flex flex-col">
                                                                    <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                                                                        {appointmentLocation.title}
                                                                    </RadioGroup.Label>
                                                                    <RadioGroup.Description
                                                                        as="span"
                                                                        className="mt-1 flex items-center text-sm text-gray-500"
                                                                    >
                                                                        {appointmentLocation.turnaround}
                                                                    </RadioGroup.Description>
                                                                </div>
                                                            </div>
                                                            {checked ? (
                                                                <CheckCircleIcon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                                                            ) : null}
                                                            <div
                                                                className={classNames(
                                                                    active ? 'border' : 'border-2',
                                                                    checked ? 'border-blue-500' : 'border-transparent',
                                                                    'absolute -inset-px rounded-lg pointer-events-none'
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                        </>
                                                    )}
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>

                                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            Appointment date
                                        </label>
                                        <div className="mt-1">
                                            <div className="relative">
                                                {selectedAppointmentLocation.title === 'Kirkstall Morrisons' ? (
                                                    <DatePicker
                                                        dateFormat="dd/MM/yyyy"
                                                        selected={startDate}
                                                        onChange={(date) => setStartDate(date)}
                                                        filterDate={isWeekday}
                                                        selectsStart
                                                        startDate={startDate}
                                                        calendarStartDay={1}
                                                        minDate={subDays(new Date(), 0)}
                                                        onFocus={e => e.target.blur()}
                                                        nextMonthButtonLabel=">"
                                                        previousMonthButtonLabel="<"
                                                    />
                                                ) : (
                                                    <DatePicker
                                                        dateFormat="dd/MM/yyyy"
                                                        selected={startDate}
                                                        onChange={(date) => setStartDate(date)}
                                                        selectsStart
                                                        calendarStartDay={1}
                                                        minDate={subDays(new Date(), 0)}
                                                        onFocus={e => e.target.blur()}
                                                        startDate={startDate}
                                                        nextMonthButtonLabel=">"
                                                        previousMonthButtonLabel="<"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div>

                                        <Listbox value={selected} onChange={setSelected}>
                                            {({ open }) => (
                                                <>
                                                    <Listbox.Label className="block text-sm font-medium text-gray-700">Appointment time</Listbox.Label>
                                                    <div className="mt-1 relative">
                                                        <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                                            <span className="block truncate">{selected.name}</span>
                                                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
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
                                                                                active ? 'text-white bg-blue-600' : 'text-gray-900',
                                                                                'cursor-default select-none relative py-2 pl-8 pr-4'
                                                                            )
                                                                        }
                                                                        value={time}
                                                                    >
                                                                        {({ selected, active }) => (
                                                                            <>
                                                                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                                    {time.name}
                                                                                </span>

                                                                                {selected ? (
                                                                                    <span
                                                                                        className={classNames(
                                                                                            active ? 'text-white' : 'text-blue-600',
                                                                                            'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                                                                        )}
                                                                                    >
                                                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

                                <div className="mt-10 pt-6 border-t border-gray-200 sm:flex sm:items-center sm:justify-between">
                                    <Link
                                        href={{
                                            pathname: 'drop-off-confirmation',
                                            query: { id: id, location: selectedAppointmentLocation.title, time: selected.name, date: startDate },
                                        }}
                                    >
                                        <a
                                            className="w-full bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500 sm:ml-6 sm:order-last sm:w-auto"
                                        >
                                            Continue
                                        </a>
                                    </Link>
                                    <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                                        We don't take payment until after your repair has been completed.
                                    </p>
                                </div>

                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    )
}
