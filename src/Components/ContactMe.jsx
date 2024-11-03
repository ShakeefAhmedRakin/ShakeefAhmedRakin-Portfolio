import { TbBrandGithub } from "react-icons/tb";
import { CiLinkedin } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Successfully sent!");
          } else {
            toast.error("An Error has occurred!");
          }
        },
        () => {
          toast.error("An Error has occurred!");
        }
      );
  };

  return (
    <>
      <div className="flex flex-col gap-x-5 gap-y-10 md:flex-row">
        {/* Left Section */}
        <div className="flex-1 font-text" data-aos="fade-up">
          <h1 className="pl-6 mb-3 font-bold text-lg md:text-xl lg:text-2xl">
            Reach me!
          </h1>
          <p className="border-l-4 border-primary mb-8 pl-5 text-sm lg:text-base">
            {
              "I'm thrilled to connect with you! Whether you have a project in mind, want to collaborate, or simply want to say hello, feel free to reach out. You can contact me through the following channels."
            }
          </p>
          <div className="pl-6">
            <a
              href="mailto:shakeef.rakin321@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-text font-bold flex items-center gap-2 underline underline-offset-4 mb-6 text-xs md:text-base"
            >
              <IoMailOutline className="text-2xl"></IoMailOutline>
              shakeef.rakin321@gmail.com
            </a>
            <div className="flex gap-8 flex-wrap">
              <a
                href="https://github.com/ShakeefAhmedRakin"
                target="_blank"
                rel="noopener noreferrer"
                className="font-text font-bold flex items-center gap-2 underline underline-offset-4 text-xs md:text-base"
              >
                <TbBrandGithub className="text-2xl"></TbBrandGithub>GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shakeef-ahmed-rakin-269548242/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-text font-bold flex items-center gap-2 underline underline-offset-4 text-xs md:text-base"
              >
                <CiLinkedin className="text-3xl"></CiLinkedin>LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div
          className="flex-1 border-l-4 border-primary pl-6"
          data-aos="fade-down" // AOS animation
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-8 font-text">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Your Name"
                required
              ></input>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your Email"
                required
              ></input>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your Message
              </label>
              <textarea
                name="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              value="Send"
              className="btn bg-primary text-white border-none hover:bg-primary"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
