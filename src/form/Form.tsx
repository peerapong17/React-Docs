import React, { FormEvent, useState } from "react";
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
      <form onSubmit={(e) => onClick(e)} className={style.container}>
        <div className={style.formControl}>
          <label htmlFor="username">Username:</label>
          <input
            value={Input.username}
            type="text"
            id="username"
            autoComplete="off"
            name="username"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className={style.formControl}>
          <label htmlFor="email">Email:</label>
          <input
            onChange={(e) => onChange(e)}
            value={Input.email}
            type="text"
            id="email"
            name="email"
            autoComplete="off"
          />
        </div>
        <div className={style.formControl}>
          <label htmlFor="password">Password:</label>
          <input
            value={Input.password}
            type="text"
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
