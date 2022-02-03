import { useState, useEffect } from 'react';
import axios from 'axios';
import { api, cookies } from 'conf';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

export default function Signup({ setModalLogin }) {
  const [search, setSearch] = useState([]);
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState([]);
  const [autoResults, setAutoResults] = useState([]);
  const [form, setForm] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    cityId: 0,
    title: 0,
    isLogged: 1,
  });
  const dispatch = useDispatch();
  const handleChangeFormData = (e) => {
    const newData = { ...form };
    newData[e.target.name] = e.target.value;
    setForm(newData);
  };

  const handleChangeFormCity = async (res) => {
    const newData = { ...form };
    newData.cityId = res.id;
    await setForm(newData);
    await setSearch(res.name);
    await setCityName(res.name);
    await setAutoResults([]);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/cities`)
      .then(({ data }) => {
        const tempcities = data.map((obj) => {
          return { name: obj.name, id: obj.id };
        });
        setCities([...tempcities]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (search.length && autoResults[0] && cityName === search) {
      setAutoResults([]);
    } else {
      setAutoResults(
        cities.filter((city) =>
          city.name.toUpperCase().includes(search.toUpperCase())
        )
      );
    }
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, firstname, lastname, cityId, title, isLogged } =
      form;
    const url = `${process.env.REACT_APP_API_URL}/auth/signup`;
    const formData = {
      email,
      password,
      firstname,
      lastname,
      cityId,
      title,
      isLogged,
    };
    axios.post(url, formData).then(({ data }) => {
      const { token, user } = data;
      cookies.set('token', token);
      api.defaults.headers.authorization = `Bearer ${token}`;
      dispatch({ type: 'LOGIN', user });
      setModalLogin(false);
    });
  };
  return (
    <article>
      <h2>PAS ENCORE DE COMPTE ? </h2>
      <form id="signup" onSubmit={handleSubmit}>
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
              <li key={res.id}>
                <button
                  onClick={() => {
                    handleChangeFormCity(res);
                  }}
                  type="button"
                >
                  {res.name}
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

Signup.propTypes = {
  setModalLogin: PropTypes.func,
};

Signup.defaultProps = {
  setModalLogin: () => {},
};
