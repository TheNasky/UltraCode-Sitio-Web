import { card, tech } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
   <section className={layout.section}>
      <div className={layout.sectionInfo}>
         <h2 className={styles.heading2}>
            Modern Technologies <br className="sm:block hidden" /> and high standards
         </h2>
         <p className={`${styles.paragraph} max-w-[470px] mb-4 mt-5`}>
            We seamlessly integrate Next-Gen technologies with industry best practices to boost
            the performance of your Apps to the next level
         </p>

         <Button styles={`mt-10 self-center sm:self-start`} />
      </div>

      <div className={layout.sectionImg}>
         <img src={tech} alt="billing" className="w-[100%] h-[100%]" />
      </div>
   </section>
);

export default CardDeal;
