
import { BrowserRouter as Router} from "react-router-dom"
import {Navbar,Hero, About,Experience,Tech,Work,Contact} from "./components/index"
import StarCanvas from "./components/canvas/StarCanvas.jsx"
function App() {

  return (
      <Router>
    <div className="relative z-0 bg-primary ">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Work/>
      <div className="relative z-[0]">
      <Contact/>
      <StarCanvas/>
      </div>
    </div>
      </Router>
  )
}

export default App
