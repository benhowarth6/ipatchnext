import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";

export default function Custom404() {
  return (
    <div>
    <NextSeo
        title="404 - Page Not Found"
        description="The page you requested could not be found."
        openGraph={{
          type: 'website',
          url: 'https://www.ipatchrepairs.co.uk/404',
          title: '404 - Page Not Found',
          description: 'The page you requested could not be found.',
          images: [
            {
              url: "https://www.ipatchrepairs.co.uk/social.jpg",
              width: 1200,
              height: 630,
              alt: "iPatch | Apple Device Repairs in Leeds"
            }
          ]
        }}
      />
    <div className="min-h-full sm:min-h-full">
      <div className="relative mt-6 z-10">
      <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8">
        <Link href="/">
          <a className="flex items-center">
            <div className="flex flex-col justify-center">
              <div className="font-bold text-white leading-tight text-2xl sm:text-3xl tracking-tight">
                iPatch
              </div>
            </div>
          </a>
        </Link>
        </nav>
        </div>
      <div className="bg-cover bg-center">
        <Image
          alt="404"
          src="/404.jpg"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="pt-8 overflow-hidden sm:pt-12 relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-full sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="mt-20">
              <h1 className="text-9xl font-black text-white tracking-tight sm:text-7xl">
                    404
                    </h1>
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Hello, is it me you're looking for?
                    </h1>
                    <Link href="/">
                      <a className="mt-8 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-indigo-50 sm:w-auto"
                      >
                        Go Home
                    </a>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
