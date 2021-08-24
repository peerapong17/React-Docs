import { Button, Container, TextField, Typography } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import * as yup from "yup";
import { useFormik } from "formik";

interface InitialValue {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValue: InitialValue = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Validation = () => {
  const schema = yup.object({
    username: yup.string().required(),
    email: yup.string().email("Not a valid email").required(),
    password: yup.string().min(6, "Should be 6 characters or more").required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required(),
  });

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: schema,
    onSubmit: ({ username, email, password, confirmPassword }) => {
      console.log(username, email, password, confirmPassword);
      formik.resetForm();
    },
  });

  return (
    <Container>
      <form
        style={{ marginTop: "40px", display: "flex", flexDirection: "column" }}
        onSubmit={formik.handleSubmit}
      >
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Form Validation With Formik && yup
        </Typography>
        <TextField
          style={{ marginTop: "40px", width: "400px" }}
          label="Username"
          variant="filled"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          error={formik.touched.username && !!formik.errors.username}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          style={{ marginTop: "40px", width: "400px" }}
          label="Email"
          variant="filled"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          style={{ marginTop: "40px", width: "400px" }}
          type="password"
          label="Password"
          variant="filled"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.touched.password && !!formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          style={{ marginTop: "40px", width: "400px" }}
          type="password"
          label="ConfirmPassword"
          variant="filled"
          name="confirmPassword"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          error={
            formik.touched.confirmPassword && !!formik.errors.confirmPassword
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <Button
          size="large"
          type="submit"
          color="secondary"
          variant="contained"
          style={{ marginTop: "40px", width: "400px" }}
          endIcon={<SendIcon />}
        >
          Enter
        </Button>
      </form>
    </Container>
  );
};

export default Validation;
