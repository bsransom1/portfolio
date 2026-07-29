"use client";

import { useEffect } from "react";
import DeveloperHome from "./components/home/DeveloperHome";
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
      <DeveloperHome />
      <Footer />
    </main>
  );
}
