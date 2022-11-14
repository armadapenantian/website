const Hero = () => {
  return (
    <section className="relative pb-56 sm:pb-80">
      <div className="relative pt-12 md:pt-16 pb-32 md:pb-64 bg-gray-50">
        <div className="relative container mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-20">
            <h2 className="mb-4 text-4xl lg:text-6xl font-bold font-heading">
              Armada Penantian
            </h2>
            <p className="mb-2 leading-relaxed text-center text-gray-500 ">
              Armada Penantian is the perfect way to travel and see the country.
              Offering a unique experience, this bus will let you explore all
              the best spots in comfort and style.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 max-w-3xl mx-auto px-8">
          <img
            className="rounded-3xl md:rounded-6xl md:rounded-br-none"
            src="https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
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
