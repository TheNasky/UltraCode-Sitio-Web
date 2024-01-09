import { apple, projects2, google } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button.jsx";

const Designs = () => (
   <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
         <img
            src={projects2}
            alt="billing"
            className="w-[80%] h-[80%] relative z-[5] rounded-full"
         />

         {/* gradient start */}
         <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
         <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
         {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
         <h2 className={styles.heading2}>
            Creative Designs <br className="sm:block hidden" /> for Creative Ideas
         </h2>
         <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-4`}>
            You envision it, we design it. We provide an infinite variety of custom designs and
            styles to fit <span className={`${styles.paragraph} text-gradient`}>all </span>{" "}
            your needs
         </p>

         <Button styles={`mt-10 self-center sm:self-start`} />
      </div>
   </section>
);

export default Designs;
