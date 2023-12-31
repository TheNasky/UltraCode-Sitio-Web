import styles from "../style";
import { ultraCodeLogo } from "../assets";

const WorkForUs = () => {
   return (
      <section
         id="home"
         className={`flex md:flex-row flex-col  py-24 lg:pt-8 xl:pt-16 sm:pt-20 `}
      >
         <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-col justify-between md:items-start items-center w-full ">
               Hola, Nena
            </div>
            <div className="flex self-center md:self-start">
               <p className={`${styles.paragraph} max-w-[470px] sm:px-0 mt-5`}>Textardo</p>
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
      </section>
   );
};

export default WorkForUs;
