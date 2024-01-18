import styles from "../../style";
import Swal from "sweetalert2";

const WorkWithUs = () => {
   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("sender", e.target.email.value);
      formData.append("subject", "New person looking for work");
      formData.append("message", `${e.target.email.value} wants to work at UltraCode`);
      formData.append("name", e.target.name.value);
      formData.append("lastName", e.target.lastName.value);
      formData.append("goals", e.target.goals.value);
      formData.append("country", e.target.country.value);
      formData.append("file", e.target.resume.files[0]);

      const endpoint = "https://ultracode-mailing.vercel.app/api/mail";
      const options = {
         method: "POST",
         body: formData,
      };
      try {
         const response = await fetch(endpoint, options);
         const resData = await response.json();
         if (response.status === 201) {
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
      <section
         id="home"
         className={`flex md:flex-row flex-col  py-24 lg:pt-8 xl:pt-16 sm:pt-20 mt-14 xl:mt-44 xl:mb-36 `}
      >
         <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex self-center md:self-start"></div>

            <div className="flex flex-col justify-between md:items-start items-center w-full mt-12 mb-12">
               <h1 className="flex-1 text-center md:text-start font-poppins font-semibold ss:text-[52px] text-[42px] text-white ss:leading-[75px] leading-[75px]">
                  Join our team! We are eager to{" "}
                  <span className="border-b-4 border-[#3A7DE8]">meet you</span>{" "}
               </h1>
            </div>
            <div className="flex self-center md:self-start">
               <div className="sm:flex flex-1 text-center md:text-start font-poppins font-semibold text-[15px] hidden text-white ss:leading-[75px] leading-[75px]">
                  you can also contact us at{" "}
                  <a
                     href={`mailto:UltraCodeHR@gmail.com`}
                     target="_blank"
                     className="text-[#3A7DE8] pl-1"
                  >
                     UltraCodeHR@gmail.com
                  </a>
               </div>
            </div>
         </div>

         <div className={`flex-1 flex-col ${styles.flexCenter} md:my-0 my-10 relative`}>
            <form
               onSubmit={handleSubmit}
               className="w-full max-w-lg  z-10 bg-white p-10 rounded-xl"
               encType="multipart/form-data"
            >
               <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full px-3 mb-3">
                     <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-email"
                     >
                        Email*
                     </label>
                     <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-email"
                        type="email"
                        placeholder="UltraCodeHR@gmail.com"
                        name="email"
                        required
                     />
                  </div>
               </div>

               <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full px-3 mb-3">
                     <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-goals"
                     >
                        tell us who you are*
                     </label>
                     <textarea
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-goals"
                        placeholder="Introduce yourself here..."
                        name="goals"
                        required
                     ></textarea>
                  </div>
               </div>

               <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                     <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                     >
                        First Name*
                     </label>
                     <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-first-name"
                        type="text"
                        placeholder="John"
                        name="name"
                        required
                     />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                     <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                     >
                        Last Name*
                     </label>
                     <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Smith"
                        name="lastName"
                        required
                     />
                  </div>
               </div>

               <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                     <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-country"
                     >
                        Country*
                     </label>
                     <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-country"
                        type="text"
                        placeholder="Your Country"
                        name="country"
                        required
                     />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                     <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-company"
                     >
                        Your Resume*
                     </label>
                     <input
                        className="text-xs appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-company"
                        type="file"
                        accept=".pdf,.docx"
                        name="resume"
                        required
                     />
                  </div>
               </div>
               <button
                  type="submit"
                  className="font-poppins font-medium text-[15px] mr-4 px-1 py-1 w-full md:w-full rounded-full bg-blue-gradient  text-white mt-3"
               >
                  <span className="transition ease-in-out delay-45 w-full block bg-[#121212] hover:bg-stone-700 rounded-full px-6 py-3 2xl:text-2xl 2xl:px-8 2xl:py-4">
                     Send
                  </span>
               </button>
            </form>

            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
         </div>
      </section>
   );
};

export default WorkWithUs;
