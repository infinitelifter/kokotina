import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import { appReducers } from "./reducers";
import { Provider } from "react-redux";

let store = createStore(appReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
