import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/main/Main";
import Chart from "./pages/chart/Chart";

import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/" component={Main} exact />
      <Route path="/chart" component={Chart} />
    </div>
  );
}

export default App;
