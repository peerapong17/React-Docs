import Login from "./login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./register/Signup";
import Welcome from "./welcome/Welcome";

const Auth = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/auth">
          <Login />
        </Route>
        <Route path="/auth/signup">
          <Signup />
        </Route>
        <Route path="/auth/welcome">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
};

export default Auth;
