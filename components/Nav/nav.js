import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/router";

import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../../public/logo.png'

const navigation = [
  { name: 'Home', href: '/'},
  { name: 'For Donors', href: '/for-donors'},
  { name: 'For Fundraisers', href: '/for-fundraisers'},
  { name: 'About Us', href: '/about-us'}
]

// update translatedpath for each navigation as we add in translations
const translatedpath = [
  '/about-us',
  '/for-fundraisers',
  '/for-fundraisers/for-reputation-backers',
  '/for-fundraisers/for-small-fundraisers'
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const router = useRouter()
  let en_lang, ua_lang;
  [en_lang, ua_lang] = ["en", "ua"];

  function changeLanguage(e) {
    router.push(router.asPath, undefined, { locale: e.target.value, });
  }
  let showLanguageSwitcher = translatedpath.includes(router.pathname);

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className=" max-w-full mx-auto">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:justify-between">
                <div className="flex-shrink-0 flex items-center w-10 md:w-12 lg:w-16">
                  <Link
                    href='/'
                    passHref
                  >
                    <a>
                    <Image
                      className="block cursor-pointer"
                      src={logo}
                      alt='Help Ukraine Now'
                    />
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                        <Link
                            href={item.href}
                            key={item.name}
                            target={item.target}
                            rel={item.rel}
                        >
                            <a
                                className={`
                                    px-3 py-2 
                                    rounded-md 
                                    text-base md:text-lg md:leading-loose 
                                    font-bold align-middle 
                                    ${router.pathname === item.href ? 
                                        'text-gray-800 hover:text-gray-800' 
                                        : 'text-gray-400 hover:text-gray-800'}`}
                            >
                              {item.name}
                            </a>
                        </Link>
                    ))}
                    { showLanguageSwitcher &&
                    <ul
                        className="flex list-none mb-4 flex-row min-w-fit rounded-full box-border border-2 border-white bg-gray-200"
                        role="tablist"
                    >
                    {[en_lang, ua_lang].map((lang) => {
                            return (
                            <li
                                key={lang}
                                className="box-border mr-2 last:mr-0 flex-auto text-center rounded-full border-2 border-gray-200"
                            >
                              <button className={
                                      "text-sm font-bold px-5 py-3 rounded-full " +
                                      "block leading-normal uppercase " +
                                      (router.locale === lang
                                          ? "text-blue-600 bg-white"
                                          : "text-black bg-gray-200")
                                  } onClick={changeLanguage} value={lang}>{lang}</button>
                            </li>
                        )})}
                    </ul>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-3 pt-2 pb-4 space-y-1 bg-gray-100 rounded-2xl">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`
                    block px-3 py-2 rounded-md text-base font-bold
                    ${router.pathname === item.href ? 
                        'text-gray-800 hover:text-gray-800' 
                        :'text-gray-500 hover:text-gray-800'}`
                    }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
          { showLanguageSwitcher &&
          <div className="sm:hidden max-w-full mx-auto">
            <div className="mt-5 relative flex items-center justify-between h-16">
                <ul
                    className="flex list-none mb-4 flex-row min-w-fit rounded-full box-border border-2 border-white bg-gray-200"
                    role="tablist"
                >
                {[en_lang, ua_lang].map((lang) => {
                        return (
                        <li
                            key={lang}
                            className="box-border mr-2 last:mr-0 flex-auto text-center rounded-full border-2 border-gray-200"
                        >
                          <button className={
                                  "text-sm font-bold px-5 py-3 rounded-full " +
                                  "block leading-normal uppercase " +
                                  (router.locale === lang
                                      ? "text-blue-600 bg-white"
                                      : "text-black bg-gray-200")
                              } onClick={changeLanguage} value={lang}>{lang}</button>
                        </li>
                    )})}
                </ul>
            </div>
          </div>
          }
        </>
      )}
    </Disclosure>
  )
};
