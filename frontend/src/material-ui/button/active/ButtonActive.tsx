import { Button, Fab, IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

const ButtonActive = () => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<HomeIcon />}
        disableElevation
      >
        disableElevation
      </Button>
      <Button variant="contained" color="secondary" endIcon={<HomeIcon />}>
        Button
      </Button>
      <Button variant="contained" color="default" endIcon={<CheckBoxIcon />}>
        Button
      </Button>
      <Button variant="outlined" color="secondary" endIcon={<CheckBoxIcon />}>
        Button
      </Button>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<ShoppingCartIcon />}
      >
        Button
      </Button>
      <Button variant="outlined" color="default">
        Button
      </Button>
      <Button variant="text" color="secondary" endIcon={<ShoppingCartIcon />}>
        Button
      </Button>
      <Button variant="text" color="primary" endIcon={<HomeIcon />}>
        Button
      </Button>
      <Button variant="text" color="default">
        Button
      </Button>
      <IconButton color="secondary">
        <HomeIcon />
      </IconButton>
      <IconButton color="primary">
        <ShoppingCartIcon />
      </IconButton>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="add">
        <ShoppingCartIcon />
      </Fab>
      <Fab color="default" variant="extended" aria-label="add" >
        <AddIcon />
        test
      </Fab>
    </div>
  );
};

export default ButtonActive;
