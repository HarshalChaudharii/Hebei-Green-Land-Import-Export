import Hero from "./Hero";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import Banner from "../Banner";
import Methodology from "./Methodology";
import Expertise from "./Experties";
import WhyChoose from "./WhyChoose";
import ProjectHighlights from "./ProjectHighlights";
import Sponsorship from "./Sponsership";
// import Team from "./Team";
import ProjectCategories from "./ProjectCategories";
import ProjectCategories2 from "./ProjectCategories2";
import Banner2 from "@/components/Banner2";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <AboutUs />
      <Banner />
      <OurServices />
      <ProjectCategories />
      <ProjectCategories2 />
      <Expertise />
      <Methodology />
      <Sponsorship />
      <ProjectHighlights />
      <Banner2 />
      <WhyChoose />
      {/* <Team /> */}
    </div>
  );
};

export default HomePage;
