import { useState } from "react";
import { useTypedSelector } from "./useTypeSelector";
import { useActions } from "./useActions";

const Search: React.FC = () => {
  const { data, loading, error } = useTypedSelector(
    (state) => state.repositories
  );
  const [searchTerm, setSearch] = useState<string>("");
  const { searchRepositories } = useActions();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(searchTerm);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="api"></label>
        <input
          value={searchTerm}
          onChange={onChange}
          type="text"
          name="api"
          id="api"
        />
        <button type="submit">Search</button>
      </form>
      {loading && <h1>Loading...</h1>}
      {data.main && data.name && data.weather.length !== 0 && (
        <div>
          <span>{data.name}</span>
          <span>{data.main.temp}</span>
          {data.weather.map((w) => {
            return <span key={w.main}>{w.main}</span>;
          })}
        </div>
      )}
      {error && alert(error)}
    </div>
  );
};

export default Search;
