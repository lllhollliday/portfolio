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
          {/*         <div>
            <img src={pantry} alt="" />
            <div className="text-container">
              <h3>title</h3>
              <p>appear on hover</p>
            </div>
          </div>
          <div>
            <img src={todo} alt="" />
            <p>appear on hover</p>
          </div>
          <div>
            <img src={wip} alt="" />
            <p>appear on hover</p>
          </div>
 */}
          <a href="https://pantry-6ajz.onrender.com/">
            <div className="project">
              <img src={pantry} alt="Pantry Website Homepage" />

              <div className="text">
                <h3>Pantry</h3>
                <p>
                  A full stack website, built using Edamam API, React.js, Styled
                  Components, Node.js, Express, MongoDB. Designed in Figma.
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
              <p>Freelance project. Building a site for a wellness company.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="contacts" className="pink">
        <EmailForm />
      </div>
    </div>
  )
}

export default App
