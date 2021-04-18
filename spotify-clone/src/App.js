import "./App.css";
import LandingPage from "./landing-page/LandingPage";
import PlaylistLandingPage from "./components/PlaylistPages/PlaylistLandingPage";
import Login from "./components/Login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  const loginUserSuccess = () => {
    dispatch({ type: "login_user_success" });
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/playlist">
              {/* playlist page */}
              <PlaylistLandingPage />
            </Route>
            <Route exact path="/">
              {/* landing page */}
              <LandingPage />
            </Route>
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/login">
              {/* login page */}
              <Login loginUserSuccess={loginUserSuccess} />
            </Route>
            <Redirect to="/login" />
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
