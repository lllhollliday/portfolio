import { useRef, useEffect } from "react"
import "./App.css"
import pantry from "../src/assets/pantry.png"
import todo from "../src/assets/todo.png"
import wip from "../src/assets/wip.png"
import ScrollBar from "./components/ScrollBar/ScrollBar.js"
import EmailForm from "./components/EmailForm.js"

function App() {
  const myRef = useRef()
  useEffect(() => {
    console.log("myRef", myRef.current)
  }, [])

  return (
    <div className="App">
      {" "}
      <ScrollBar />
      <div className="green">
        <nav className="links">
          <ul>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contacts">CONTACT</a>
            </li>
          </ul>
        </nav>

        <div className="text">
          <p>LUCY HOLLIDAY</p>
          <p>FRONTEND DEVELOPER</p>
        </div>
      </div>
      <div id="projects" className="blue">
        <h1>PROJECTS</h1>
        {
          <div className="project-flex-box">
            <a href="https://pantry-6ajz.onrender.com/">
              <div className="project">
                <img src={pantry} alt="Pantry Website Homepage" />

                <div className="text">
                  <h3>Pantry</h3>
                  <p>
                    A full stack website, built using Edamam API, React.js,
                    Styled Components, Node.js, Express, MongoDB. Designed in
                    Figma.
                  </p>
                </div>
              </div>{" "}
            </a>
            <a href="https://lllhollliday.github.io/be-productive/">
              <div className="project">
                <img src={todo} alt="To Do App" />

                <div className="text">
                  <h3>Be Productive</h3>
                  <p>A simple to-do list app built with React.js.</p>
                </div>
              </div>
            </a>
            <div className="project">
              <img src={wip} alt="Work in Progress" />
              <div className="text">
                <h3>Work in Progress</h3>
                <p>
                  Freelance project. Building a site for a wellness company.
                </p>
              </div>
            </div>
          </div>
        }
      </div>
      <div id="contacts" className="pink">
        <EmailForm />
      </div>
    </div>
  )
}

export default App
