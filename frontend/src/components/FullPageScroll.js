import React, { useState, useEffect, useRef, useCallback } from "react"; // Added useCallback import

const SCROLL_LOCK_DURATION = 500;
const TOTAL_SECTIONS = 5;

const FullPageScroll = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const touchStartY = useRef(0);
  const prevScrollY = useRef(0);
  const scrollTimeout = useRef(null);
  const isScrolling = useRef(false);
  const currentSectionRef = useRef(currentSection);

  useEffect(() => {
    currentSectionRef.current = currentSection;
  }, [currentSection]);

  const sections = Array.from({ length: TOTAL_SECTIONS }, (_, index) => (
    <div
      key={index}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        backgroundColor: `hsl(${index * 60}, 70%, 50%)`,
      }}
    >
      Section {index + 1}
    </div>
  ));

  const totalSectionHeight = TOTAL_SECTIONS * window.innerHeight;

  const scrollToSection = useCallback((targetSection) => {
    if (targetSection < 0 || targetSection >= TOTAL_SECTIONS) return;

    clearTimeout(scrollTimeout.current);
    isScrolling.current = true;

    window.scrollTo({
      top: targetSection * window.innerHeight,
      behavior: "smooth",
    });

    setCurrentSection(targetSection);
    scrollTimeout.current = setTimeout(() => {
      isScrolling.current = false;
    }, SCROLL_LOCK_DURATION);
  }, []);

  const handleScrollNavigation = useCallback(
    (direction) => {
      if (isScrolling.current) return;

      const newSection =
        currentSectionRef.current + (direction === "down" ? 1 : -1);

      if (newSection < 0 || newSection >= TOTAL_SECTIONS) return;

      scrollToSection(newSection);
    },
    [scrollToSection]
  );

  const handleWheel = useCallback(
    (e) => {
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      const currentY = window.scrollY;
      const direction = e.deltaY > 0 ? "down" : "up";

      const shouldHandle =
        ((direction === "down" &&
          currentSectionRef.current < TOTAL_SECTIONS - 1) ||
          (direction === "up" && currentSectionRef.current > 0)) &&
        currentY < totalSectionHeight;

      if (shouldHandle) {
        e.preventDefault();
        handleScrollNavigation(direction);
      }
    },
    [totalSectionHeight, handleScrollNavigation]
  );

  const handleTouchStart = useCallback((e) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      const currentY = window.scrollY;
      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;
      const direction = deltaY > 0 ? "down" : "up";

      const shouldHandle =
        ((direction === "down" &&
          currentSectionRef.current < TOTAL_SECTIONS - 1) ||
          (direction === "up" && currentSectionRef.current > 0)) &&
        currentY < totalSectionHeight;

      if (shouldHandle) {
        e.preventDefault();
        handleScrollNavigation(direction);
      }
    },
    [totalSectionHeight, handleScrollNavigation]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;

      const currentY = window.scrollY;
      const isInSectionArea = currentY < totalSectionHeight;

      if (prevScrollY.current >= totalSectionHeight && isInSectionArea) {
        scrollToSection(TOTAL_SECTIONS - 1);
      }

      if (isInSectionArea) {
        const newSection = Math.min(
          Math.round(currentY / window.innerHeight),
          TOTAL_SECTIONS - 1
        );
        setCurrentSection(newSection);
      }

      prevScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalSectionHeight, scrollToSection]);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      clearTimeout(scrollTimeout.current);
    };
  }, [handleWheel, handleTouchStart, handleTouchMove]);

  return <div>{sections}</div>;
};

export default FullPageScroll;
