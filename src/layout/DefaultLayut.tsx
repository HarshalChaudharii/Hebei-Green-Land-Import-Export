import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import React from "react";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <div className="w-full mx-auto overflow-hidden bg-transparent">
      <div className="relative flex flex-col items-center justify-center">
        <Navbar />
        <MobileNav />
      </div>

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main className="w-full h-auto">{props.children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
