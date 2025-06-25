import React from "react";

function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative bg-gradient-to-r from-[#10A4A0] to-[#02A17A] py-1 lg:py-2 rounded-full shadow-sm w-full cursor-pointer overflow-hidden text-white font-medium after:absolute after after:content-[''] after:top-0 after:left-0 after:w-0 hover:after:w-full after:transition-all after:duration-600 after:h-20 after:bg-white/15 after:z-4 after:shadow-md"
    >
      <span className="relative z-10 text-base uppercase tracking-[3px] md:text-xl">{label}</span>
    </button>
  );
}

export default Button;
