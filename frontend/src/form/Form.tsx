import React, { FormEvent, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Form.module.css";

interface Input {
  username: string;
  email: string;
  password: string;
}

const Form: React.FC = () => {
  const [Input, setInput] = useState<Input>({
    username: "",
    email: "",
    password: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInput((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(Input);
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
      <form onSubmit={(e) => onClick(e)} className={style.container}>
        <div className={style.formControl}>
          <label className={style.label} htmlFor="username">Username:</label>
          <input
            value={Input.username}
            type="text"
            className={style.input}
            id="username"
            autoComplete="off"
            name="username"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className={style.formControl}>
          <label className={style.label} htmlFor="email">Email:</label>
          <input
            onChange={(e) => onChange(e)}
            value={Input.email}
            type="text"
            className={style.input}
            id="email"
            name="email"
            autoComplete="off"
          />
        </div>
        <div className={style.formControl}>
          <label className={style.label} htmlFor="password">Password:</label>
          <input
            value={Input.password}
            type="text"
            className={style.input}
            id="password"
            autoComplete="off"
            name="password"
            onChange={(e) => onChange(e)}
          />
        </div>
        <button className={style.btn} type="submit">
          Click Me!!
        </button>
      </form>
      <div>
        <h1>Username: {Input.username}</h1>
        <h1>Email: {Input.email}</h1>
        <h1>Password: {Input.password}</h1>
      </div>
    </div>
  );
};

export default Form;
