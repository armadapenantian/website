import Image from "next/image";
import bus1 from "../public/images/bus1.png";
import bus2 from "../public/images/bus2.png";
import bus3 from "../public/images/bus3.png";
import bus4 from "../public/images/bus4.png";
import bus5 from "../public/images/bus5.png";
import bus6 from "../public/images/bus6.png";
import bus7 from "../public/images/bus7.png";
import bus8 from "../public/images/bus8.png";

const Explore = () => {
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
                  <Image
                    className="mx-auto h-64 w-full rounded object-cover"
                    src={photo.image}
                    alt={photo.name}
                  />
                </div>
              ))}
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
    </>
  );
};

export default Explore;
