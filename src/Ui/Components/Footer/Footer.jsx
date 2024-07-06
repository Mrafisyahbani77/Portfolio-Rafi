import React from "react";

export default function Footer() {
  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl font-bold mb-4">Connect With Me</h1>
      <div className="flex flex-wrap justify-center space-x-4">
        <a href="https://linkedin.com" className="p-2">
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="LinkedIn"
          />
        </a>
        <a href="https://instagram.com" className="p-2">
          <img
            src="https://img.icons8.com/color/48/000000/instagram-new.png"
            alt="Instagram"
          />
        </a>
        <a href="https://facebook.com" className="p-2">
          <img
            src="https://img.icons8.com/color/48/000000/facebook.png"
            alt="Facebook"
          />
        </a>
        <a href="https://telegram.com" className="p-2">
          <img
            src="https://img.icons8.com/color/48/000000/telegram-app.png"
            alt="Telegram"
          />
        </a>
        <a href="https://twitter.com" className="p-2">
          <img
            src="https://img.icons8.com/color/48/000000/twitter.png"
            alt="Twitter"
          />
        </a>
        <a href="https://skype.com" className="p-2">
          <img
            src="https://img.icons8.com/color/48/000000/skype.png"
            alt="Skype"
          />
        </a>
      </div>
    </div>
  );
}
