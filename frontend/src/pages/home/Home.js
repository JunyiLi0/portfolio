import React from "react";
import AboutMe from "./AboutMe";
import AcademicProfile from "./AcademicProfile";
import ProfessionalExperience from "./ProfessionalExperience";
import Footer from "./Footer";
import ComputersCanvas from "../../components/canvas/computer";
import { FullPageScroll } from "../../components";

const Home = () => {
  return (
    <div>
      <div>
        <FullPageScroll />
      </div>
      <section
        id="about-me"
        className="relative w-full h-screen mx-auto home-section"
      >
        <AboutMe />
        <ComputersCanvas />
      </section>
      <section
        id="professional-experience"
        className="relative w-full h-screen mx-auto home-section"
      >
        <ProfessionalExperience />
      </section>
      <section
        id="academic-profile"
        className="relative w-full h-screen mx-auto home-section"
      >
        <AcademicProfile />
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
