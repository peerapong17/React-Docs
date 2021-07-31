import axios from "axios";
import { FormEvent, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import style from "../../navbar/Navbar.module.css";

interface AthleteData {
  name: string;
  national: string;
  sport: string;
}

const CreateAthlete = () => {
  const history = useHistory();
  const { country } = useParams<{ country: string }>();
  const [athleteData, setAthleteData] = useState<AthleteData>({
    name: "",
    national: "",
    sport: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setAthleteData((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
      });
      console.log(athleteData)
  };

  const onClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/athlete", athleteData)
      .then((res) => history.push(`/listdb/${country}/athlete`));
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
      <form onSubmit={(e) => onClick(e)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
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
            onChange={(e) => onChange(e)}
            type="text"
            id="sport"
            autoComplete="off"
            name="sport"
          />
        </div>
        <button type="submit">Click Me!!</button>
      </form>
    </div>
  );
};

export default CreateAthlete;
