import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../../Components/Loader';

export default function Contact(props) {
  const id = props.id;
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm('service_jfg11qm', 'template_sd2vw2e', form.current, '1j7VGGJ6T2S8dklSZ')
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          toast.success('Email successfully sent!');
          form.current.reset();
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          toast.error('Email sending failed.');
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div id={id} className="min-h-screen flex md:mt-4 mt-2 flex-col items-center justify-center px-4">
      <Toaster position="top-center" />
      <div className="bg-gray-900 rounded-3xl shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl text-yellow-600 font-bold mb-6 text-center">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="md:flex md:space-x-4">
            <input
              type="text"
              name="to_name"
              placeholder="Full Name"
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg mb-4 md:mb-0"
            />
            <input
              type="email"
              name="from_name"
              placeholder="Email"
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black p-3 rounded-lg font-bold relative"
            disabled={isLoading}
          >
            {isLoading && <Loader />}
            {!isLoading && 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}
