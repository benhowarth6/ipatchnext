import Link from "next/link";

const footerNavigation = {
  repairs: [
    { name: 'iPhone Repairs', href: '/iphone-repairs' },
    { name: 'iPad Repairs', href: '/ipad-repairs' },
    { name: 'Mac Repairs', href: '/mac-repairs' },
    { name: 'Watch Repairs', href: '/watch-repairs' },
    { name: 'iPod Repairs', href: '/ipod-repairs' },
  ],
  services: [
    { name: 'Recycling', href: '#' },
    { name: 'Liquid Damage', href: '#' },
    { name: 'Logic Board Repairs', href: '#' },
    { name: 'Data Recovery', href: '#' },
    { name: 'Insurance Reports', href: '#' },
  ],
  company: [
    { name: 'About us', href: 'about-us' },
    { name: 'Contact us', href: 'contact-us' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ],
  bottomLinks: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-900">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200">
          <div className="pt-16 pb-20">
            <div className="md:flex md:justify-center">
              <img
                src="/logo-white.svg"
                alt=""
                className="h-6 w-auto"
              />
            </div>
            <div className="mt-16 max-w-5xl mx-auto xl:grid xl:grid-cols-2 xl:gap-8">
              <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-medium text-white">Repairs</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.repairs.map((item) => (
                        <li key={item.name} className="text-sm">
                          <Link href={item.href}>
                            <a className="text-gray-300 hover:text-white">
                              {item.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">Services</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.services.map((item) => (
                        <li key={item.name} className="text-sm">
                          <Link href={item.href}>
                            <a className="text-gray-300 hover:text-white">
                              {item.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-medium text-white">Company</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.company.map((item) => (
                        <li key={item.name} className="text-sm">
                          <Link href={item.href}>
                            <a className="text-gray-300 hover:text-white">
                              {item.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">Legal</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.legal.map((item) => (
                        <li key={item.name} className="text-sm">
                          <Link href={item.href}>
                            <a className="text-gray-300 hover:text-white">
                              {item.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-white">&copy; 2021 All Rights Reserved</p>
          </div>

          <div className="mt-4 flex items-center justify-center md:mt-0">
            <div className="flex space-x-8">
              {footerNavigation.bottomLinks.map((item) => (
                <Link href={item.name}>
                <a key={item.name} className="text-sm text-gray-300 hover:text-white">
                  {item.name}
                </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
