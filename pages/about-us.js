import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const people = [
  {
    name: 'Andrew Brinkley-Smith',
    role: 'Founder / Owner',
    imageUrl:
      '/people/andy.jpg',
    bio:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Chris Broadley',
    role: 'Technician',
    imageUrl:
      '/people/chris.jpg',
    bio:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Ben Howarth',
    role: 'Technician / Developer',
    imageUrl:
      '/people/ben.jpg',
    bio:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'James Brinkley',
    role: 'Technician',
    imageUrl:
      '/people/james.jpg',
    bio:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          About Us - iPhone, iPad & Mac Repairs in Leeds | iPatch
        </title>
        <meta
          name="description"
          content="Find out more about iPatch and how we work. We repair screens, batteries, charging ports and more on a range of Apple Products. All of our repairs include a 3 month warranty."
          key="desc"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ipatchrepairs.co.uk/about-us" />
        <meta property="og:title" content="About Us - iPhone, iPad & Mac Repairs in Leeds | iPatch" />
        <meta
          property="og:description"
          content="Find out more about iPatch and how we work. We repair screens, batteries, charging ports and more on a range of Apple Products. All of our repairs include a 3 month warranty."
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
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">About us</h1>
            <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
              Learn a little bit more about iPatch, our history and our four person team with a combined 40 years experience in the repair industry.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our History
              </h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg
                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
              </svg>
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg shadow-lg object-cover object-center"
                      src="/people/shop.jpeg"
                      alt="iPatch Storefront Trinity Leeds"
                      width={1184}
                      height={1376}
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">
                  iPatch was founded by Andy in 2007 through a recognition of the problems people were having with their
                  iPods and the trouble they experienced with cowboy repairers.
                </p>
              </div>
              <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                  Today, iPatch has grown in to a multi-store business in Leeds, repairing all Apple devices, including iPhones,
                  iPads, Macs and Watches, along with the trusty old iPod.
                </p>
                <p>
                  On February 11th 2010, iPatch opened up its first retail store in Leeds City Centre. This enabled iPatch to carry out on the spot repairs,
                  especially to iPhones and added to customers reassurance in iPatch as a reputable repair service.
                </p>
                <p>
                  The shop also gave customers the chance to pop down and have an informal chat about any related problems they may be having with Apple
                  products and to receive general, independent advice.
                </p>
                <h3>Our expertise</h3>
                <p>
                  iPatch is a service provided by an experienced and dedicated team, who will do their absolute best to solve your Apple device fault as
                  quickly and cost effectively as possible. Now over 12 years old we have had more than 150,000 Apple devices through our doors and 20-30
                  iPhones a day!
                </p>
                <p>
                  iPhone screens are repaired within 20 minutes and almost all other repairs are done within the hour, no appointment necessary and diagnosis
                  is completely free. Feel free to pop down and see us anytime!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
              <p className="text-xl text-gray-500">
                Our team is a small yet powerful combination of technicians, each offering unique skills.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
              >
                {people.map((person) => (
                  <li key={person.name} className="sm:py-8">
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                      <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>{person.name}</h3>
                            <p className="text-indigo-600">{person.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>


      <Footer />
    </div>
  );
}
