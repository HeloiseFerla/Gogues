import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Signup() {
  const [search, setSearch] = useState([]);
  const [cities, setCities] = useState([]);
  const [autoResults, setAutoResults] = useState([]);
  const [form, setForm] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    city: '',
    title: '',
  });

  const handleChangeFormData = (e) => {
    const newData = { ...form };
    newData[e.target.name] = e.target.value;
    setForm(newData);
  };

  const handleChangeFormCity = async (res) => {
    const newData = { ...form };
    newData.city = res;
    await setForm(newData);
    await setSearch(res);
    await setAutoResults([]);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

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
    if (search.length && autoResults[0] && form.city === search) {
      setAutoResults([]);
    } else {
      setAutoResults(
        cities.filter((name) =>
          name.toUpperCase().includes(search.toUpperCase())
        )
      );
    }
  }, [search]);

  return (
    <article className="log">
      <h2>PAS ENCORE DE COMPTE ? </h2>
      <form id="signup">
        <input
          type="email"
          value={form.email}
          name="email"
          placeholder="Email"
          onChange={handleChangeFormData}
        />
        <input
          type="password"
          value={form.password}
          name="password"
          placeholder="Mot de passe"
          onChange={handleChangeFormData}
        />
        <input
          type="text"
          value={form.lastname}
          name="lastname"
          placeholder="Nom"
          onChange={handleChangeFormData}
        />
        <input
          type="text"
          value={form.firstname}
          name="firstname"
          placeholder="Prénom"
          onChange={handleChangeFormData}
        />
        <input
          id="city"
          type="text"
          value={search}
          placeholder="Ville"
          onChange={handleSearchChange}
        />
        <ul>
          {autoResults.map((res) => {
            return (
              <li key={res}>
                <button
                  onClick={() => {
                    handleChangeFormCity(res);
                  }}
                  type="button"
                >
                  {res}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="radio">
          <label htmlFor="woman">
            <input
              name="title"
              type="radio"
              id="woman"
              value="0"
              onChange={handleChangeFormData}
            />
            &#x2640;
          </label>
          <label htmlFor="man">
            <input
              name="title"
              type="radio"
              id="man"
              value="1"
              onChange={handleChangeFormData}
            />
            &#9794;
          </label>
        </div>

        <input type="submit" value="Créer un compte" />
      </form>
    </article>
  );
}
