import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
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
import FormikForm from "./form/Formik/Formik";
import Auth from "./auth/Auth";
import { AnimatePresence } from "framer-motion";
import Search from "./redux-section/Search";
import Todo from "./Todo/TodoPage";
import Material from "./material-ui";
import ButtonSc from "./material-ui/button/Button";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Switch location={location} key={location.key}>
        <AnimatePresence>
          <Route exact path="/" component={SectionList} />
          <Route path="/form" component={Form} />
          <Route path="/formik" component={FormikForm} />
          <Route path="/auth" component={Auth} />
          <Route path="/httpRequest" component={HttpRequest} />
          <Route path="/user/:id" component={User} />
          <Route exact path="/listdb" component={ListDB} />
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/listdb/:country/athlete" component={Athlete} />
          <Route
            path="/listdb/:country/athlete/create"
            component={CreateAthlete}
          />
          <Route
            path="/listdb/:country/athlete/update/:id"
            component={UpdateAthlete}
          />
          <Route path="/create" component={Create} />
          <Route path="/redux" component={Search} />
          <Route path="/update/:id" component={Update} />
          <Route path="/material" component={Material} />
        </AnimatePresence>
      </Switch>
    </div>
  );
};

export default App;
