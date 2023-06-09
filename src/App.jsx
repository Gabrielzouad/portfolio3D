import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary overflow-hidden'>
        <div className='w-screen bg-hero-pattern bg-cover bg-no-repeat bg-center '>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
