export default function Contact(props) {
    const id = props.id;
  
    return (
      <div
        id={id}
        className="min-h-screen flex md:mt-4 mt-2 flex-col items-center justify-center"
      >
        <div className="bg-gray-900 rounded-3xl shadow-lg p-8 w-full max-w-max">
          <h2 className="text-2xl text-yellow-600 font-bold mb-6 text-center">Contact Me</h2>
          <form className="space-y-4">
            <div className="md:flex md:space-x-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg mb-4 md:mb-0"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="md:flex md:space-x-4">
              <input
                type="tel"
                placeholder="Mobile No."
                className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg mb-4 md:mb-0"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded-lg"
            ></textarea>
            <a href="mailto:mrafi.syahbani@gmail.com">
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black p-3 rounded-lg font-bold"
            >
              Send
            </button>
            </a>
          </form>
        </div>
      </div>
    );
  }
  