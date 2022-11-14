import Image from "next/image";
import whyUs1 from "../public/images/why-us-1.png";
import whyUs2 from "../public/images/why-us-2.png";
import whyUs3 from "../public/images/why-us-3.png";

const WhyUs = () => {
  return (
    <section id="why-us">
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
          <div className="flex flex-wrap items-center -mx-4">
            <div className="mb-12 lg:mb-0 w-full lg:w-1/2 px-4">
              <div className="max-w-md">
                <span className="text-green-600 font-bold">Why us</span>
                <h2 className="mb-6 text-3xl lg:text-5xl font-bold font-heading">
                  Pilihan utama untuk perjalanan Anda
                </h2>
                <ul>
                  <li className="flex mb-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="mr-3 w-8 h-8 text-green-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="max-w-xs">
                      <h3 className="font-bold font-heading">
                        Fasilitas Lengkap
                      </h3>
                      <p className="text-gray-500 leading-loose">
                        Dilengkapi dengan berbagai fasilitas terbaik untuk
                        meningkatkan kenyamanan selama berkendara
                      </p>
                    </div>
                  </li>
                  <li className="flex mb-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="mr-3 w-8 h-8 text-green-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="max-w-xs">
                      <h3 className="font-bold font-heading">
                        Harga Terjangkau
                      </h3>
                      <p className="text-gray-500 leading-loose">
                        Semua layanan terbaik kami diberikan dengan harga yang
                        sangat bersahabat.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="mr-3 w-8 h-8 text-green-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="max-w-xs">
                      <h3 className="font-bold font-heading">
                        Profesional dan Berpengalaman
                      </h3>
                      <p className="text-gray-500 leading-loose">
                        Kru kami selalu memberikan layanan terbaik untuk
                        perjalanan wisata Anda.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap items-center w-full lg:w-1/2 px-4">
              <div className="mb-6 w-full lg:w-1/2 px-0 lg:px-3">
                <Image
                  src={whyUs1}
                  height={256}
                  className="w-full object-cover rounded-lg mb-8"
                  alt=""
                />
                <Image
                  src={whyUs2}
                  height={256}
                  className="w-full object-cover rounded-lg"
                  alt=""
                />
              </div>
              <div className="w-full lg:w-1/2 px-0 lg:px-3">
                <Image
                  src={whyUs3}
                  height={256}
                  className="w-full object-cover rounded-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
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
  );
};

export default WhyUs;
