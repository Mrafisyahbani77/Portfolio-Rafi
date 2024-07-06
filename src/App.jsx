import Navbar from "../src/Ui/Components/Navbar/Navbar"
import Home from "../src/Ui/Containers/Content/Home"
import About from "../src/Ui/Containers/About/About"
import Education from "../src/Ui/Containers/Education/Edukasi"
import Serti from "../src/Ui/Containers/Certificates/Sertifikat"

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About id='about'/>
      <Education id='Edukasi'/>
      <Serti id='Serti'/>
    </div>
  )
}
