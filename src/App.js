import "./App.scss";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import WebDesign from "./WebDesign";
import AppDesign from "./AppDesign";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/web-design" component={WebDesign} />
        <Route exact path="/app-design" component={AppDesign} />
        <Route exact path="/" component={Home} />
      </Switch>
      {/* <Home /> */}
    </div>
  );
}

export default App;
