const navData = {
  linkClass:
    "text-[16px] hover:text-[#00B4D8] font-medium block transition-all duration-[0.25s]",
  specialLinkClass:
    "bg-black hover:bg-[#00B4D8] text-white font-medium py-[10px] px-[20px] rounded-full font-sans text-[18px] tracking-[1px] transition-all duration-[0.25s]",
  entries: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Contact",
      href: "#contact",
      special: true,
    },
  ],
};

export default navData;
