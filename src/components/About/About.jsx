import styles from "../../style";
import aboutImage from "../../assets/aboutImg.svg";
import peopleImage from "../../assets/people01.png";

const About = () => {
   const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
         sender: e.target.email.value,
         message: `${e.target.email.value} wants to contact you`,
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = "https://ultracode-mailing.onrender.com/api/mails/";
      const options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSONdata,
      };
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
         console.log("Message sent.");
      }
   };
   return (
      <section
         id="home"
         className={` flex-col px-16 py-24 lg:pt-20 xl:pt-16 sm:pt-20 gap-10`}
      >
         <div className={`md:flex  ${styles.flexStart}   `}>
            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[40%] h-[40%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
            <section className="w-full md:flex space-y-6 mb-16 gap-20 justify-center items-center text-center">
               <div className="w-full">
                  <h1 className={`text-center  ${styles.heading2} mb-3`}>
                     About Us
                  </h1>
                  <p className={`${styles.paragraph} `}>
                     Founded in 2022, UltraCode has been committed to providing nothing but the
                     best services to our customers. Our mission is to empower individuals and
                     businesses by providing state-of-the-art solutions because we believe in the
                     power of technology and its ability to simplify and enhance our lives.
                  </p>
               </div>
               <div className="w-full flex justify-center items-center text-center">
                  <img
                     src={aboutImage}
                     alt="img"
                     className="h-96 w-96 flex justify-center items-center text-center"
                  />
               </div>
            </section>

         </div>

         <div className={` ${styles.flexCenter} md:my-0 my-6 relative  `}>
            <div className="md:flex gap-20">
               <section className="w-full max-w-3xl space-y-6 mb-10 ">
                  <h2 className={`text-center  ${styles.heading2}`}>Our Team</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                     <div className="flex flex-col items-center space-y-2">
                        <img
                           alt="Team Member 1"
                           className="w-24 h-24 rounded-full"
                           height="100"
                           src={peopleImage}
                           style={{
                              aspectRatio: "100/100",
                              objectFit: "cover",
                           }}
                           width="100"
                        />
                        <h3 className="text-xl font-semibold text-white">Valentin</h3>
                        <p className={`${styles.paragraph} flex justify-center items-center text-center `}>CEO and Team Leader</p>
                        <p className={`${styles.paragraph} flex justify-center items-center text-center `}>
                           Valentin is a visionary with 3 years of experience in the tech
                           industry.
                        </p>
                     </div>
                     <div className="flex flex-col items-center space-y-2">
                        <img
                           alt="Team Member 2"
                           className="w-24 h-24 rounded-full"
                           height="100"
                           src={peopleImage}
                           style={{
                              aspectRatio: "100/100",
                              objectFit: "cover",
                           }}
                           width="100"
                        />
                        <h3 className="text-xl font-semibold text-white">Lucas</h3>
                        <p className={`${styles.paragraph} flex justify-center items-center text-center `}>CTO</p>
                        <p className={`${styles.paragraph} flex justify-center items-center text-center `}>
                           Lucas is a tech enthusiast with a passion for problem-solving.
                        </p>
                     </div>
                     <div className="flex flex-col items-center space-y-2">
                        <img
                           alt="Team Member 3"
                           className="w-24 h-24 rounded-full"
                           height="100"
                           src={peopleImage}
                           style={{
                              aspectRatio: "100/100",
                              objectFit: "cover",
                           }}
                           width="100"
                        />
                        <h3 className="text-xl font-semibold text-white">Demateo</h3>
                        <p className={`${styles.paragraph} flex justify-center items-center text-center `}>CFO</p>
                        <p className={`${styles.paragraph} flex justify-center items-center text-center `}>
                           Demateo has a keen eye for detail and is a wizard with numbers.
                        </p>
                     </div>
                     <div className="flex flex-col items-center space-y-2">
                        <img
                           alt="Team Member 3"
                           className="w-24 h-24 rounded-full"
                           height="100"
                           src={peopleImage}
                           style={{
                              aspectRatio: "100/100",
                              objectFit: "cover",
                           }}
                           width="100"
                        />
                        <h3 className="text-xl font-semibold text-white">Demateo</h3>
                        <p className={`${styles.paragraph} flex justify-center items-center text-center `}>CFO</p>
                        <p className={`${styles.paragraph} flex justify-center items-center text-center `}>
                           Demateo has a keen eye for detail and is a wizard with numbers.
                        </p>
                     </div>
                  </div>
               </section>
               <section className="w-full max-w-3xl   z-10 ">
                  <p className={`${styles.paragraph} flex justify-center items-center text-center mb-3`}>
                     Interested in collaborating with us? We'd love to hear from you. Please reach
                     out to us via the contact form or email us directly.
                  </p>
                  <p className={`${styles.paragraph} md:flex justify-center items-center text-center mb-3`}>
                     Or contact us at <br />
                     <a
                        href={`mailto:UltraCodeHR@gmail.com`}
                        target="_blank"
                        className="text-[#3A7DE8] pl-2"
                     >
                        UltraCodeHR@gmail.com
                     </a>
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                     <h2 className={`text-center  ${styles.heading2} mb-3`}>
                        Get in touch
                     </h2>
                     <p className={`${styles.paragraph} flex justify-center items-center text-center mb-3`}>
                        We'd love to hear from you. Send us a message and we'll get back to you as
                        soon as possible.
                     </p>
                     <div className="w-full  flex justify-center items-center ">
                        <form onSubmit={handleSubmit} className="flex space-x-2 mb-5">
                           <input
                              name="email"
                              className=" rounded-lg p-2 flex justify-center items-center "
                              placeholder="Enter your email"
                              type="email"
                           />
                           <button
                              className="bg-white p-1 rounded-lg cursor-pointer hover:bg-[#080A17] hover:text-white duration-300 ease-in-out"
                              type="submit"
                           >
                              Send
                           </button>
                        </form>

                     </div>
                  </div>
               </section>


            </div>


         </div>
      </section>
   );
};
export default About;
