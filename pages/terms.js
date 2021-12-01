import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Terms & Conditions - iPhone, iPad & Mac Repairs in Leeds | iPatch</title>
        <meta
          name="description"
          content="Find out more about our terms and conditions. We repair screens, batteries, charging ports and more on a range of Apple Products. All of our repairs include a 3 month warranty."
          key="desc"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.ipatchrepairs.co.uk/terms"
        />
        <meta
          property="og:title"
          content="Terms & Conditions - iPhone, iPad & Mac Repairs in Leeds | iPatch"
        />
        <meta
          property="og:description"
          content="Find out more about our terms and conditions. We repair screens, batteries, charging ports and more on a range of Apple Products. All of our repairs include a 3 month warranty."
        />
        <meta
          property="og:image"
          content="https://www.ipatchrepairs.co.uk/social.jpg"
        />
      </Head>
      <Navigation />

      <div className="bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="py-24 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Terms & Conditions</h1>
            <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
              Find out more about our repair Terms. Last updated 1st December 2021.
            </p>
          </div>
        </div>
      </div>

      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900">Introduction</span>
            </h1>
            <p className="mt-8 text-base text-gray-500 leading-8">These Terms & Conditions (T&Cs) govern the service of your product by iPatch.When your product is repaired pursuant to iPatch’s warranty, extended service contract or any consumer law, these terms will apply, to the extent that they do not reduce your rights under iPatch's warranty, extended service contract or applicable law.</p>
          </div>
        </div>
        <div className="relative px-4 pt-16 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900">Services & Data</span>
            </h1>
            <p className="mt-8 text-base text-gray-500 leading-8">iPatch will service your product as described and for the charges shown on your online quote or discussed in person plus any applicable tax.iPatch understands that your data may be valuable to you.Data loss during service is always a possibility, and in some cases, data may be unrecoverable, erased, or reformatted during service.For this reason, it is your sole responsibility to back up all existing data, software, and/or programs from your product, and to decide whether to erase any such data from your product, prior to receiving service.</p>
            <p className="mt-8 text-base text-gray-500 leading-8">iPatch is not responsible for loss, recovery, or compromise of data, software or programs, or loss of use of your product or other equipment arising out of the services provided by iPatch.You represent that your product does not contain any illegal files or data.You acknowledge that your device may be sent out by common carrier to be serviced by an external service provider.For this reason, it's recommended that you back up your device and wipe it, prior to submission for service.</p>
          </div>
        </div>
        <div className="relative px-4 pt-16 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900">Service Exclusions</span>
            </h1>
            <p className="mt-8 text-base text-gray-500 leading-8">If service is needed due to failure of parts that are not original to the product or due to damage caused by abuse, misuse or any external cause, iPatch reserves the right to return the product to you without servicing it, and may hold you responsible for any indicated diagnostic fee.iPatch will not be responsible for any damage to the product that occurs during the repair process that is a result of any unauthorised modifications or repairs or replacements not performed by iPatch.If damage results, iPatch will seek your authorisation for any additional costs for completing service.If you decline authorisation, iPatch may return your product unrepaired in the damaged condition without any responsibility.</p>
          </div>
        </div>
        <div className="relative px-4 pt-16 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900">Quote Revisions</span>
            </h1>
            <p className="mt-8 text-base text-gray-500 leading-8">If service requires labour and/or parts not previously specified, iPatch may seek your approval of a revised estimate.If you do not agree that iPatch may revise the charges, iPatch may return your product and hold you responsible for any indicated diagnostic fee.</p>
          </div>
        </div>
        <div className="relative px-4 pt-16 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900">Parts</span>
            </h1>
            <p className="mt-8 text-base text-gray-500 leading-8">iPatch may use parts or products that are new or equivalent to new in reliability and performance.iPatch will retain the replaced part or product that is exchanged as its property, and the replacement part will become your property.iPatch may repair, exchange or sell the replaced part if it chooses to do so.</p>
          </div>
        </div>
        <div className="relative px-4 pt-16 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900">Warranty</span>
            </h1>
            <p className="mt-8 text-base text-gray-500 leading-8">iPatch warrants (1) that the service will be performed with all reasonable skill and care and (2) that, for a period of ninety (90) days from the date of service, all parts used to service your product will be free from defects in materials and workmanship, unless otherwise specified by iPatch.In the event of breach of the warranty in this section 5, iPatch will either (i) re-perform the service, (ii) repair or replace the part, or (iii) refund the cost of the service provided.In order to claim under the warranty you must return your product to the store where you left your product for service.</p>
          </div>
        </div>
        <div className="relative px-4 pt-16 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900">Indemnification</span>
            </h1>
            <p className="mt-8 text-base text-gray-500 leading-8">If iPatch is in breach of these T&Cs, it will only be responsible to you for any loss or damage that you suffer to the extent that such loss or damage was a foreseeable consequence to both you and iPatch at the time you agreed to these T&Cs.Further, iPatch and its affiliates, will not be liable to you for any loss of revenue; loss of actual or anticipated profits (including loss of profits on contracts); loss of the use of money; loss of anticipated savings; loss of business; loss of opportunity; loss of goodwill; loss of reputation; loss of, damage to, or corruption of data; or any costs of recovering, programming, or restoring any program or data stored or used with your product and any failure to maintain the confidentiality of data stored on your product.iPatch specifically does not warrant that it will be able to (i) repair or replace your product without risk to or loss of programs or data, and (ii) maintain the confidentiality of data.Nothing in these T&Cs will reduce your statutory rights relating to faulty or misdescribed goods.For further information about your statutory rights contact your local authority Trading Standards Department or Citizens' Advice Bureau.</p>
          </div>
        </div>
        <div className="relative px-4 pt-16 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900">Customer’s Responsibility</span>
            </h1>
            <p className="mt-8 text-base text-gray-500 leading-8">You must claim your product and pay all charges due within sixty (60) days after being notified by iPatch that your product has been serviced.If you do not, iPatch may notify you that it considers your product abandoned and that, if you do not collect it and pay any outstanding charges within a further three (3) months, iPatch will dispose of it in accordance with applicable law.</p>
          </div>
        </div>
        <div className="relative px-4 pt-16 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900">Software Licenses</span>
            </h1>
            <p className="mt-8 text-base text-gray-500 leading-8">If service involves transferring information or installing software, you represent that you have the legal right to copy the information and agree to the terms of the software license, and you authorise iPatch to transfer the information and accept such terms on your behalf in performing the service.</p>
          </div>
        </div>
        <div className="relative px-4 pt-16 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900">Governing Law & Jurisdiction</span>
            </h1>
            <p className="mt-8 text-base text-gray-500 leading-8">These T&Cs are governed by English law.</p>
            <p className="mt-8 text-base text-gray-500 leading-8">These T&Cs are the only ones that govern iPatch's service of your product.</p>
          </div>
        </div>
        <div className="relative px-4 pt-16 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900">Personal Data</span>
            </h1>
            <p className="mt-8 text-base text-gray-500 leading-8">You agree and understand that it is necessary for iPatch to collect, process and use your personal information in order to perform service under these T&Cs.</p>
          </div>
        </div>
        <div className="relative px-4 pt-16 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900">Quotes & Bookings</span>
            </h1>
            <p className="mt-8 text-base text-gray-500 leading-8">The "Price" for a repair is an estimate only, upon inspecting your device we shall confirm the needed repairs and price for your repair.</p>
            <p className="mt-8 text-base text-gray-500 leading-8">Any information you enter on our booking form will not be used for marketing purposes, nor will we disclose your information to any third parties other than our appointment system provider.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
