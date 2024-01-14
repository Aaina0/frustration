import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Make sure to include the stylesheet
import App from "./App";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// ...
