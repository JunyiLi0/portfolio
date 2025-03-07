import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-gray-800 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center hover:scale-125 transition-all duration-300">
              <a href="/">
                <img className="h-12 w-auto rounded-md" src={logo} alt="Logo" />
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <ScrollLink
                  to="about-me"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-50}
                  activeClass="bg-gray-700 text-white"
                  className={`rounded-md px-3 py-3 text-sm font-medium ${
                    activeSection === "about-me"
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onSetActive={() => setActiveSection("about-me")}
                >
                  About Me
                </ScrollLink>
                <ScrollLink
                  to="professional-experience"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-50}
                  activeClass="bg-gray-700 text-white"
                  className={`rounded-md px-3 py-3 text-sm font-medium ${
                    activeSection === "professional-experience"
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onSetActive={() =>
                    setActiveSection("professional-experience")
                  }
                >
                  Professional Experience
                </ScrollLink>
                <ScrollLink
                  to="academic-profile"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-50}
                  activeClass="bg-gray-700 text-white"
                  className={`rounded-md px-3 py-3 text-sm font-medium ${
                    activeSection === "academic-profile"
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onSetActive={() => setActiveSection("academic-profile")}
                >
                  Academic Profile
                </ScrollLink>
                <Link
                  to="/projects"
                  className="rounded-md px-3 py-3 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            to="/projects"
            className="rounded-md px-3 py-3 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </Link>
          <ScrollLink
            to="about-me"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            activeClass="bg-gray-700 text-white"
            className={`rounded-md px-3 py-2 text-sm font-medium ${
              activeSection === "about-me"
                ? "bg-gray-700 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
            onSetActive={() => setActiveSection("about-me")}
          >
            About Me
          </ScrollLink>
          <ScrollLink
            to="professional-experience"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            activeClass="bg-gray-700 text-white"
            className={`rounded-md px-3 py-2 text-sm font-medium ${
              activeSection === "professional-experience"
                ? "bg-gray-700 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
            onSetActive={() => setActiveSection("professional-experience")}
          >
            Professional Experience
          </ScrollLink>
          <ScrollLink
            to="academic-profile"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            activeClass="bg-gray-700 text-white"
            className={`rounded-md px-3 py-2 text-sm font-medium ${
              activeSection === "academic-profile"
                ? "bg-gray-700 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
            onSetActive={() => setActiveSection("academic-profile")}
          >
            Academic Profile
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
}
