import styles from "../../style";
import ButtonAbout from "../ButtonAbout";
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
         className={`flex md:flex-row flex-col  py-24 lg:pt-20 xl:pt-16 sm:pt-20 gap-10`}
      >
         <div className={`flex-1 ${styles.flexStart} flex-col px-10 py-20 `}>
            <section className="w-full max-w-3xl space-y-6 mb-16">
               <h1 className="text-3xl lg:text-7xl font-bold text-center text-white">
                  About Us
               </h1>
               <p className="text-lg text-gray-600 dark:text-gray-400 ">
                  Founded in 2022, UltraCode has been committed to providing nothing but the
                  best services to our customers. Our mission is to empower individuals and
                  businesses by providing state-of-the-art solutions because we believe in the
                  power of technology and its ability to simplify and enhance our lives.
               </p>
            </section>
            <section className="w-full max-w-3xl space-y-6 mt-10 md:mt-10 ">
               <h2 className="text-3xl font-bold text-center text-white">Our Team</h2>
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
                     <p className="text-sm text-gray-500 ">CEO and Team Leader</p>
                     <p className="text-sm text-gray-600 dark:text-gray-400">
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
                     <p className="text-sm text-gray-500">CTO</p>
                     <p className="text-sm text-gray-600 dark:text-gray-400">
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
                     <p className="text-sm text-gray-500">CFO</p>
                     <p className="text-sm text-gray-600 dark:text-gray-400">
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
                     <p className="text-sm text-gray-500">CFO</p>
                     <p className="text-sm text-gray-600 dark:text-gray-400">
                        Demateo has a keen eye for detail and is a wizard with numbers.
                     </p>
                  </div>
               </div>
            </section>
         </div>

         <div className={`flex-1 flex-col ${styles.flexCenter} md:my-0 my-6 relative `}>
            <img
               src={aboutImage}
               alt="img"
               className="absolute top-0 md:left-6 w-60 md:w-96 h-auto lg:w-96"
            />
            <section className="w-full max-w-3xl mt-80 sm:mt- md:mt-32 xl:mt-44 space-y-6 px-5 z-10 ">
               <p className="text-lg text-gray-600 dark:text-gray-400">
                  Interested in collaborating with us? We'd love to hear from you. Please reach
                  out to us via the contact form or email us directly.
               </p>
               <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white mb-5">
                     Get in touch
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mb-5">
                     We'd love to hear from you. Send us a message and we'll get back to you as
                     soon as possible.
                  </p>
                  <div className="w-full max-w-sm space-y-2">
                     <form onSubmit={handleSubmit} className="flex space-x-2 mb-5">
                        <input
                           name="email"
                           className="max-w-lg flex-1 rounded-lg p-2"
                           placeholder="Enter your email"
                           type="email"
                        />
                        <button
                           className="bg-white p-1 rounded-lg cursor-pointer"
                           type="submit"
                        >
                           Send
                        </button>
                     </form>
                     <p className="text-xs text-gray-500 dark:text-gray-400">
                        Or contact us at <br />
                        <a
                           href={`mailto:UltraCodeHR@gmail.com`}
                           target="_blank"
                           className="text-[#3A7DE8] pl-1"
                        >
                           UltraCodeHR@gmail.com
                        </a>
                     </p>
                  </div>
               </div>
            </section>

            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[40%] h-[40%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
         </div>
      </section>
   );
};
export default About;
