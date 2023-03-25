import { EarthCanvas, ComputersCanvas, StarsCanvas } from "./canvas"
import Hero from "./Hero"
import Navbar from "./Navbar"
import About from "./About"
import Tech from "./Tech"
import Experience from "./Experience"
import Works from "./Works"
import Feedbacks from "./Feedbacks"
import Contact from "./Contact"

export { Hero, Navbar, About, Tech, Experience, Works, Feedbacks, Contact, EarthCanvas, ComputersCanvas, StarsCanvas }

const findOverflows = () => {
  const documentWidth = document.documentElement.offsetWidth

  document.querySelectorAll("*").forEach((element) => {
    const box = element.getBoundingClientRect()

    if (box.left < 0 || box.right > documentWidth) {
      console.log(element)
      element.style.border = "1px solid red"
    }
  })
}

// Execute findOverflows to find overflows on the page.
findOverflows()
