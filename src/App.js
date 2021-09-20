import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./components/Index";
import Thisrecipe from "./components/Thisrecipe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index}></Route>
        <Route path="/:id" component={Thisrecipe}></Route>
      </Switch>
    </Router>
  );
}

export default App;
