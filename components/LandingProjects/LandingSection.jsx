import React from "react";
import landingContent from "@/components/LandingProjects/landingContent";
import LandingProject from "./LandingProject";
export default function LandingSection() {
  return (
    <div className="flex flex-wrap justify-start align-middle gap-x-16 gap-y-20 row-gas w-[100dvw] p-[90px] relative">
      {landingContent.map((item) => (
        <LandingProject key={item.label} {...item} />
      ))}
    </div>
  );
}
