import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "./form/Form";
import SectionList from "./section/SectionList";
import HttpRequest from "./httpRequest/HttpRequest";
import User from "./httpRequest/user/User";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
            <SectionList />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/httpRequest">
            <HttpRequest />
          </Route>
          <Route path="/user/:id">
            <User />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
