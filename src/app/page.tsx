import React from "react";
import HeroSection from "../components/landingPageComponents/HeroSection";
import FeaturesSection from "../components/landingPageComponents/FeaturesSection";
import GetStartedSection from "../components/landingPageComponents/GetStartedSection";
import WhyChooseUsSection from "../components/landingPageComponents/WhyChooseUsSection";

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
