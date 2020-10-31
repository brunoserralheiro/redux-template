import logo from "./logo.svg";
import "./App.css";
import { Posts } from "./components/Posts";
import { Postform } from "./components/Postform";
import { Provider } from "react-redux";
import store from "./store";
import rootReducer from "./reducers"

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h4>React Redux Template</h4>
        </header>
        <Postform />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
