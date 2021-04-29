import { React, useState } from "react";
import "./Login.css";

import styled, {
  css,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

const Disclaimer = styled.p`
  font-size: 10px;
  transition: ease 0.5s all;
  color: ${(props) =>
    props.isDarkMode ? "black" : props.theme.primary.baseColor};
  ${(props) =>
    props.primary &&
    css`
      font-size: 20px;
      color: purple;
    `}
`;

const FooterDisclaimer = styled(Disclaimer)`
  font-size: 90px;
  color: orange;
`;

const DisclaimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
`;

// global prop value
const theme = {
  primary: {
    baseColor: "gray",
  },
};

// global style values like the body etc
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) =>
      props.isDarkMode ? "black" : props.theme.primary.baseColor};
    transition: ease 0.5s all;

  }
`;

function Login({ loginUserSuccess }) {
  const [userName, setUserName] = useState("");
  const [footerEnlarge, setFooterEnlarge] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="loginContainer">
      <div className="loginFormContainer">
        <label for="username">Username:</label>
        <input
          className="loginInput"
          type="text"
          name="username"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label for="password">Password:</label>
        <input
          className="loginInput"
          type="password"
          name="password"
          id="password"
        />
        <button
          className="loginButton"
          onClick={() => loginUserSuccess(userName)}
        >
          Login
        </button>
      </div>
      <ThemeProvider theme={theme}>
        <GlobalStyle isDarkMode={isDarkMode} />
        <DisclaimerContainer>
          <Disclaimer
            isDarkMode={isDarkMode}
            primary={footerEnlarge}
            onClick={() => setFooterEnlarge(!footerEnlarge)}
          >
            Users will be charged on a monthly occurrence
          </Disclaimer>
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            Toggle Dark Mode
          </button>
        </DisclaimerContainer>
      </ThemeProvider>
    </div>
  );
}

export default Login;
