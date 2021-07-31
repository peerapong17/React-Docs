import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./form/Form";
import SectionList from "./section/SectionList";
import HttpRequest from "./httpRequest/HttpRequest";
import User from "./httpRequest/user/User";
import Create from "./db/create/Create";
import Update from "./db/update/Update";
import ListDB from "./db/ListDB";
import Athlete from "./db/athlete/athlete";
import CreateAthlete from "./db/athlete/create/CreateAthlete";
import UpdateAthlete from "./db/athlete/update/UpdateAthlete";


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
          <Route exact path="/listdb">
            <ListDB />
          </Route>
          <Route exact path="/listdb/:country/athlete">
            <Athlete />
          </Route>
          <Route path="/listdb/:country/athlete/create">
            <CreateAthlete />
          </Route>
          <Route path="/listdb/:country/athlete/update/:id">
            <UpdateAthlete />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/update/:id">
            <Update />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
