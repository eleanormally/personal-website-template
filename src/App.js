import './App.css';
import Header from "./Header.js";
import Projects from "./Projects.js";
import Page from "./Page.js";
import {useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import './markdown.css'

function App() {
  const [view, setView] = useState("main");
  const [mdText, setMdText] = useState();

  useEffect(async () => setMdText(await readFile(view)), [view]);

  async function readFile(file) {
    const resp = await fetch("/Pages/" + file + ".md");
    return resp.text();
  }


  return (
    <div className="">
      <Header set={() => setView("main")}/>
      <div className="m-10"><ReactMarkdown className="w-11/12 markdown" children={mdText} /></div>
      {
        (view === "main") ? 
          <Projects set={setView}/> : null
      }
    </div>
  );
}

export default App;
