import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import thunk from "redux-thunk";

import "../index.scss";

import reducer from "../reducers/index";

// Component
import AsideNavbar from "./AsideNavbar/AsideNavbar";
import MainContent from "./MainContent/MainContent";
import CardInfo from "../components/CardInfo/CardInfo";

// styles
import "./App.scss";
import MainProfile from "./Profile/MainProfile";
import MainItem from "../components/ListItem/MainItem";
import Logout from "../components/Logout/Logout";

function App() {
  // if (!localStorage.getItem("accessToken")) return <Redirect to="/login" />;

  const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

  return (
    <Provider store={store}>
      <div className="App">
        <AsideNavbar />
        <Switch>
          <Route exact path="/" component={MainContent} />
          <Route exact path="/list" component={MainItem} />
          <Route exact path="/detail/:id" component={CardInfo} />

          <MainProfile />
        </Switch>
        <div className="Logout">
          {" "}
          <Logout></Logout>
        </div>
      </div>
    </Provider>
  );
}

export default App;
