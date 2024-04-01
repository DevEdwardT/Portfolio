import React from "react";
import navData from "./navData";
export default function Navbar() {
  return (
    <nav className="w-[100vw] flex justify-between align-middle px-[24px] md:px-[32px] lg:px-[70px] xl:px-[140px] 2xl:px-[200px] py-[15px] bg-white">
      <h3 className="font-open text-[24px] text-[#00B4D8] font-semibold text-left">
        {"<dE/>"}
      </h3>
      <ul>
        {navData.entries.map((entry) => (
          <li
            key={entry.label}
            className="hidden md:inline-block mr-[40px] last:mr-0"
          >
            <a
              href={entry.href}
              className={
                entry.special ? navData.specialLinkClass : navData.linkClass
              }
            >
              {entry.label}
            </a>
          </li>
        ))}
      </ul>
      {/* <div className="flex items-center justify-between ">
        <nav>
       
        <a
          href="#about"
          className="mr-[40px] text-[16px] hover:text-[#00B4D8] hidden tt:inline-block"
        >
          About
        </a>
        <a
          href="#projects"
          className="mr-[40px] text-[16px] hover:text-[#00B4D8] hidden tt:inline-block"
        >
          Projects
        </a>
        <button
          href="#contact"
          className="bg-black hover:bg-[#00B4D8] text-white font-medium py-[10px] px-[20px] rounded-full font-sans text-[18px] tracking-[1px]"
        >
          <a href="#contact">Contact me</a>
        </button>
      </nav>
      </div> */}
    </nav>
  );
}
