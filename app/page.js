"use client";

import { useRef, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import HeroSection from "../components/HeroSection.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Directors from "../components/Directors.jsx";
import ShowReel from "../components/ShowReel.jsx";
import { PageWrapper } from "./page-wrapper.jsx";

export default function Home() {
  const showReelRef = useRef(null);
  const directorsRef = useRef(null);
  const heroSectionRef = useRef(null);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  function scrollToShowReel() {
    showReelRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      // block: 'nearest',
      // inline: 'center'
    });
  }

  function scrollToDirectors() {
    directorsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      // block: 'nearest',
      // inline: 'center'
    });
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { width, height } = windowDimensions;

  let cellLandscape = null;
  width > height && width < 960
    ? (cellLandscape = true)
    : (cellLandscape = false);

  // console.log(`cellLandscape = `, cellLandscape)

  return (
    <PageWrapper>
      <HeroSection
        scrollToRef={scrollToShowReel}
        cellLandscape={cellLandscape}
      />
      <ShowReel
        scrollToRef={scrollToDirectors}
        sectionRef={showReelRef}
        cellLandscape={cellLandscape}
      />
      <Directors sectionRef={directorsRef} />
      <Testimonials />
      <Box pt={200} />
    </PageWrapper>
  );
}
