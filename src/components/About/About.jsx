import styles from "../../style";
import aboutImage from "../../assets/team1.webp";
import peopleValentín from "../../assets/people05.webp";
import Swal from "sweetalert2";
import { useState } from "react";

const About = () => {
   const [email, setEmail] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("sender", e.target.email.value);
      formData.append("subject", `New UltraCode Client`);
      formData.append("message", `${e.target.email.value} wants to contact you`);

      const endpoint = "https://ultracode-mailing.vercel.app/api/mail";
      const options = {
         method: "POST",
         body: formData,
      };
      try {
         const response = await fetch(endpoint, options);
         const resData = await response.json();
         if (response.status === 201) {
            setEmail("");
            Swal.fire({
               icon: "success",
               title: "Email Sent!",
               showConfirmButton: false,
               timer: 5000,
               customClass: {
                  popup: "rounded-3xl",
               },
               iconColor: "#3A7DE8",
            });
         }
      } catch (error) {
         console.error("Error sending email:", error);
      }
   };
   return (
      <>
         <section
            id="about"
            className={`flex md:flex-row flex-col  py-24 lg:pt-8 xl:pt-16 sm:pt-20 lg:mt-20 xl:mb-0 mb-0 md:mb-12`}
         >
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
               <div className="flex self-center md:self-start"></div>

               <div className="flex flex-col justify-between md:items-start items-center w-ful">
                  <h1 className={`text-center  ${styles.heading2} mb-3`}>About Us</h1>
                  <p className={`${styles.paragraph} `}>
                     Founded in 2022, UltraCode has been committed to providing nothing but the
                     best services to our customers. Our mission is to empower individuals and
                     businesses by providing state-of-the-art solutions because we believe in
                     the power of technology and its ability to simplify and enhance our lives.
                  </p>
               </div>
            </div>

            <div
               className={`flex-1 flex-col ${styles.flexCenter} md:my-0 my-10 relative pt-12`}
            >
               <img
                  src={aboutImage}
                  alt="img"
                  className="h-96 w-96 flex justify-center items-center text-center rounded-3xl"
               />

               {/* gradient start */}
               <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
               <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
               <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
               {/* gradient end */}
            </div>
         </section>
         <section
            className={`flex md:flex-row flex-col  md:py-24 lg:pt-8 xl:pt-16 sm:pt-20 xl:mb-0 mb-12`}
         >
            <div className="md:flex gap-20 xl:px-0 sm:px-16 px-6`">
               <section className="w-full max-w-3xl space-y-6 mb-10 ">
                  <h2 className={`text-center  ${styles.heading2}`}>Our Team</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                     <div className="flex flex-col items-center space-y-1">
                        <img
                           alt="Team Member 1"
                           className="w-20 h-20 rounded-full"
                           height="100"
                           src={peopleValentín}
                           style={{
                              aspectRatio: "100/100",
                              objectFit: "cover",
                           }}
                           width="100"
                        />
                        <h3 className="text-xl font-semibold text-white pt-2">Valentin</h3>
                        <p
                           className={`${styles.paragraph} flex justify-center items-center text-center pb-4 text-[#3A7DE8] `}
                        >
                           Team Leader
                        </p>
                        <p
                           className={`${styles.paragraph} flex justify-center items-center text-center `}
                        >
                           Valentin is our visionary Team leader and CEO
                        </p>
                     </div>
                     <div className="flex flex-col items-center space-y-1">
                        <img
                           alt="Team Member 2"
                           className="w-20 h-20 rounded-full"
                           height="100"
                           src={peopleValentín}
                           style={{
                              aspectRatio: "100/100",
                              objectFit: "cover",
                           }}
                           width="100"
                        />
                        <h3 className="text-xl font-semibold text-white pt-2">Lucas</h3>
                        <p
                           className={`${styles.paragraph} flex justify-center items-center text-center pb-4 text-[#3A7DE8] `}
                        >
                           CTO
                        </p>
                        <p
                           className={`${styles.paragraph} flex justify-center items-center text-center `}
                        >
                           Lucas is a tech enthusiast with a passion for problem-solving.
                        </p>
                     </div>
                     <div className="flex flex-col items-center space-y-1">
                        <img
                           alt="Team Member 3"
                           className="w-20 h-20 rounded-full"
                           height="100"
                           src={peopleValentín}
                           style={{
                              aspectRatio: "100/100",
                              objectFit: "cover",
                           }}
                           width="100"
                        />
                        <h3 className="text-xl font-semibold text-white pt-2">Demateo</h3>
                        <p
                           className={`${styles.paragraph} flex justify-center items-center text-center pb-4 text-[#3A7DE8] `}
                        >
                           CFO
                        </p>
                        <p
                           className={`${styles.paragraph} flex justify-center items-center text-center `}
                        >
                           Demateo has a keen eye for detail and is a wizard with numbers.
                        </p>
                     </div>
                  </div>
               </section>
               <section className="w-full max-w-3xl z-10 ">
                  <h2 className={`px-4 ${styles.heading2} mb-3 text-center`}>Get in touch</h2>
                  <p className={`${styles.paragraph} p-4 mb-3 w-full`}>
                     Interested in collaborating with us? We'd love to hear from you. Please
                     reach out to us via the contact form below or email us directly at
                     <span className="text-[#3A7DE8] pl-2">UltraCodeHR@gmail.com</span>.
                  </p>

                  <div className="flex flex-col gap-2">
                     <div className="w-full px-4 py-2">
                        <form
                           onSubmit={handleSubmit}
                           className="flex space-x-2 mb-5"
                           encType="multipart/form-data"
                        >
                           <input
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className=" rounded-lg p-2 flex justify-center items-center w-2/4 "
                              placeholder="Enter your email"
                              type="email"
                           />

                           <button
                              className="font-poppins font-medium text-[18px] mr-4 px-1 py-1 w-full md:w-fit rounded-full bg-blue-gradient  text-white"
                              type="submit"
                           >
                              <span className="transition ease-in-out delay-45 w-full block bg-[#121212] hover:bg-stone-700 rounded-full px-3 py-1 2xl:text-2xl 2xl:px-8 2xl:py-4">
                                 Send
                              </span>
                           </button>
                        </form>
                     </div>
                  </div>
               </section>
            </div>
         </section>
      </>
   );
};
export default About;
