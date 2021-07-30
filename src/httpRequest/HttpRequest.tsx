import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./HttpRequest.module.css";

interface Data {
  id: string;
  name: string;
  email: string;
  website: string;
}

const HttpRequest: React.FC = () => {
  const [users, setUsers] = useState<Data[]>([]);

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    axios
      .get<Data[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => alert(err.message));
  };
  return (
    <div>
      <button
        type="button"
        onClick={(e) => onClick(e)}
        className={style.button}
      >
        Click to fetch data
      </button>
      {users.map((user) => {
        return <Link to={`user/${user.id}`}  style={{ textDecoration: "none" }}><span key={user.id} className={style.span}>{user.email}</span></Link>
      })}
    </div>
  );
};

export default HttpRequest;
function userState<T>(arg0: never[]): [any, any] {
  throw new Error("Function not implemented.");
}
