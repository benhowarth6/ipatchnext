import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import Incentive from "../components/Incentive"
import Services from "../components/Services"
import Business from "../components/Business"

const categories = [
  {
    name: 'iPhone Repairs',
    href: 'iphone-repairs',
    imageSrc: 'https://images.unsplash.com/photo-1632633728024-e1fd4bef561a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=5340&q=80',
  },
  {
    name: 'iPad Repairs',
    href: 'ipad-repairs',
    imageSrc: 'https://images.unsplash.com/photo-1632633726419-3e5e7d74ca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=5340&q=80',
  },
  {
    name: 'Mac Repairs',
    href: 'mac-repairs',
    imageSrc: 'https://images.unsplash.com/photo-1635310568932-47fd9c961c26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=5340&q=80',
  },
  {
    name: 'Watch Repairs',
    href: 'watch-repairs',
    imageSrc: 'https://images.unsplash.com/photo-1541351991055-b55135fea4bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3029&q=80',
  },
  { name: 'iPod Repairs', href: 'ipad-repairs', imageSrc: 'https://images.unsplash.com/photo-1634619256987-962389b913be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=5342&q=80' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>
          iPhone, iPad & Mac Repairs in Leeds - Screen Replacements & Other Repairs | iPatch
        </title>
        <meta
          name="description"
          content="Expert Apple iPhone repairs in Trinity Leeds. We offer replacement screens, batteries, liquid damage services and more while you wait. All of our iPhone repairs include a 3 month warranty."
          key="desc"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ipatchrepairs.co.uk" />
        <meta property="og:title" content="iPhone, iPad & Mac Repairs in Leeds - Screen Replacements & Other Repairs | iPatch" />
        <meta
          property="og:description"
          content="Expert Apple iPhone repairs in Trinity Leeds. We offer replacement screens, batteries, liquid damage services and more while you wait. All of our iPhone repairs include a 3 month warranty."
        />
        <meta
          property="og:image"
          content="https://www.ipatchrepairs.co.uk/social.jpg"
        />
      </Head>
      <div className="bg-white">
        <Navigation />

        <div className="bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="py-24 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Find a repair</h1>
              <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
                We offer a large selection of iPhone repairs including screens, batteries, charging ports and more for nearly all models.
              </p>
            </div>
          </div>
        </div>

        <main>
          {/* Category section */}
          <section aria-labelledby="category-heading" className="py-24 sm:py-32 xl:max-w-7xl xl:mx-auto xl:px-8">
            <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
              <h2 id="category-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                Devices we repair
              </h2>
            </div>

            <div className="mt-4 flow-root">
              <div className="-my-2">
                <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                  <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                    {categories.map((category) => (
                      <Link href={category.href}>
                      <a
                        key={category.name}
                        className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                      >
                        <span aria-hidden="true" className="absolute inset-0">
                          <img src={category.imageSrc} alt="" className="w-full h-full object-center object-cover" />
                        </span>
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                        />
                        <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                      </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Incentive />
          
        </main>
        <Footer />
      </div>
    </>
  )
}
