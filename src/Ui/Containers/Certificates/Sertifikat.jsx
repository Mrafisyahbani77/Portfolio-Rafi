import Smk from "../../../assets/Images/smk.png";
import Dcd from "../../../assets/Images/coding.jpeg";
import Logic from "../../../assets/Certificate/Logic.pdf";
import Data from "../../../assets/Certificate/data.pdf";
import Grow from "../../../assets/Certificate/pengembangan.pdf";
import Cdng from "../../../assets/Certificate/Smkcoding.pdf";
import Rapot from "../../../assets/Certificate/Rapor.pdf";

const Sertifik = [
  {
    id: 1,
    platform: "Dicoding",
    title: " Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    icon: Dcd,
    file: Logic,
  },
  {
    id: 2,
    platform: "Smk Coding",
    title: "Pelatihan Progressive Web App Nuxt Js SMKCoding by Alkademi 2023",
    icon: Smk,
    file: Cdng,
    rapot: Rapot,
    Choice: "Rapot SmkCoding",
  },
  {
    id: 3,
    platform: "Dicoding",
    title: "Belajar Dasar Visualisasi Data",
    icon: Dcd,
    file: Data,
  },
  {
    id: 4,
    platform: "Dicoding",
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    icon: Dcd,
    file: Grow,
  },
  {
    id: 5,
    platform: "LinkedIn",
    title: "Pelatihan Penting React.js",
    icon: "linkedin-icon.png",
    file: "/path/to/linkedin-certificate.pdf",
  },
  {
    id: 6,
    platform: "Educative",
    title: "Memahami Redux: Panduan Awal untuk Manajemen State",
    icon: "educative-icon.png",
    file: "/path/to/educative-certificate.pdf",
  },
];

export default function Sertifikat(props) {
  const id = props.id;

  const handleViewCertificate = (file) => {
    window.open(file, "_blank");
  };

  return (
    <div id={id} className="min-h-screen p-4 sm:p-8">
      <h1 className="text-4xl font-semibold text-yellow-600 text-center mb-8">
        Sertifikat
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Sertifik.map((cert) => (
          <div
            key={cert.id}
            className="bg-slate-400 rounded-lg shadow-md p-4 m-2 items-center"
          >
            <span className="flex px-2 max-w-[70%] md:max-w-[32%] space-x-1 py-2 bg-black rounded-full">
              <img
                src={cert.icon}
                alt={`Ikon ${cert.platform}`}
                className="w-7 h-7 md:w-10 md:h-10 bg-white rounded-full "
              />
              <h3 className="text-base md:mt-2 font-semibold text-yellow-600 ">
                {cert.platform}
              </h3>
            </span>
            <p className="mt-4 font-bold text-center mb-4">{cert.title}</p>
            <button
              className="bg-white border text-black border-gray-300 rounded-full px-4 py-2 hover:bg-gray-200"
              onClick={() => handleViewCertificate(cert.file)}
            >
              Lihat
            </button>
            {cert.rapot && cert.Choice && (
              <button
                className="ml-2 bg-white border text-black border-gray-300 rounded-full px-4 py-2 hover:bg-gray-200"
                onClick={() => handleViewCertificate(cert.rapot)}
              >
                {cert.Choice}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
