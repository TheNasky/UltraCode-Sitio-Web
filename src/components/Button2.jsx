import React from "react";

const Button2 = ({ styles }) => (
   <button
      onClick={() => scrollToSection("#contact", -130)}
      className="font-poppins font-medium text-[18px] mr-4 px-1 py-1 w-full md:w-fit rounded-full bg-blue-gradient  text-white mt-3"
   >
      <a
         href="/contact"
         className="transition ease-in-out delay-45 w-full block bg-[#121212] hover:bg-stone-700 rounded-full px-6 py-3 2xl:text-2xl 2xl:px-8 2xl:py-4"
      >
         Contact Us
      </a>
   </button>
);

export default Button2;
