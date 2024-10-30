import { Facebook, Mail, Phone } from "lucide-react";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Header = () => {
  return (
    <div className="fixed text-xs lg:text-sm top-0 z-20 w-full lg:w-[85%]  flex items-center justify-between text-white">
      {" "}
      {/* Fixed position */}
      <div className="w-full ml-3 flex gap-3 h-6 items-center">
        <span className="flex items-center justify-center">
          <Mail size={15} />
          <p className="ml-2 cursor-pointer">
            Hebei Green Land Import & Export Co. Ltd
          </p>
        </span>
        <span className="flex items-center justify-center">
          <Phone size={15} />
          <p className="ml-2">+918007777486</p>
        </span>
      </div>
      <div className="flex w-full gap-2  justify-end mr-3">
        <Facebook size={15} />
        <TwitterLogoIcon scale={20} />
        <InstagramLogoIcon scale={20} />
        <LinkedInLogoIcon scale={20} />
      </div>
    </div>
  );
};

export default Header;
