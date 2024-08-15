import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../Components/Loader";

export default function Contact(props) {
  const id = props.id;
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_jfg11qm",
        "template_sd2vw2e",
        form.current,
        "1j7VGGJ6T2S8dklSZ"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          toast.success("Email successfully sent!");
          form.current.reset();
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          toast.error("Email sending failed.");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div
      id={id}
      className="min-h-screen flex md:mt-4 mt-2 flex-col items-center justify-center px-4"
    >
      <Toaster position="top-center" />
      <div className="bg-gray-900 rounded-3xl shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl text-yellow-600 font-bold mb-6 text-center">
          Contact Me
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="md:flex md:space-x-4">
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              <input
                type="text"
                name="to_name"
                id="to_name"
                className="peer w-full p-3 border text-black border-gray-300 rounded-lg"
                placeholder=" "
              />
              <label
                htmlFor="to_name"
                className="absolute left-3 -top-3 peer-focus:bg-black rounded-lg px-2 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-sm peer-focus:text-yellow-500"
              >
                Full Name
              </label>
            </div>
            <div className="relative w-full md:w-1/2">
              <input
                type="email"
                name="from_name"
                id="from_name"
                className="peer w-full p-3 border text-black border-gray-300 rounded-lg"
                placeholder=" "
              />
              <label
                htmlFor="from_name"
                className="absolute left-3 -top-3 peer-focus:bg-black rounded-lg px-2 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-sm peer-focus:text-yellow-500"
              >
                Email
              </label>
            </div>
          </div>
          <div className="relative">
            <textarea
              name="message"
              id="message"
              className="peer w-full p-3 border text-black border-gray-300 rounded-lg"
              placeholder=" "
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-3 -top-3 peer-focus:bg-black rounded-lg px-2 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-sm peer-focus:text-yellow-500"
            >
              Message
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 transition duration-300 ease-in-out text-gray-700 hover:text-gray-900 p-3 rounded-lg font-bold relative"
            disabled={isLoading}
          >
            {isLoading && <Loader />}
            {!isLoading && "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
