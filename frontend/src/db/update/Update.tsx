import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";

interface DataResponse {
  id: string;
  name: string;
  capital: string;
  continent: string;
}

interface Input {
  name: string;
  capital: string;
  continent: string;
}

const Update = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [Input, setInput] = useState<Input>({
    name: "",
    capital: "",
    continent: "",
  });

  useEffect(() => {
    axios
      .get<DataResponse>(`http://localhost:3000/country/${id}`)
      .then(({ data }) => setInput(data))
      .catch((err) => alert(err.message));
  }, [id]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      Input.name.trim() !== "" &&
      Input.capital.trim() !== "" &&
      Input.continent.trim() !== ""
    ) {
      axios
        .patch(`http://localhost:3000/country/${id}`, Input)
        .then(() => history.push("/listdb"))
        .catch((err) => alert(err.message));
    }
  };
  return (
    <div>
      <Navbar />
      {Input.name !== "" ? (
        <form onSubmit={(e) => onClick(e)}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              value={Input.name}
              type="text"
              id="name"
              autoComplete="off"
              name="name"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div>
            <label htmlFor="capital">Capital:</label>
            <input
              onChange={(e) => onChange(e)}
              value={Input.capital}
              type="text"
              id="capital"
              name="capital"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="continent">Continent:</label>
            <input
              value={Input.continent}
              type="text"
              id="continent"
              autoComplete="off"
              name="continent"
              onChange={(e) => onChange(e)}
            />
          </div>
          <button type="submit">Click Me!!</button>
        </form>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Update;
