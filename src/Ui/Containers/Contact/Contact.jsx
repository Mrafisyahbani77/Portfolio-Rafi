export default function Contact(props) {
  const id = props.id;

  return (
    <div
      id={id}
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div className="bg-white text-black rounded-lg shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="tel"
            placeholder="Mobile No."
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black p-3 rounded-lg font-bold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
