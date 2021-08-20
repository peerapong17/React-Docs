import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  router: {
    textDecoration: "none",
  },
});

const DrawerList: React.FC<{ path: string; Section: string }> = ({
  path,
  Section,
  children
}) => {
  const classes = useStyles();

  return (
    <Link to={path} className={classes.router}>
      <List className={classes.list}>
        <ListItem button>
          <ListItemIcon>
            {children}
          </ListItemIcon>
          <Typography>{Section}</Typography>
          <ListItemText />
        </ListItem>
      </List>
    </Link>
  );
};

export default DrawerList;
