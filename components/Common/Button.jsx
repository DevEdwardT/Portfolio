"use client";

import React from "react";

export default function Button() {
  return (
    <button
      href="#"
      className="bg-black hover:bg-[#00B4D8] text-white font-medium py-[10px] px-[20px] rounded-full font-sans text-[18px] tracking-[1px] ml-[56px]"
    >
      <a href={buttonHref} target="_blank">
        View website →
      </a>
    </button>
  );
}
