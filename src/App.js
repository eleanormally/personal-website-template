import './App.css';
import Header from "./Header.js";
import Projects from "./Projects.js";
import Page from "./Page.js";
import {useState} from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [view, setView] = useState("main");
  return (
    <div>
      <Header />
      {(view === "main") ? 
        <div>
          <ReactMarkdown view={import("./Pages/Profile.md")}/>
          <Projects set={setView}/> 
        </div> :
        <p>hi</p>
        //<Page view={view} />
      }
    </div>
  );
}

export default App;
