
import Hero from "./components/hero";
import Contact from "./components/contact";
import Project from "./components/project";
import About from "./components/about";
import Skill from "./components/skill";

export default function home() {
  return (
    <div>
      
      <Hero/>
      <About/>
      <Project/>
      <Skill/>
      <Contact/>
    </div>
  );
}
