import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import style from "../../navbar/Navbar.module.css";

interface AthleteData {
  name: string;
  national: string;
  sport: string;
}

const UpdateAthlete: React.FC = () => {
  const { id, country } = useParams<{ id: string; country: string }>();
  const [athleteData, setAthleteData] = useState<AthleteData>({
    name: "",
    national: "",
    sport: "",
  });

  useEffect(() => {
    axios
      .get<AthleteData>(`http://localhost:3000/athlete/${id}`)
      .then((res) => setAthleteData(res.data));
  }, [id]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAthleteData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <Navbar>
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
      {athleteData.name !== "" ? (
        <form onSubmit={(e) => onClick(e)}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              value={athleteData.name}
              onChange={(e) => onChange(e)}
              type="text"
              id="name"
              autoComplete="off"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="national">National:</label>
            <input
              value={athleteData.national}
              onChange={(e) => onChange(e)}
              type="text"
              id="national"
              name="national"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="sport">Sport:</label>
            <input
              value={athleteData.sport}
              onChange={(e) => onChange(e)}
              type="text"
              id="sport"
              autoComplete="off"
              name="sport"
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

export default UpdateAthlete;
