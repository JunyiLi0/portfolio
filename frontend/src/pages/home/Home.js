import React from "react";
import AboutMe from "./AboutMe";
import AcademicProfile from "./AcademicProfile";
import ProfessionalExperience from "./ProfessionalExperience";
import Footer from "./Footer";
import ComputersCanvas from "../../components/canvas/computer";

const Home = () => {
  return (
    <div>
      <script src="/home/junyi/portfolio/frontend/src/components/FullPageScroll.js"></script>
      <section className="relative w-full h-screen mx-auto">
        <AboutMe />
      </section>
      <section className="relative w-full h-screen mx-auto">
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
