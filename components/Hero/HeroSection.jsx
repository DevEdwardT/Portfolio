import React from "react";

export default function HeroSection() {
  return (
    <header className="bg-image bg-contain bg-center-top bg-fixed w-[100vw] h-[90vh] flex flex-col justify-center px-[24px] md:px-[32px] lg:px-[70px] xl:px-[140px] 2xl:px-[200px]">
      <div className="text-center lg:text-left w-[100%] lg:w-[40%]">
        <p className="text-[16px] font-bold text-gray-600">
          Frontend Developer & UI UX Designer
        </p>
        <h1 className="text-[56px] lg:text-[80px] font-black">
          Edward Telecan
        </h1>
        <p className="mb-[32px]">
          Hey there, I'm Edward Telecan—a software engineer with a knack for
          frontend development and UI/UX design. I specialize in bringing ideas
          to life through clean code and captivating user experiences. With a
          passion for innovation, I strive to create digital solutions that not
          only meet but exceed expectations. Join me on this journey as we
          navigate the ever-evolving landscape of technology, one line of code
          at a time.
        </p>

        <a
          href="#projects"
          className="bg-black hover:bg-[#00B4D8] text-white font-medium py-[10px] px-[20px] rounded-full font-sans text-[18px] tracking-[1px] mt-[40px] transition-all duration-[0.25s]"
        >
          Projects →
        </a>
      </div>
    </header>
    // <header className="w-full px-[40px] py-[20px] border-b-[1px] fixed top-0 left-0 bg-white z-50"></header>
  );
}
