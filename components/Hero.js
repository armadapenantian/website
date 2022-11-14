const Hero = () => {
  return (
    <section className="relative pb-56 sm:pb-80">
      <div className="relative pt-12 md:pt-16 pb-32 md:pb-64 bg-gray-50">
        <div className="relative container mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-20">
            <h2 className="text-3xl lg:text-6xl font-bold font-heading">
              Armada Penantian
            </h2>
            <p className="mb-2 leading-relaxed text-center text-gray-500 ">
              Solusi Travel Anda
            </p>
            <div className="mt-8">
              <a
                className="hidden lg:inline-block py-2 px-6 bg-green-500 hover:bg-green-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
                href="#"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 max-w-3xl mx-auto px-8">
          <img
            className="rounded-3xl md:rounded-6xl md:rounded-br-none"
            src="/images/hero-image.png"
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="flex items-center justify-center bg-white rounded-full"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
