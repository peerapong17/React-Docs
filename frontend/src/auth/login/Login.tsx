import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./Login.module.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  username: Yup.string().email("Invalid email").required("Required"),
});

interface Input {
  username: string;
  password: string;
}

const initialValues: Input = {
  username: "",
  password: "",
};

const Login = () => {
  const history = useHistory()
  const onLogin = (values: Input) => {
    axios
      .post("http://localhost:3000/authentication/login", values)
      .then(({data}) => {
        if(data.authorization === true){
          localStorage.setItem('userData',JSON.stringify(data.access_token));
          history.push('/auth/welcome')
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className={style.container}>
      <span className={style.header}>Login</span>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values) => onLogin(values)}
      >
        {({ errors, touched }) => (
          <Form className={style.formGroup}>
            <label className={style.label} htmlFor="email">
              Email:
            </label>

            <Field className={style.formControl} id="email" name="username" type="email" />
            {errors.username && touched.username ? (
              <ErrorMessage
                className={style.error}
                name="username"
                component="div"
              />
            ) : null}
            <label className={style.label} htmlFor="password">
              Password:
            </label>

            <Field
              type="password"
              className={style.formControl}
              id="password"
              name="password"
            />
            {errors.password && touched.password ? (
              <ErrorMessage
                className={style.error}
                name="password"
                component="div"
              />
            ) : null}
            <span className={style.message}>
              Already have an account? <Link to="/auth/signup">Login</Link>
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

export default Login;
