import {
  AppBar,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import {
  BrowserRouter as Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import ButtonSc from "./button/Button";
import DrawerList from "./drawer-list/DrawerList";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import FormSc from "./form/Form";

const Material: React.FC = () => {
  let { path, url } = useRouteMatch();
  const [state, setState] = React.useState<boolean>(false);
  return (
    <Switch>
      <AppBar position="static" color="secondary">
        <Toolbar variant="dense">
          <IconButton
            onClick={() => setState(!state)}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Material UI
          </Typography>
        </Toolbar>
        <Drawer anchor="left" open={state} onClose={() => setState(false)}>
          <DrawerList Section="Home" path={`${url}`}>
            <HomeIcon />
          </DrawerList>
          <DrawerList Section="Button" path={`${url}/button`}>
            <ShoppingCartIcon />
          </DrawerList>
          <DrawerList Section="Form" path={`${url}/form`}>
            <NoteAddIcon />
          </DrawerList>
        </Drawer>
      </AppBar>

      <Container>
        <Route exact path={`${path}/button`} component={ButtonSc} />
        <Route exact path={`${path}/form`} component={FormSc} />
      </Container>
    </Switch>
  );
};

export default Material;
