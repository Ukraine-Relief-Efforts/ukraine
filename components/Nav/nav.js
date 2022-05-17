import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/router";

import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../../public/logo-helpuanow2x.png'

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

export default function NavBar({ isIndexPage }) {
  const router = useRouter()
  let en_lang, ua_lang;
  [en_lang, ua_lang] = ["en", "ua"];

  function changeLanguage(e) {
    router.push(router.asPath, undefined, { locale: e.target.value, });
  }
  let showLanguageSwitcher = translatedpath.includes(router.pathname);

  return (
    <Disclosure as="nav" className={`bg-white ${isIndexPage ? "m-6 sm:my-12 sm:mx-16" : ""}`}>
      {({ open }) => (
        <>
          <div className=" max-w-full mx-auto">
            <div className="relative flex items-center justify-between h-16">

                { showLanguageSwitcher &&
                  <div className="sm:hidden max-w-full mx-auto mt-2">
                    <div className="absolute inset-y-0 left-0 flex items-left inline">
                        <ul
                            className="flex list-none mt-2 mb-3 flex-row min-w-fit rounded-full box-border border-2 border-white bg-gray-200"
                            role="tablist"
                        >
                        {[en_lang, ua_lang].map((lang) => {
                                return (
                                <li
                                    key={lang}
                                    className="box-border mr-0 last:mr-0 flex-auto text-center rounded-full border-2 border-gray-200"
                                >
                                  <button className={
                                          "text-sm font-bold px-2 py-2 rounded-full " +
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
                <div className="flex-shrink-0 flex items-center">
                  <Link
                    href='/'
                    passHref
                  >
                    <a className="flex items-center">
                        <Image
                          className="block cursor-pointer"
                          src={logo}
                          alt='Help Ukraine Now'
                          loading="lazy"
                          height={40}
                          width={40}
                        />
                        { isIndexPage && 
                          <div className="ml-4">
                            <span className="text-[#005BBC] font-bold sm:font-extrabold text-xl inline leading-none">Help </span>
                            <span className="text-[#FFD500] bg-[#005BBC] font-bold sm:font-extrabold px-2 py-0.25 text-xl rounded-lg leading-none">
                                Ukraine
                            </span>
                            <span className="text-[#005BBC] font-bold sm:font-extrabold text-xl inline leading-none"> Now</span>
                          </div>
                        }
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
        </>
      )}
    </Disclosure>
  )
};
