import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import style from "./User.module.css";

interface UserResponse {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const User: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [userData, setUserData] = useState<UserResponse>();

  useEffect(() => {
    axios
      .get<UserResponse>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(({ data }) => setUserData(data))
      .catch((err) => alert(err.message));
  }, [id]);

  return (
    <div className={style.container}>
      <button
        onClick={() => history.push("/httpRequest")}
        className={style.button}
      >
        Back
      </button>
      {userData ? (
        <div>
          <h1>Id: {userData.id}</h1>
          <h1>name: {userData.username}</h1>
          <h1>username: {userData.username}</h1>
          <h1>email: {userData.email}</h1>
          <h1>phone: {userData.phone}</h1>
          <h1>website: {userData.website}</h1>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default User;
