import Navbar from "./navbar/Navbar";
import "./ListDB.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

interface DataResponse {
  id: string;
  name: string;
  capital: string;
  continent: string;
}

const Database: React.FC = () => {
  const history = useHistory();
  const [countries, setCountry] = useState<DataResponse[]>([]);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get<DataResponse[]>("http://localhost:3000/country")
        .then(({ data }) => setCountry(data))
        .catch((err) => alert(err.message));
    };

    fetchData();
  }, []);

  const onDelete = (id: string) => {
    axios
      .delete(`http://localhost:3000/country/${id}`)
      .then(() => alert("deleted successfully"))
      .then(() =>
        axios
          .get<DataResponse[]>("http://localhost:3000/country")
          .then(({ data }) => setCountry(data))
      )
      .catch((err) => alert(err.message));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Country</h1>
        {countries.length !== 0 ? (
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Capital</th>
                <th>Continent</th>
                <th>Modify</th>
              </tr>
              {countries.map((country) => {
                return (
                  <tr key={country.id}>
                    <td>{country.name}</td>
                    <td>{country.capital}</td>
                    <td>{country.continent}</td>
                    <td>
                      <button onClick={() => history.push(`/update/${country.id}`)}>
                        Edit
                      </button>
                      <button onClick={() => onDelete(country.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Database;
