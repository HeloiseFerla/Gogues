import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { api, cookies } from 'conf';
import { useState, useEffect } from 'react';
import SMyAccount from './style';

export default function MyAccount({ setMyAccount }) {
  const [isData, setIsData] = useState(false);
  const userData = useSelector((state) => state.user);
  const [search, setSearch] = useState(userData.city);
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState([]);
  const [autoResults, setAutoResults] = useState([]);

  const [formData, setFormData] = useState({
    email: userData.email,
    firstname: userData.firstname,
    lastname: userData.lastname,
    cityId: userData.city,
    title: userData.title,
    city: userData.city,
  });

  const dispatch = useDispatch();

  const handleChangeFormData = (e) => {
    const newData = { ...formData };
    newData[e.target.name] = e.target.value;
    setFormData(newData);
  };

  const handleChangeFormCity = async (res) => {
    const newData = { ...formData };
    newData.cityId = res.id;
    newData.city = res.name;
    await setFormData(newData);
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

  const handleClick = () => {
    setMyAccount(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, firstname, lastname, cityId, title, city } = formData;
    const url = `${process.env.REACT_APP_API_URL}/users/${userData.id}`;
    const form = {
      email,
      firstname,
      lastname,
      cityId,
      title,
      city,
    };
    api.put(url, form).then(({ data }) => {
      const { token, user } = data;
      cookies.set('token', token);
      api.defaults.headers.authorization = `Bearer ${token}`;
      dispatch({ type: 'LOGIN', user });
    });
    setIsData(false);
  };
  return (
    <SMyAccount>
      {console.log(formData)}
      <button
        type="button"
        aria-label="cross"
        className="cross"
        onClick={handleClick}
      >
        <span />
        <span />
      </button>
      {isData ? (
        <>
          <h2>Informations personnelles :</h2>
          <div className="type">
            <span className="field">email : </span>
            <input
              type="email"
              value={formData.email}
              name="email"
              placeholder="email"
              onChange={handleChangeFormData}
            />
          </div>
          <div className="type">
            <span className="field">Nom : </span>
            <input
              type="text"
              value={formData.lastname}
              name="lastname"
              placeholder="Nom"
              onChange={handleChangeFormData}
            />
          </div>
          <div className="type">
            <span className="field">Prénom : </span>
            <input
              type="text"
              value={formData.firstname}
              name="firstname"
              placeholder="Nom"
              onChange={handleChangeFormData}
            />
          </div>
          <div className="type">
            <span className="field">Ville : </span>
            <div className="city">
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
                          console.log(res);
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
            </div>
          </div>
          <div className="type">
            <span className="field">Civilité : </span>
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
          </div>
          <button className="changeData" type="button" onClick={handleSubmit}>
            Modifier mes informations
          </button>
        </>
      ) : (
        <>
          <h2>Informations personnelles :</h2>
          <div className="type">
            <span className="field">email : </span>
            <span className="user">{userData.email}</span>
          </div>
          <div className="type">
            <span className="field">Nom : </span>
            <span className="user">{userData.lastname}</span>
          </div>
          <div className="type">
            <span className="field">Prénom : </span>
            <span className="user">{userData.firstname}</span>
          </div>
          <div className="type">
            <span className="field">Ville : </span>
            <span className="user">{userData.city}</span>
          </div>
          <div className="type">
            <span className="field">Civilité : </span>
            {!userData.title ? (
              <span className="user"> &#x2640;</span>
            ) : (
              <span className="user">&#9794;</span>
            )}
          </div>
          <button
            className="changeData"
            type="button"
            onClick={() => setIsData(true)}
          >
            Modifier mes informations
          </button>
          {/* <button
        className="changeData"
        type="button"
        onClick={() => setIsPass(true)}
      >
        Modifier mon mot de passe
      </button> */}
        </>
      )}
    </SMyAccount>
  );
}
MyAccount.propTypes = {
  setMyAccount: PropTypes.func,
};

MyAccount.defaultProps = {
  setMyAccount: () => {},
};
