import styles from "../../style.js";
import { Footer, Navbar} from "../index.js";
import About from "./About.jsx";
import ScrollUpButton from "../ScrollUpButton.jsx";

const App = () => (
   <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
            <Navbar />
         </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
            <About/>
            <ScrollUpButton />
         </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
            <Footer />
         </div>
      </div>
   </div>
);

export default App;
