
import "./App.css"
import pantry from "../src/assets/pantry.jpg"
import ScrollBar from "./components/ScrollBar/ScrollBar.js"

function App() {
  return (
    <div className="App">
      {" "}
{/*       <ScrollBar /> */}

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
        <div className="proj1">proj 1</div>

        <div className="proj2">proj 2</div>
        <div className="proj3">proj 3</div>
      </div>
      </div>
      <div id="contacts" className="pink">contact</div>
    </div>
  )
}

export default App
