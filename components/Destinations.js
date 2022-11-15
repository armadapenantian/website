const Destinations = () => {
  return (
    <section id="destinations">
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
          <div className="mb-16 max-w-xl mx-auto text-center">
            <span className="text-green-600 font-bold">
              Favourite Destinations
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold font-heading">
              Jelajahi Indonesia Bersama Armada Penantian
            </h2>
          </div>
          <div className="flex flex-wrap justify-center -mx-3">
            <div className="flex flex-wrap w-full lg:w-1/2">
              <div className="w-full px-3 mb-5">
                <div className="relative h-64 mx-auto rounded overflow-hidden">
                  <img
                    className="relative h-full w-full rounded object-cover transition ease-in-out duration-300"
                    src="https://images.pexels.com/photos/5505442/pexels-photo-5505442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <div className="absolute inset-0 rounded"></div>
                  <div className="absolute inset-0 p-6 flex flex-col items-start">
                    <span className="mb-auto py-1 px-3 text-sm bg-white rounded-full text-green-600 uppercase font-bold">
                      Jogjakarta
                    </span>
                    <p className="text-xl lg:text-2xl text-white font-bold">
                      Malioboro, Borobudur, Prambanan, Pantai Parangtritis, HeHa
                      Sky View
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-3 mb-5">
                <div className="relative mx-auto rounded h-128">
                  <img
                    className="relative h-full w-full rounded object-cover"
                    src="https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <div className="absolute inset-0  rounded"></div>
                  <div className="absolute inset-0 p-6 flex flex-col items-start">
                    <span className="mb-auto py-1 px-3 text-sm bg-white rounded-full text-green-600 uppercase font-bold">
                      Bali
                    </span>
                    <p className="text-xl lg:text-2xl text-white font-bold">
                      Pantai Kuta, Tanah Lot, Tanjung Benoa, Bedugul, Pura
                      Uluwatu, Garuda Wisnu Kencana
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-3 mb-5">
                <div className="relative mx-auto rounded h-128">
                  <img
                    className="relative h-full w-full rounded object-cover"
                    src="https://images.pexels.com/photos/6863992/pexels-photo-6863992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <div className="absolute inset-0  rounded "></div>
                  <div className="absolute inset-0 p-6 flex flex-col items-start">
                    <span className="mb-auto py-1 px-3 text-sm bg-white rounded-full text-green-600 uppercase font-bold">
                      Malang
                    </span>

                    <p className="text-xl lg:text-2xl text-white font-bold">
                      Bromo, Museum Angkut, Jatim Park, Alun-Alun Kota Baru
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap w-full lg:w-1/2">
              <div className="w-full lg:w-1/2 px-3 mb-5">
                <div className="relative mx-auto rounded h-128">
                  <img
                    className="relative h-full w-full rounded object-cover"
                    src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80"
                    alt=""
                  />
                  <div className="absolute inset-0  rounded"></div>
                  <div className="absolute inset-0 p-6 flex flex-col items-start">
                    <span className="mb-auto py-1 px-3 text-sm bg-white rounded-full text-green-600 uppercase font-bold">
                      Bandung
                    </span>
                    <p className="text-xl lg:text-2xl text-white font-bold">
                      Farm house Lembang, Kawah Putih, Hutan Pinus, Dusun Bambu
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-3 mb-5">
                <div className="relative mx-auto rounded h-128">
                  <img
                    className="relative h-full w-full rounded object-cover"
                    src="https://images.pexels.com/photos/4741215/pexels-photo-4741215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <div className="absolute inset-0  rounded"></div>
                  <div className="absolute inset-0 p-6 flex flex-col items-start">
                    <span className="mb-auto py-1 px-3 text-sm bg-white rounded-full text-green-600 uppercase font-bold">
                      Lombok
                    </span>
                    <p className="text-xl lg:text-2xl text-white font-bold">
                      Pantai Sanggigi, Gili Trawangan, Taman Narmada, Mandalika,
                      Gunung Rinjani
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-3 mb-5">
                <div className="relative mx-auto rounded h-64">
                  <img
                    className="relative h-full w-full rounded object-cover"
                    src="https://duniakitanews.com/wp-content/uploads/2022/01/IMG_20220129_213739.jpg"
                    alt=""
                  />
                  <div className="absolute inset-0  rounded"></div>
                  <div className="absolute inset-0 p-6 flex flex-col items-start">
                    <span className="mb-auto py-1 px-3 text-sm bg-white rounded-full text-green-600 uppercase font-bold">
                      Lampung
                    </span>
                    <p className="text-xl lg:text-2xl text-white font-bold">
                      Pantai Klara , Pantai Mutun, Ringgung, Pahawag, M-beach
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10"></div>
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

export default Destinations;
