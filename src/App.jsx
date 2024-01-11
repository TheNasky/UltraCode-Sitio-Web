import styles from "./style";
import {
   Designs,
   Business,
   Technologies,
   Clients,
   CTA,
   Footer,
   Navbar,
   Stats,
   Testimonials,
   Hero,
   ContactForm,
} from "./components";
import ScrollUpButton from "./components/ScrollUpButton.jsx";

const App = () => (
   <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
            <Navbar />
            
         </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
            <Hero />
            <ScrollUpButton />
         </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Designs />
            <Technologies />
            <Testimonials />
            <CTA />

            <Footer />
         </div>
      </div>
   </div>
);

export default App;
