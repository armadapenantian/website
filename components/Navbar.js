import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import logo from "../public/images/logo-circle.png";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleBurgerButtonClick = () => {
    setOpen((prevState) => !prevState);
  };

  const navigation = [
    {
      name: "Explore",
      href: "#explore",
    },
    {
      name: "Destinations",
      href: "#destinations",
    },
    {
      name: "Why Us",
      href: "#why-us",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <section className="sticky top-0 z-50">
      <nav className="relative py-6 bg-white drop-shadow-sm">
        <div className="container mx-auto px-8 flex justify-between items-center">
          <a className="text-3xl font-bold leading-none" href="#">
            <Image className="w-16" src={logo} alt="" />
          </a>
          <div className="lg:hidden">
            <button
              onClick={handleBurgerButtonClick}
              className="navbar-burger flex items-center text-green-600 p-3"
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            {navigation.map((nav, index) => (
              <>
                <li key={nav.name}>
                  <a
                    className="text-sm text-gray-400 hover:text-gray-500"
                    href={nav.href}
                  >
                    {nav.name}
                  </a>
                </li>
                {index + 1 !== navigation.length && (
                  <li className="text-gray-300">
                    <svg
                      className="w-4 h-4 current-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      ></path>
                    </svg>
                  </li>
                )}
              </>
            ))}
          </ul>
          <a
            className="hidden lg:inline-block py-2 px-6 bg-green-500 hover:bg-green-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
            href="https://wa.me/6281325259580"
            target="_blank"
          >
            Pesan Sekarang
          </a>
        </div>
      </nav>
      <div
        className={clsx(
          "navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50",
          !isOpen && "hidden"
        )}
      >
        <div
          onClick={handleBurgerButtonClick}
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
        ></div>
        <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <Image className="w-16" src={logo} alt="" />
            </a>
            <button onClick={handleBurgerButtonClick} className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              {navigation.map((nav) => (
                <li className="mb-1" key={nav.name}>
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                    href={nav.href}
                    onClick={handleBurgerButtonClick}
                  >
                    {nav.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl"
                href="https://wa.me/6281325259580"
                target="_blank"
              >
                Pesan Sekarang
              </a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>© {new Date().getFullYear()} Armada Penantian.</span>
            </p>
            <div className="text-center">
              <a
                className="inline-block px-1"
                href="https://www.instagram.com/armadapenantian_bus/"
                target="_blank"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#9c1f28"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
