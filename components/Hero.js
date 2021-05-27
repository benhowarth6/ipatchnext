import Link from "next/link";
import TextLoop from "react-text-loop";
import Image from "next/image";

import { StarIcon } from "@heroicons/react/solid";

const Hero = () => {
  return (
    <>
      {/* Hero section */}
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Broken your</span>
              <h2>
                <TextLoop>
                    <span>iPhone?</span>
                    <span>iPad?</span>
                    <span>Mac?</span>
                    <span>Watch?</span>
                    <span>iPod?</span>
                </TextLoop>
            </h2>
              {/* space */}
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
                You're in the right place
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Same day, quality repairs for iPhones, iPad's, Mac's & More. We're
              located in Trinity Leeds and you can visit us anytime without
              making a booking.
            </p>
            <div className="mt-6">
              <div className="inline-flex items-center divide-x divide-gray-300">
                <div className="flex-shrink-0 flex pr-5">
                  <StarIcon className="h-5 w-5 text-yellow-400"></StarIcon>
                  <StarIcon className="h-5 w-5 text-yellow-400"></StarIcon>
                  <StarIcon className="h-5 w-5 text-yellow-400"></StarIcon>
                  <StarIcon className="h-5 w-5 text-yellow-400"></StarIcon>
                  <StarIcon className="h-5 w-5 text-yellow-400"></StarIcon>
                </div>
                <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                  <span className="font-medium text-gray-900">
                    Rated 5 stars
                  </span>{" "}
                  by over{" "}
                  <span className="font-medium text-blue-600">
                    200 customers
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-10 sm:flex lg:justify-start">
              <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <div className="rounded-md shadow">
                  <Link href="/find-repair">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10">
                      Get started
                    </a>
                  </Link>
                </div>
                <div className="rounded-md shadow">
                  <Link href="/book-repair">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 md:py-4 md:text-lg md:px-10">
                      Book a repair
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <div className="absolute inset-0 w-full h-full pt-0 md:pt-24 xl:pt-0 object-cover">
            <Image
              src="/index/header.jpg"
              alt="Index Hero Image"
              priority
              layout="responsive"
              width={2102}
              height={1401}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
