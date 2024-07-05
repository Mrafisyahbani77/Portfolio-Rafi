import Navbar from "../src/Ui/Components/Navbar/Navbar"
import Home from "../src/Ui/Containers/Content/Home"
import About from "../src/Ui/Containers/About/About"

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About id='about'/>
    </div>
  )
}
