import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import store from "./store";
import Todo from "./containers/todo";
import ManageNotes from "./containers/manage";

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Todo}></Route>
          <Route exact path="/addnotes" component={ManageNotes}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

