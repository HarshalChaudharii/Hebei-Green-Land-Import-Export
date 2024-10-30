import { Link } from "react-router-dom";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/images/logo.png";

const MobileNav = () => {
  return (
    <div className="fixed w-full lg:hidden top-0 left-0 bg-gray-900 py-4 px-6 flex items-center justify-between shadow-md z-50">
      <div className="w-36">
        <img src={logo} alt="" className="w-full h-full object-cover" />
      </div>
      <Sheet>
        <SheetTrigger>
          <div className="p-2 rounded-md bg-gray-700 text-customBlue1 hover:bg-gray-800 transition">
            <Menu className="w-6 h-6" />
          </div>
        </SheetTrigger>
        <SheetContent className="bg-gray-900">
          <SheetHeader>
            <SheetTitle className="w-36  mb-8">
              <img src={logo} alt="" className="w-full h-full  object-cover" />
            </SheetTitle>
            <SheetDescription className="font-semibold">
              <nav className="items-start flex flex-col gap-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition"
                >
                  <SheetClose>Home</SheetClose>
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition"
                >
                  <SheetClose>About</SheetClose>
                </Link>
                <Link
                  to="/contact-us"
                  className="text-gray-300 hover:text-white transition"
                >
                  <SheetClose>Contact</SheetClose>
                </Link>
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
