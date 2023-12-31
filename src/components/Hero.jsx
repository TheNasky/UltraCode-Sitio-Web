import styles from "../style";
import { discount, robot, ultraCodeLogo } from "../assets";
import GetStarted from "./GetStarted";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
   return (
      <section id="home" className={`flex md:flex-row flex-col  py-24 lg:pt-8 xl:pt-16 sm:pt-20 `}>
         <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex self-center md:self-start">
               <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                  <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                  <p className={`${styles.paragraph} ml-2`}>
                     <span className="text-white">20%</span> Discount For{" "}
                     <span className="text-white">Landing Pages </span>Code:
                     <span className="text-white"> ULTRA</span>
                  </p>
               </div>
            </div>

            <div className="flex flex-col justify-between items-center w-full md:w-3/4">
               <h1 className="flex-1 text-center font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[75px] leading-[75px]">
                  We Make <br className="sm:block" />{" "}
                  <span className="text-gradient">Your Apps</span>{" "}
               </h1>

               <h1 className="font-poppins font-semibold flex justify-center ss:text-[68px] text-[52px] text-white ss:leading-[75px] leading-[75px] w-full">
                  <TypeAnimation
                     sequence={[
                        "Powerful",
                        2500,
                        "Adaptable",
                        2500,
                        "Elegant",
                        2500,
                        "BETTER",
                        2500,
                     ]}
                     wrapper="span"
                     speed={25}
                     style={{ fontSize: "1em", display: "inline-block" }}
                  />
               </h1>
            </div>
            <div className="flex self-center md:self-start">
               <p className={`${styles.paragraph} max-w-[470px] sm:px-0 mt-5`}>
                  Empowering every business, regardless of size, with the chance to innovate
                  and make their ideas come to life. That's our mission.
               </p>
            </div>
         </div>

         <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img
               src={ultraCodeLogo}
               alt="billing"
               className="w-[100%] h-[100%] relative z-[5]"
            />

            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
         </div>

         <div className={`ss:hidden ${styles.flexCenter}`}>
            <GetStarted />
         </div>
      </section>
   );
};

export default Hero;
