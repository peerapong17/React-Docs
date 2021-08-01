import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./Signup.module.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

interface Input {
  username: string;
  email: string;
  password: string;
}

const initialValues: Input = {
  username: "",
  email: "",
  password: "",
};

const Signup = () => {
  const history = useHistory()
  const onSubmit = (values: Input) => {
    axios
      .post("http://localhost:3000/authentication", values)
      .then((res) => history.push('/auth'));
  };

  return (
    <div className={style.container}>
      <span className={style.header}>Signup</span>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form className={style.formGroup}>
            <label className={style.label} htmlFor="username">
              Username:
            </label>
            <Field className={style.formControl} name="username" />
            {errors.username && touched.username ? (
              <ErrorMessage
                className={style.error}
                name="username"
                component="div"
              />
            ) : null}
            <label className={style.label} htmlFor="email">
              Email:
            </label>

            <Field className={style.formControl} name="email" type="email" />
            {errors.email && touched.email ? (
              <ErrorMessage
                className={style.error}
                name="email"
                component="div"
              />
            ) : null}
            <label className={style.label} htmlFor="password">
              Password:
            </label>

            <Field type="password" className={style.formControl} name="password" />
            {errors.password && touched.password ? (
              <ErrorMessage
                className={style.error}
                name="password"
                component="div"
              />
            ) : null}
            <span className={style.message}>
              Already have an account? <Link to="/auth">Login</Link>
            </span>
            <button className={style.btn} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
