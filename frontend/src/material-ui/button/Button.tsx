import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ButtonActive from "./active/ButtonActive";

const useStyles = makeStyles({
  container: {
    marginTop: "30px",
  },
});

const ButtonSc = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant="h4">Button</Typography>
      <ButtonActive></ButtonActive>
    </Container>
  );
};

export default ButtonSc;
