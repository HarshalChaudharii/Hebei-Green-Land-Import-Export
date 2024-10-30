import banner2 from "@/assets/images/banner2.jpg";

const Banner2 = () => {
  return (
    <div className="w-full relative h-56 md:h-72">
      <div className="bg-black opacity-40 absolute inset-0 z-20"></div>
      <div
        className="w-full h-56 md:h-72 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <div className="text-center w-full flex flex-col items-center absolute justify-center h-56  md:h-72 text-white z-30">
          <h1 className="text-semibold  md:text-xl ">
            Innovating Global Trade Solutions
          </h1>
          <h1 className="text-white text-2xl md:text-5xl font-semibold mt-3 mb-6">
            Hebei Green Land Import & Export Co. Ltd.
          </h1>
          <p className="text-blue-300 font-semibold  md:text-2xl">
            Dedicated to Excellence, Performance, and Sustainability
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
