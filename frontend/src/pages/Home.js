import React from "react";
import ComputersCanvas from "../components/canvas/computer";

const Home = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">About Me</h1>
        <p className="text-gray-700">
          Hi, I'm Junyi Li, a passionate software engineer specializing in AI
          and Data Science. I love solving complex problems and creating
          impactful solutions. Welcome to my portfolio!
        </p>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Home;
