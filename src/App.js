import { Nav } from "./Components/nav"
import { Main } from "./pages/main"
import { Section } from "./pages/section"
import { Demand } from "./pages/Demand"
import { Home } from "./pages/Home"
import { Features } from "./pages/Features"
import { Projects } from "./pages/Projects"
import { Services } from "./pages/Services"
import { Team } from "./pages/Team"
import { Contact } from "./pages/Contact"
import { Footer } from "./pages/Footer"
import { Timeline } from "./Components/Timeline"
const App = () => {
  return (
    <div>
      <Nav/> 
      <Home/>
      <Services/>
      <Features/>
      <Projects/>
      <Section/>
      <Team/>
      <Main/>
      <Timeline/>
      <Demand/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App