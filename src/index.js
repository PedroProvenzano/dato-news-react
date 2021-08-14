import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@material-ui/core/CssBaseline";
import store from "./app/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import Loading from "./pages/Loading";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Montserrat, sans-serif"].join(","),
  },
  palette: {
    primary: {
      light: "#ffb85b",
      main: "#ffa733",
      dark: "#b27423",
      contrastText: "#111",
    },
    secondary: {
      light: "#5b5b5b",
      main: "#333333",
      dark: "#232323",
      contrastText: "#fff",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Loading />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
