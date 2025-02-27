import React from "react";
import AboutMe from "./AboutMe";
import AcademicProfile from "./AcademicProfile";
import ProfessionalExperience from "./ProfessionalExperience";
import Footer from "./Footer";
import ComputersCanvas from "../../components/canvas/computer";
import { FullPageScroll } from "../../components";

const Home = () => {
  return (
    <div className="main-content">
      <div>
        <FullPageScroll />
      </div>
      <section className="relative w-full h-screen mx-auto">
        <AboutMe />
        <ComputersCanvas />
      </section>
      <section className="relative w-full h-screen mx-auto">
        <ProfessionalExperience />
      </section>
      <section className="relative w-full h-screen mx-auto">
        <AcademicProfile />
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
