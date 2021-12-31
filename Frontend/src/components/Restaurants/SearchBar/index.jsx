import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SSearchBar from './style';

export default function SearchBar({ setCity }) {
  const [search, setSearch] = useState([]);
  const [cities, setCities] = useState([]);
  const [autoResults, setAutoResults] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/cities`)

      .then(({ data }) => {
        const tempcities = data.map((obj) => {
          return obj.name;
        });
        setCities([...tempcities]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (search.length) {
      setAutoResults(
        cities.filter((name) =>
          name.toUpperCase().includes(search.toUpperCase())
        )
      );
    } else {
      setAutoResults([]);
    }
  }, [search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <SSearchBar>
      <input
        type="search"
        value={search}
        onChange={handleSearchChange}
        placeholder="Lille"
      />
      <ul>
        {autoResults.map((res) => {
          return (
            <li key={res}>
              <button
                onClick={() => {
                  setCity(res);
                }}
                type="button"
              >
                {res}
              </button>
            </li>
          );
        })}
      </ul>
    </SSearchBar>
  );
}
SearchBar.propTypes = {
  setCity: PropTypes.func,
};
SearchBar.defaultProps = {
  setCity: () => {},
};
