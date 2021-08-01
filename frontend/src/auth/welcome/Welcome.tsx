import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const history = useHistory();
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData")!);
    axios
      .get("http://localhost:3000/authentication/profile", {
        headers: {
          Authorization: "Bearer " + userData,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        localStorage.clear()
        history.push("/auth");
      });
  }, []);

  return (
    <div>
      <h1>This is welcome page</h1>
      <button onClick={() => history.push("/auth")}>Logout</button>
    </div>
  );
};

export default Welcome;
