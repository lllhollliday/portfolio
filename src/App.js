import "./App.css"
import pantry from "../src/assets/pantry.png"
import todo from "../src/assets/todo.png"
import wip from "../src/assets/wip.png"
import ScrollBar from "./components/ScrollBar/ScrollBar.js"
import EmailForm from "./components/EmailForm.js"

function App() {
  return (
    <div className="App">
      {" "}
<ScrollBar />
      <div className="green">
        <div className="text">
          <p>hi</p>
          <p>i'm lucy holliday,</p>
          <p>a frontend developer</p>
        </div>

        <div className="links">
          <a href="#projects">projects</a>
          <a href="#contacts">contact</a>
        </div>
      </div>
      <div id="projects" className="blue">
        <h1>projects</h1>

        <div className="project-flex-box">

          <div className="proj1">
            <a href="https://pantry-6ajz.onrender.com/">
              <img src={pantry} alt="Pantry Website Homepage" />
            </a>
            <div className="text-container">
              <h3>Pantry</h3>
              <p>
                A full stack website, built using Edamam API, React.js, Styled
                Components, Node.js, Express, MongoDB. Designed in Figma.
              </p>
            </div>
          </div>

          <div className="proj2">
            <a href="https://lllhollliday.github.io/be-productive/">
              <img src={todo} alt="To Do App" />
            </a>

            <div className="text-container">
              <h3>Be Productive</h3>
              <p>A simple to-do list app built with React.js.</p>
            </div>
          </div>

          <div className="proj3">
            <img src={wip} alt="Work in Progress" />
            <div className="text-container">
              <h3>Work in Progress</h3>
              <p>
                Freelance project. Building a site for a wellness company.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="contacts" className="pink">
      <EmailForm/>
      
      </div>
    </div>
  )
}

export default App
