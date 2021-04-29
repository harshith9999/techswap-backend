import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Registration";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/home" component={(props) => <Home {...props} />} /> */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
