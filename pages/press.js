import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const posts = [
  {
    title: "Snazzy iPhone Mod Illuminates Apple Logo",
    href: "https://www.wired.com/2011/09/iphone-mod-apple-logo/",
    description:
      "An iPhone 4 mod sets the Apple logo on your phone aglow whenever the screen lights up, much as the logo on a MacBook lights up when opened. From the pictures, it looks pretty slick.",
    date: "Sep 12, 2011",
    datetime: "12-09-2011",
  },
  {
    title: "iPhone 4 mod makes the Apple logo glow",
    href: "https://www.cnet.com/tech/mobile/iphone-4-mod-makes-the-apple-logo-glow/",
    description:
      "This clever hack makes the back of your iPhone light up like the lid of a MacBook. But it's not a cheap or easy modification to make.",
      date: "Sep 13, 2011",
      datetime: "13-09-2011",
  },
  {
    title: "Look At How A Ballooning Battery Can Burst Your iPhone!",
    href: "https://www.cultofmac.com/150414/look-at-how-a-ballooning-battery-can-burst-your-iphone-image/",
    description:
      "According to iPatch, a leading iPhone, iPad, and iPod touch repair specialist here in the U.K., this is a common problem with Apple’s ageing iPhone.",
    date: "Mar 05, 2012",
    datetime: "05-03-2012",
  },
  {
    title: "Another iOS 5 Security Flaw Allows Anyone To Access Your Camera Roll",
    href: "https://www.cultofmac.com/148196/another-ios-5-security-flaw-allows-anyone-to-access-your-camera-roll/",
    description:
      "Sources for Cult of Mac have discovered yet another security flaw in Apple’s iOS 5 operating system that provides unauthorized access to your iPhone’s camera roll without the need to enter your passcode.",
      date: "Feb 23, 2012",
      datetime: "23-02-2012",
  },
];

export default function Recycling() {
  return (
    <div>
      <Head>
        <title>Press - iPhone, iPad & Mac Repairs in Leeds | iPatch</title>
        <meta
          name="description"
          content="Find out more about iPatch in the press. We repair screens, batteries, charging ports and more on a range of Apple Products. All of our repairs include a 3 month warranty."
          key="desc"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.ipatchrepairs.co.uk/press"
        />
        <meta
          property="og:title"
          content="Press - iPhone, iPad & Mac Repairs in Leeds | iPatch"
        />
        <meta
          property="og:description"
          content="Find out more about iPatch in the press. We repair screens, batteries, charging ports and more on a range of Apple Products. All of our repairs include a 3 month warranty."
        />
        <meta
          property="og:image"
          content="https://www.ipatchrepairs.co.uk/social.jpg"
        />
      </Head>
      <Navigation />

      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-6xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Press
            </h2>
          </div>
          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <p className="text-sm text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                </p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {post.description}
                  </p>
                </a>
                <div className="mt-3">
                  <a
                    href={post.href} target="_blank"
                    className="text-base font-semibold text-blue-600 hover:text-blue-500"
                  >
                    Read full story
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
