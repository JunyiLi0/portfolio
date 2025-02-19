import React from "react";
import AboutMe from "./AboutMe";
import AcademicProfile from "./AcademicProfile";
import ProfessionalExperience from "./ProfessionalExperience";
import Footer from "./Footer";
import ComputersCanvas from "../../components/canvas/computer";

const Home = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <AboutMe />
      <ComputersCanvas />
      <ProfessionalExperience />
      <AcademicProfile />
      <Footer />
    </section>
  );
};

export default Home;
