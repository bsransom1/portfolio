"use client";

import { useEffect } from "react";
import LinkedInFeed from "./components/feed/LinkedInFeed";
import PhotoAccordion from "./components/home/PhotoAccordion";
import Footer from "./components/layout/Footer";

export default function Home() {
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("homepage-scroll");
    if (savedScroll) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScroll, 10));
        sessionStorage.removeItem("homepage-scroll");
      }, 100);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <LinkedInFeed />
      <PhotoAccordion sectionClassName="pt-8 pb-16 md:pt-12 md:pb-20" />
      <Footer />
    </main>
  );
}
