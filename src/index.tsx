import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "normalize.css";
import "./index.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "reducers/rootReducer";
import fetchAuth from "middleware/auth";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddlwares) =>
    getDefaultMiddlwares().prepend().concat([fetchAuth]),
  devTools: process.env.NODE_ENV === "development",
});

const getState = store.getState;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

export { getState };
