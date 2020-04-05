import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Competitions from "./pages/Competitions";
import SingleCompetition from "./pages/SingleCompetition";
import CategoryResults from "./pages/CategoryResults";
import Login from "./pages/Login";
import createHistory from "history/createBrowserHistory";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import Header from "./components/Header";

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
