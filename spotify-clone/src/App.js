import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./landing-page/LandingPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/Playlist">
            {/* playlist page */}
            <div>playlist page</div>
          </Route>
          <Route exact path="/">
            {/* landing page */}
            <LandingPage />
          </Route>
          {/* redirect to landing page */}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
