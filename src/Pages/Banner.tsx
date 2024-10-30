import banner from "@/assets/images/about.jpg";

const Banner = () => {
  return (
    <div className="w-full relative h-56 md:h-72">
      <div className="bg-black opacity-55 absolute inset-0 z-20"></div>
      <div
        className="w-full h-56 md:h-72 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="text-center w-full flex flex-col items-center absolute justify-center h-56 md:h-72 text-white z-30">
          <h1 className="text-semibold  md:text-xl ">We Provide </h1>
          <h1 className="text-white text-2xl md:text-5xl font-semibold mt-3 mb-6">
            THE BEST TRASPORTATION SERVICES
          </h1>
          <p className="text-blue-300 font-semibold  md:text-2xl">
            For Book Your Shipping From Any Country
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
