import logo from "./logo.svg";
import "./App.css";
import {Posts} from "./components/Posts";
import { Postform } from "./components/Postform";

function App() {
  return (
    <div className="App">
      <header >
        <h4>React Redux Template</h4>
      </header>
      <Postform />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
