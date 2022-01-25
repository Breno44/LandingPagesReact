import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { Home } from "./templates/Home";
import { GlobalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
