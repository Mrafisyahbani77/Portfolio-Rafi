import Navbar from "../src/Ui/Components/Navbar/Navbar";
import Home from "../src/Ui/Containers/Content/Home";
import About from "../src/Ui/Containers/About/About";
import Education from "../src/Ui/Containers/Education/Edukasi";
import Serti from "../src/Ui/Containers/Certificates/Sertifikat";
import Porto from "../src/Ui/Containers/Portfolio/Portfolio";
import Skil from "../src/Ui/Containers/Skills/Skil";
import Contact from "../src/Ui/Containers/Contact/Contact";
import Footer from "../src/Ui/Components/Footer/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About id="about" />
      <Skil id="skils" />
      <Education id="Edukasi" />
      <Serti id="serti" />
      <Porto id="portfolio" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}
