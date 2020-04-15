import createHistory from "history/createBrowserHistory";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import App from "./pages/App";
import configureStore from "./redux/store";

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const store = configureStore();

const routing = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));
