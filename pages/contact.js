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
        title="Contact Us - iPatch Trinity Leeds & Kirkstall Morisons"
        description="We repair screens, batteries, charging ports and more on a range of Apple Products. We aim to complete all repairs in the same day and include a 90 day warranty."
      />
      <Header />

      <div className="bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Contact Us</p>
            <p className="max-w-2xl mt-5 mx-auto text-xl text-white">Find our shop locations, opening times and contact details. </p>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
