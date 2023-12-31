import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
   <div
      className={`flex flex-row p-6 rounded-[20px] ${
         index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
   >
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-[#4F4C56]`}>
         <img src={icon} alt="idea" className="w-[75%] h-[75%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
         <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
            {title}
         </h4>
         <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
            {content}
         </p>
      </div>
   </div>
);

const Business = () => (
   <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
         <h2 className={`text-center sm:text-start ${styles.heading2}`}>
            You get the ideas, <br className="sm:block hidden" /> we make them a reality
         </h2>
         <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-4`}>
            Our team of expert developers is ready to turn your vision into reality. Whether
            it's a sleek website, a powerful app, or innovative software, we've got you
            covered.
         </p>

         <Button styles={`mt-10 self-center sm:self-start`} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
         {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
         ))}
      </div>
   </section>
);

export default Business;
