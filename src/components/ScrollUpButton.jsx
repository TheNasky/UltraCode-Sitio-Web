import { useEffect, useState } from "react";

const ScrollUpButton = () => {
   const [isVisible, setIsVisible] = useState(false);

   const handleScroll = () => {
      if (window.scrollY > 100) {
         setIsVisible(true);
      } else {
         setIsVisible(false);
      }
   };

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <button
         className={`${
            isVisible ? "block" : "hidden"
         } fixed bottom-4 right-4 p-2 md:p-3 2xl:p-5 2xl:mb-6 2xl:mr-6 bg-blue-gradient z-40 text-white rounded-full cursor-pointer`}
         onClick={scrollToTop}
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 2xl:w-10 2xl:h-10"
         >
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
         </svg>
      </button>
   );
};

export default ScrollUpButton;
