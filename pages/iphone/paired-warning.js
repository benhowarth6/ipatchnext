import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="iPhone Paired Component Warnings"
        description="Learn more about the warnings that may appear after a paired component inside your iPhone has been changed. These warnings appear on iPhone XR and upwards."
        canonical="https://www.ipatchrepairs.co.uk/iphone/paired-warning"
        openGraph={{
          type: 'website',
          url: 'https://www.ipatchrepairs.co.uk/iphone/paired-warning',
          title: 'iPhone Paired Component Warnings',
          description: 'Learn more about the warnings that may appear after a paired component inside your iPhone has been changed. These warnings appear on iPhone XR and upwards.',
          images: [
            {
              url: "https://www.ipatchrepairs.co.uk/iphone-social.jpg",
              width: 1200,
              height: 630,
              alt: "iPatch | iPhone Paired Component Warnings"
            }
          ]
        }}
      />
      <Header />

      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Paired Component Warnings</h1>
            <h2 className="max-w-2xl mt-5 mx-auto text-xl text-white">Learn more about the warnings that may appear after a paired component is changed.</h2>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-screen"></div>
          <div className="mx-auto text-base max-w-prose lg:max-w-none">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Display
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Screen Warnings
            </h3>
            <div className="min-w-0 flex-1 py-1 text-sm text-gray-500 sm:py-3">
              <span className="font-medium text-gray-900">
                Applies to the following models:
              </span>{" "}
              iPhone 11, iPhone 12
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="py-6 px-16 aspect-w-12 aspect-h-7 lg:aspect-none mx-auto">
                    <Image
                      src="/iphone/display-warning.jpg"
                      className="rounded-lg shadow-lg object-cover object-center mx-auto"
                      alt="iPhone Dispaly Warning"
                      width={350}
                      height={510}
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">
                  Starting with iOS 13.1 and iPhone 11 models (the 11, Pro, and
                  Pro Max), your phone will report if it has a third-party
                  screen: “Unable to verify this iPhone has a genuine Apple
                  display.” It starts as a persistent message on your lock
                  screen, lasting for four days. After that, the warning lodges
                  itself in the Settings for 15 days, and then in Settings >
                  General &gt; About after that. It’s also added to your “device
                  information,” so that Apple staff can see it.
                </p>
              </div>
              <div className="mt-5 text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">
                  This warning, similar to the recent addition of battery
                  warnings, happens even if you swap a genuine Apple screen from
                  one phone to another. To avoid the warning, you have to have a
                  genuine Apple display installed by a certified Apple
                  technician, independent or otherwise. The warning doesn’t seem
                  to affect operation—other than the loss of True Tone, which
                  occurs with any display swap not performed by Apple or using
                  specialty chip programming tools. 
                </p>
              </div>
              <div className="mt-5 text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">
                  We’ve tested this with genuine parts on iPhone 11 models. The
                  warnings were not present in iOS 13.0 or the beta for iOS
                  13.1, but they show up when you change out screens with the
                  final version of 13.1 installed. We used screens from the same
                  models of iPhone 11, just days old, but without the software
                  verification tools available to Apple-certified technicians,
                  our units had warnings about a “genuine Apple display.” 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-screen"></div>
          <div className="mx-auto text-base max-w-prose lg:max-w-none">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Battery
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Battery Warnings
            </h3>
            <div className="min-w-0 flex-1 py-1 text-sm text-gray-500 sm:py-3">
              <span className="font-medium text-gray-900">
                Applies to the following models:
              </span>{" "}
              iPhone XR, iPhone XS, iPhone 11, iPhone 12
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="py-6 px-16 aspect-w-12 aspect-h-7 lg:aspect-none mx-auto">
                    <Image
                      src="/iphone/battery-warning.jpg"
                      className="rounded-lg shadow-lg object-cover object-center mx-auto"
                      alt="iPhone Battery Warning"
                      width={350}
                      height={510}
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">
                  Starting with iOS 12 and iPhone XR/S models (the XR, XS, and
                  XS Max), your phone will report if it has a third-party
                  battery: “Unable to verify this iPhone has a genuine Apple
                  battery.” It starts as a persistent message on your lock
                  screen, lasting for four days. After that, the warning lodges
                  itself in the Settings for 15 days, and then in Settings >
                  General &gt; About after that. It’s also added to your “device
                  information,” so that Apple staff can see it.
                </p>
              </div>
              <div className="mt-5 text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">
                  This warning, similar to the display warnings, happens even if
                  you swap a genuine Apple battery from one phone to another. To
                  avoid the warning, you have to have a genuine Apple battery
                  installed by a certified Apple technician, independent or
                  otherwise. The warning doesn’t seem to affect operation—other
                  than the loss of the Battery Health feature, however the true
                  capacity and health can still be read externally. 
                </p>
              </div>
              <div className="mt-5 text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">
                  We’ve tested this with genuine parts on iPhone XR/S models. We
                  used batteries from the same models of iPhone XR/S, just days
                  old, but without the software verification tools available to
                  Apple-certified technicians, our units had warnings about a
                  “genuine Apple Battery.” 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-screen"></div>
          <div className="mx-auto text-base max-w-prose lg:max-w-none">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Camera
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Camera Warnings
            </h3>
            <div className="min-w-0 flex-1 py-1 text-sm text-gray-500 sm:py-3">
              <span className="font-medium text-gray-900">
                Applies to the following models:
              </span>{" "}
              iPhone 12
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="py-6 px-16 aspect-w-12 aspect-h-7 lg:aspect-none mx-auto">
                    <Image
                      src="/iphone/camera-warning.jpg"
                      className="rounded-lg shadow-lg object-cover object-center mx-auto"
                      alt="iPhone Camera Warning"
                      width={350}
                      height={510}
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">
                  Starting with iOS 14 and iPhone 12 models (the 12, 12 Pro, and
                  12 Mini), your phone will report if it has a third-party
                  Camera: “Unable to verify this iPhone has a genuine Apple
                  Camera.” It starts as a persistent message on your lock
                  screen, lasting for four days. After that, the warning lodges
                  itself in the Settings for 15 days, and then in Settings >
                  General &gt; About after that. It’s also added to your “device
                  information,” so that Apple staff can see it.
                </p>
              </div>
              <div className="mt-5 text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">
                  This warning, similar to the display warnings, happens even if
                  you swap a genuine Apple Camera from one phone to another. To
                  avoid the warning, you have to have a genuine Apple Camera
                  installed by a certified Apple technician, independent or
                  otherwise. The warning doesn’t seem to affect operation in any way.
                </p>
              </div>
              <div className="mt-5 text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">
                  We’ve tested this with genuine parts on iPhone 12 models. We
                  used cameras from the same models of iPhone 12, just days
                  old, but without the software verification tools available to
                  Apple-certified technicians, our units had warnings about a
                  “genuine Apple Camera.” 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
