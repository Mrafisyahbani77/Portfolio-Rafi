import Ig from "../../../assets/Images/Ig.png"; 
import Gm from "../../../assets/Images/gmail.png"; 
import Yt from "../../../assets/Images/youtube.png"; 
import Git from "../../../assets/Images/githubIcon.png"; 


const socialMediaLinks = [
  { name: "GitHub", url: "https://www.github.com/Mrafisyahbani77", icon: Git },
  { name: "Twitter", url: "https://twitter.com", icon: "https://img.icons8.com/ios-glyphs/30/ffffff/x.png" },
  { name: "Dribbble", url: "https://dribbble.com", icon: "https://img.icons8.com/ios-glyphs/30/ffffff/dribbble.png" },
  { name: "YouTube", url: "https://www.youtube.com/@rafiofficial958", icon: Yt },
  { name: "Gmail", url: "mailto:mrafi.syahbani@gmail.com", icon: Gm },
  { name: "Instagram", url: "https://www.instagram.com/rafyxz77/", icon: Ig },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-start">
        <div className="mb-8 md:mb-0 md:text-left md:w-1/3">
          <h1 className="text-4xl font-bold">Rafi</h1>
          <p className="text-lg mt-2">
            Contact <span className="text-blue-500">Me</span>
          </p>
          <p className="text-md mt-1">mrafi.syahbani@gmail.com</p>
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex flex-col items-center md:flex-row md:justify-between border-b border-gray-700 pb-4 mb-8">
            <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 mb-4 md:mb-0">
              {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.url} className="hover:text-gray-400">
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap justify-center space-x-4 md:space-x-6">
              <a href="#" className="hover:text-gray-400">Home</a>
              <a href="#" className="hover:text-gray-400">About</a>
              <a href="#" className="hover:text-gray-400">Skills</a>
              <a href="#" className="hover:text-gray-400">Project</a>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            {socialMediaLinks.map((link, index) => (
              <a key={index} href={link.url} className="p-2">
                <img src={link.icon} alt={link.name} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-4">
        Created By @Muhammad Rafi Syahbani
      </p>
    </footer>
  );
}

export default Footer;
