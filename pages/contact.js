import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";

import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Contact Us - Expert Apple Repairs in Leeds"
        description="Find out more about iPatch, our locations, opening times and our contact details. We're open 7 days a week in our Trinity Leeds store."
        canonical="https://www.ipatchrepairs.co.uk/contact"
        openGraph={{
          type: 'website',
          url: 'https://www.ipatchrepairs.co.uk/contact',
          title: 'Contact Us - Expert Apple Repairs in Leeds',
          description: 'Find out more about iPatch, our locations, opening times and our contact details. We\'re open 7 days a week in our Trinity Leeds store.',
          images: [
            {
              url: "https://www.ipatchrepairs.co.uk/social.jpg",
              width: 1200,
              height: 630,
              alt: "iPatch | Contact us"
            }
          ]
        }}
      />
      <Header />

      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Contact Us</h1>
            <h2 className="max-w-2xl mt-5 mx-auto text-xl text-white">Find our shop locations, opening times and contact details. </h2>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
