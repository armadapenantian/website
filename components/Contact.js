const Contact = () => {
  return (
    <section id="contact">
      <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-green-600"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-green-600"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
        </svg>
      </div>
      <div className="py-20 bg-green-600 radius-for-skewed">
        <div className="container mx-auto px-8">
          <div className="mb-16 max-w-2xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white mb-4">
              Contact
            </h2>
            <p className="text-gray-50"></p>
            <div className="text-gray-50">
              Looking for a travel bus service? Look no further than Armada
              Penantian! Our buses are perfect for traveling long distances, and
              our experienced drivers will make sure that your journey is
              comfortable and enjoyable. Contact us today to learn more about
              our services!
            </div>
            <div>
              <br />
            </div>
            <p></p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="mb-8 lg:mb-0 w-full lg:w-1/3 px-4">
              <div className="py-12 lg:py-20 rounded bg-white shadow-md text-center">
                <h3 className="mb-8 lg:mb-20 text-3xl font-bold font-heading">
                  Office
                </h3>
                <p className="text-gray-400">359 Hidden</p>
                <p className="text-gray-400">Valley Road, NY</p>
              </div>
            </div>
            <div className="mb-8 lg:mb-0 w-full lg:w-1/3 px-4">
              <div className="py-12 lg:py-20 rounded bg-white shadow-md text-center">
                <h3 className="mb-8 lg:mb-20 text-3xl font-bold font-heading">
                  Contacts
                </h3>
                <p className="text-gray-400">hello@gmail.com</p>
                <p className="text-gray-400">+48 698 033 101</p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 flex items-stretch">
              <div className="py-12 lg:py-20 w-full rounded bg-white shadow-md text-center">
                <h3 className="mb-8 lg:mb-20 text-3xl font-bold font-heading">
                  Socials
                </h3>
                <div className="flex justify-center">
                  <a className="mr-3" href="#">
                    <img
                      className="w-8 h-8"
                      src="atis-assets/social/facebook.svg"
                      alt=""
                    />
                  </a>
                  <a className="mr-3" href="#">
                    <img
                      className="w-8 h-8"
                      src="atis-assets/social/twitter.svg"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="w-8 h-8"
                      src="atis-assets/social/instagram.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skew skew-bottom mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-green-600"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
        </svg>
      </div>
      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-green-600"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
        </svg>
      </div>
    </section>
  );
};

export default Contact;
