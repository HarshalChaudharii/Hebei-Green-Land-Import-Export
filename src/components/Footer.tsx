import { ChevronRight } from "lucide-react";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const services = [
  { id: 1, data: "Global Procurement & Sales" },
  { id: 2, data: "Project Management & EPC Services" },
  { id: 3, data: "Feasibility Studies" },
  { id: 4, data: "Process Optimization" },
];

const links = [
  { id: 1, data: "Home" },
  { id: 2, data: "Company Profile" },
  { id: 3, data: "Our Team" },
  { id: 4, data: "Contact Us" },
];

const experties = [
  { id: 1, data: "Process Optimization" },
  { id: 2, data: "Debottlenecking" },
  { id: 3, data: "Cost Reduction" },
  { id: 4, data: "Sustainability Initiatives" },
  { id: 5, data: "Capacity Enhancement" },
];

const Footer = () => {
  return (
    <div className="mx-auto pt-20 bg-[#0E0E0E] text-[#F6F6F6]">
      <div className="max-w-7xl p-6 pt-10 grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto pb-20">
        <div className="w-full flex flex-col mb-6 md:mb-0">
          <h1 className="text-white font-semibold text-xl">
            Company Information
          </h1>
          <p className="mt-6 text-sm text-justify">
            Hebei Green Land Import & Export Co. Ltd. Since 2015, providing
            value-added services through International Trading, Engineering, and
            Consultancy.
          </p>
        </div>
        <div className="w-full flex flex-col gap-2 mb-6">
          <h1 className="text-white font-semibold mb-3 text-xl">Quick Links</h1>
          {links.map((item) => (
            <span key={item.id} className="flex items-center">
              <ChevronRight size={15} className="text-white" />
              <p className="text-sm font-semibold ml-2">{item.data}</p>
            </span>
          ))}
        </div>
        <div className="w-full flex flex-col gap-2 mb-6">
          <h1 className="text-white font-semibold mb-3 text-xl">
            Our Experties
          </h1>
          {experties.map((item) => (
            <span key={item.id} className="flex items-center">
              <ChevronRight size={15} className="text-white" />
              <p className="text-sm font-semibold ml-2">{item.data}</p>
            </span>
          ))}
        </div>
        <div className="w-full flex flex-col gap-2 mb-6">
          <h1 className="text-white font-semibold mb-3 text-xl">
            Our Services
          </h1>
          {services.map((item) => (
            <span key={item.id} className="flex items-center">
              <ChevronRight size={15} className="text-white" />
              <p className="text-sm font-semibold ml-2">{item.data}</p>
            </span>
          ))}
        </div>
      </div>
      <div className="bg-white max-w-7xl mx-auto h-[1px] w-full" />
      <div className="max-w-5xl flex flex-col md:flex-row justify-center items-center gap-3 md:gap-0 md:justify-between mx-auto text-center text-sm py-6 pb-16 md:pb-6">
        <div>Copyright © 2024 - Hebei Green Land Import and Export Co. Ltd</div>
        <div className="flex justify-center items-center gap-4">
          <FaFacebook size={20} className="text-white" />
          <BsYoutube size={20} className="text-white" />
          <BsInstagram size={20} className="text-white" />
        </div>
        <div className="flex">
          <p className="">Designed by</p>
          <p className="text-primary ml-1 underline">Wind Hans Technologies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
