import { Fragment, useState } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import bus1 from "../public/images/bus1.png";
import bus2 from "../public/images/bus2.png";
import bus3 from "../public/images/bus3.png";
import bus4 from "../public/images/bus4.png";
import bus5 from "../public/images/bus5.png";
import bus6 from "../public/images/bus6.png";
import bus7 from "../public/images/bus7.png";
import bus8 from "../public/images/bus8.png";

const Explore = () => {
  const [open, setOpen] = useState(false);
  const [showButtonView, setShowButtonView] = useState(false);

  const busesPhoto = [
    {
      name: "image1",
      image: bus1,
    },
    {
      name: "image2",
      image: bus2,
    },
    {
      name: "image3",
      image: bus3,
    },
    {
      name: "image4",
      image: bus4,
    },
    {
      name: "image5",
      image: bus5,
    },
    {
      name: "image6",
      image: bus6,
    },
    {
      name: "image7",
      image: bus7,
    },
    {
      name: "image8",
      image: bus8,
    },
  ];

  return (
    <>
      <section id="explore">
        <div className="skew skew-top mr-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
          </svg>
        </div>
        <div className="skew skew-top ml-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
          </svg>
        </div>
        <div className="py-20 bg-white radius-for-skewed">
          <div className="container mx-auto px-8">
            <div className="mb-8 md:mb-16 max-w-lg mx-auto text-center">
              <span className="text-green-600 font-bold">Explore</span>
              <h2 className="mb-6 text-3xl lg:text-5xl font-bold font-heading">
                 Beragam Fasilitas Armada Kami
              </h2>
            </div>
            <div className="flex flex-wrap mb-8 -mx-4">
              {busesPhoto.map((photo) => (
                <div
                  key={photo.name}
                  className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4"
                >
                  <a href="#">
                    <Image
                      className="mx-auto h-64 w-full rounded object-cover"
                      src={photo.image}
                      alt={photo.name}
                    />
                  </a>
                </div>
              ))}
              {/* <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
                <a href="#">
                  <img
                    className="mx-auto h-64 w-full rounded object-cover"
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                    alt=""
                  />
                </a>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
                <a href="#">
                  <img
                    className="mx-auto h-64 w-full rounded object-cover"
                    src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80"
                    alt=""
                  />
                </a>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
                <div className="relative mx-auto h-64 w-full rounded-lg">
                  <img
                    className="relative h-full w-full rounded-lg object-cover"
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                    alt=""
                    onMouseOver={() =>
                      setShowButtonView((prevState) => !prevState)
                    }
                  />
                  {showButtonView && (
                    <div
                      onMouseLeave={() =>
                        setShowButtonView((prevState) => !prevState)
                      }
                    >
                      <div className="absolute inset-0 bg-gray-900 opacity-50 rounded-lg"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <a
                          className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose"
                          href="#"
                          onClick={() => setOpen((prevState) => !prevState)}
                        >
                          View Armada
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
                <a href="#">
                  <img
                    className="mx-auto h-64 w-full rounded object-cover"
                    src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=968&amp;q=80"
                    alt=""
                  />
                </a>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
                <a href="#">
                  <img
                    className="mx-auto h-64 w-full rounded object-cover"
                    src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                    alt=""
                  />
                </a>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
                <a href="#">
                  <img
                    className="mx-auto h-64 w-full rounded object-cover"
                    src="https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80"
                    alt=""
                  />
                </a>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
                <a href="#">
                  <img
                    className="mx-auto h-64 w-full rounded object-cover"
                    src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1127&amp;q=80"
                    alt=""
                  />
                </a>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
                <a href="#">
                  <img
                    className="mx-auto h-64 w-full rounded object-cover"
                    src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80"
                    alt=""
                  />
                </a>
              </div> */}
            </div>
            <div className="text-center"></div>
          </div>
        </div>
        <div className="skew skew-bottom mr-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
          </svg>
        </div>
        <div className="skew skew-bottom ml-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
          </svg>
        </div>
      </section>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    {/* <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div> */}
                    <div className="mt-3 text-center sm:mt-5">
                      <div className="mt-2">
                        <div className="aspect-w-3 aspect-h-2">
                          <img
                            className="rounded-lg object-cover shadow-lg"
                            src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80"
                            alt=""
                          />
                        </div>
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900 font-heading mt-4"
                        >
                          Big Bus (80 Capacity)
                        </Dialog.Title>
                        <p className="text-sm text-gray-500 mt-2">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consequatur amet labore.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-green-700 sm:text-sm rounded-xl"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Explore;
