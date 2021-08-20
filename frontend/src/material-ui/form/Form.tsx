import {
  Button,
  Container,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PhoneIcon from "@material-ui/icons/Phone";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles({
  container: {
    marginTop: "30px",
  },
});

const FormSc = () => {
  const [isValid, setIsValid] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(e.target.value);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (value.trim() === "" || value.trim() === null) {
      setIsValid(true);
      return;
    }
    setIsValid(false);
    console.log(value);
  };

  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant="h4">Form Section</Typography>
      <form>
        <TextField label="Standard" />
        <TextField label="Filled" variant="filled" />
        <TextField label="Outlined" variant="outlined" />
      </form>

      <Typography style={{ marginTop: "60px" }} variant="h4">
        size small
      </Typography>
      <TextField label="Standard" size="small" color="secondary" />
      <TextField
        label="Filled"
        variant="filled"
        size="small"
        color="secondary"
      />
      <TextField
        label="Outlined"
        variant="outlined"
        size="small"
        color="secondary"
      />

      <Typography style={{ marginTop: "60px" }} variant="h4">
        with icons
      </Typography>
      <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountBoxIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="input-with-icon-textfield"
        label="TextField"
        variant="filled"
        color="secondary"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOpenIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="input-with-icon-textfield"
        label="TextField"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
      />
      <Typography style={{ marginTop: "60px" }} variant="h4">
        Error
      </Typography>
      <TextField
        id="input-with-icon-textfield"
        error={isValid}
        onChange={onChange}
        helperText={isValid && "Username is required!"}
        label="TextField"
        variant="outlined"
        color="primary"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AccountBoxIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button
        style={{ marginLeft: "10px" }}
        size="large"
        variant="outlined"
        color="secondary"
        endIcon={<SendIcon />}
        onClick={onClick}
      >
        Submit
      </Button>
      <Button
        style={{ marginLeft: "10px" }}
        size="large"
        variant="contained"
        color="default"
        endIcon={<SendIcon />}
        onClick={onClick}
      >
        Submit
      </Button>
      <Button
        style={{ marginLeft: "10px" }}
        size="large"
        variant="text"
        color="primary"
        endIcon={<SendIcon />}
        onClick={onClick}
      >
        Submit
      </Button>
    </Container>
  );
};

export default FormSc;
