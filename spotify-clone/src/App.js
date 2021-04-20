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
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const loggedInUserName = useSelector((state) => state.userName);

  useEffect(() => {
    console.log(`a render has occurred`);
  });

  useEffect(() => {
    console.log(`loggedIn value is: ${isLoggedIn}`);
  }, [isLoggedIn]);

  useEffect(() => {
    console.log(`loggedInUserName value is: ${loggedInUserName}`);
  }, [loggedInUserName]);

  const loginUserSuccess = (userName) => {
    dispatch({ type: "login_user_success", userName: userName });
  };

  const userLogout = () => {
    dispatch({ type: "logout_user" });
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/playlist">
              {/* playlist page */}
              <PlaylistLandingPage
                loggedInUserName={loggedInUserName}
                userLogout={userLogout}
              />
            </Route>
            <Route exact path="/">
              {/* landing page */}
              <LandingPage
                loggedInUserName={loggedInUserName}
                userLogout={userLogout}
              />
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
