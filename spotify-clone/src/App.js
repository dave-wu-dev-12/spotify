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
import axios from "axios";
import ImgAssets from "./assets/ImgAssets";

function App() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const loggedInUserName = useSelector((state) => state.userName);
  // going to not pass this to playlist thru props
  // but let the child component listen to it on its own
  const userRecentlyPlayedList = useSelector((state) => state.recentlyPlayed);

  const recentlyPlayedSize = 6;

  useEffect(() => {
    console.log(`a render has occurred`);
  });

  useEffect(() => {
    console.log(`Initial App load/render`);
    if (isLoggedIn) getAlbumInformation();
  }, [isLoggedIn]);

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

  const getAlbumInformation = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        try {
          // add album image to the recenetly played items
          let recentlyPlayedList = res.data.slice(0, recentlyPlayedSize);
          recentlyPlayedList = recentlyPlayedList.map((recentlyPlayed) => {
            // access a random key value from our imgAssets object and set as image src
            recentlyPlayed.imgSrc =
              ImgAssets[
                Object.keys(ImgAssets)[Math.floor(Math.random() * 6) + 1]
              ];
            return recentlyPlayed;
          });
          dispatch({
            type: "store_recently_played",
            recentlyPlayed: recentlyPlayedList,
          });
        } catch (error) {
          console.log(error);
        }
      })
      .catch((error) => {
        console.log(`api error: ${error}`);
      });
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
