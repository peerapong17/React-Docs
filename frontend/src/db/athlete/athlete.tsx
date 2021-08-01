import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import style from "../navbar/Navbar.module.css";
import "./athlete.css";

interface AthleteResponse {
  id: string;
  name: string;
  national: string;
  sport: string;
}

const Athlete = () => {
  const history = useHistory()
  const { country } = useParams<{ country: string }>();
  const [athletes, setAthlete] = useState<AthleteResponse[]>([]);

  useEffect(() => {
    axios
      .get<AthleteResponse[]>(`http://localhost:3000/athlete/all/${country}`)
      .then((res) => setAthlete(res.data));
  }, [country]);

  const onDelete = (id: string) => {
    if (window.confirm("Are you sure")) {
      axios.delete(`http://localhost:3000/athlete/${id}`);
      setAthlete((preValue) => {
        return preValue.filter((data) => {
          return data.id !== id;
        });
      });
    }
  };

  return (
    <div>
      <Navbar>
        <Link className={style.navLink} to="/listdb">
          Back
        </Link>
        <Link className={style.navLink} to={`/listdb/${country}/athlete`}>
          List
        </Link>
        <Link
          className={style.navLink}
          to={`/listdb/${country}/athlete/create`}
        >
          Create
        </Link>
      </Navbar>

      <div className="container">
        <h1>This is {country}' Athelete</h1>
        {athletes.length !== 0 ? (
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Sport</th>
                <th>National</th>
                <th>Modify</th>
              </tr>
              {athletes.map((athlete) => {
                return (
                  <tr key={athlete.id}>
                    <td>{athlete.name}</td>
                    <td>{athlete.national}</td>
                    <td>{athlete.sport}</td>
                    <td>
                      <button onClick={()=>history.push(`/listdb/${country}/athlete/update/${athlete.id}`)}>Edit</button>
                      <button onClick={() => onDelete(athlete.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h3>{country} have no athlete yet...</h3>
        )}
      </div>
    </div>
  );
};

export default Athlete;
