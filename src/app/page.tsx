import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import GetStartedSection from "../components/GetStartedSection";
import Footer from "../components/Footer";
import WhyChooseUsSection from "../components/WhyChooseUsSection";

const Page = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex  h-full grow flex-col">
        <HeroSection />
        <FeaturesSection />

        <WhyChooseUsSection />
        <GetStartedSection />
      </div>
    </div>
  );
};

export default Page;
