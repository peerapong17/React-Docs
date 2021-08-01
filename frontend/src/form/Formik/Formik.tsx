import { NavLink } from "react-router-dom";
import style from "./Formik.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface MyFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Error {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, "Username should be at least 6 characters!")
    .max(50, "Password is too Long!")
    .required("Username is Required"),
  password: Yup.string()
    .min(6, "Password should be at least 6 characters!")
    .max(50, "Password is too long!")
    .required("Password is Required"),
  confirmPassword: Yup.string().required("ConfirmPassword is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const FormikForm = () => {
  const initialValues: MyFormValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div>
      <nav className={style.nav}>
        <ul className={style.ui}>
          <li className={style.li}>
            <NavLink
              activeStyle={{
                backgroundColor: "rgb(99, 206, 174)",
                padding: "10px",
              }}
              className={style.navLink}
              to="/form"
            >
              Normal Form
            </NavLink>
          </li>
          <li className={style.li}>
            <NavLink
              activeStyle={{
                backgroundColor: "rgb(99, 206, 174)",
                padding: "10px",
              }}
              className={style.navLink}
              to="/formik"
            >
              Formik
            </NavLink>
          </li>
        </ul>
      </nav>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          const { username, email, password, confirmPassword } = values;
          console.log('object')
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, touched, dirty }) => (
          <div className={style.container}>
            <Form className={style.formGroup}>
              <Field type="username" name="username" />
              <ErrorMessage
                className={style.errorMessage}
                name="username"
                component="div"
              />
              <Field type="email" name="email" />
              <ErrorMessage
                className={style.errorMessage}
                name="email"
                component="div"
              />
              <Field type="password" name="password" />
              <ErrorMessage
                className={style.errorMessage}
                name="password"
                component="div"
              />
              <Field type="password" name="confirmPassword" />
              <ErrorMessage
                className={style.errorMessage}
                name="confirmPassword"
                component="div"
              />
              <button
                className={style.btn}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
