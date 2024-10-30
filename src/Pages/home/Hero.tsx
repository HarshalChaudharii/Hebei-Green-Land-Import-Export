import hero from "@/assets/images/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full relative h-[42rem] overflow-hidden">
      <img
        src={hero}
        alt="hero"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="w-full absolute h-full inset-0 bg-gradient-to-r from-black via-black/70 to-transparent opacity-70"></div>
      <div className="absolute z-40 w-full md:w-[35%] top-1/3 left-4 md:left-24 text-white space-y-6 px-4 md:px-0">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Hebei Green Land Import & Export Co. Ltd.
        </h1>
        <p className="text-gray-200 mt-4 text-sm md:text-base">
          Ensuring your products reach global markets swiftly and securely.
          "Partner with Hebei Green Land Import & Export Co. Ltd."
        </p>
        <div className="pt-8 md:mt-8 flex flex-col items-start  md:flex-row gap-4 md:gap-6">
          <Link to="/about" className="text-center">
            <button className="px-6 md:px-8 py-2 border-2 rounded-lg border-white hover:bg-white hover:text-black transition duration-300">
              Read More
            </button>
          </Link>
          <Link to="/contact-us" className="text-center">
            <button className="bg-customBlue1 px-6 md:px-8 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
