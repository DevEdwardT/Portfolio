import React from "react";

export default function LandingProject({ label, buttonHref, bg }) {
  return (
    <article className="w-[100%] md:w-[45%] xl:w-[45%] 2xl:w-[30%]">
      <div className="flex justify-between align-middle py-5">
        <h3 className="font-open text-[28px] text-black font-regular text-center margin-0 padding-0 ">
          {label}
        </h3>
        <a
          href={buttonHref}
          target="_blank"
          className="block  hover:text-[#00B4D8] text-gray-400 font-medium  rounded-full font-sans text-[18px] tracking-[1px] text-center"
        >
          View website →
        </a>
      </div>

      <div
        className={`${bg} bg-cover w-[100%] h-[400px] rounded-[10px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] hover:scale-105 transition-all duration-[0.25s]`}
      ></div>
    </article>
  );
}
