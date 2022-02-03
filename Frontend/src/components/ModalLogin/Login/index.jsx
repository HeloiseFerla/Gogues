import { useState } from 'react';
import axios from 'axios';
import { api, cookies } from 'conf';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

export default function Login({ setModalLogin }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const HandleChangeFormData = (e) => {
    const newData = { ...form };
    newData[e.target.name] = e.target.value;
    setForm(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    const url = `${process.env.REACT_APP_API_URL}/auth/login`;
    const formData = { email, password };
    axios.post(url, formData).then(({ data }) => {
      const { token, user } = data;
      cookies.set('token', token);
      api.defaults.headers.authorization = `Bearer ${token}`;
      dispatch({ type: 'LOGIN', user });
      setModalLogin(false);
    });
  };

  return (
    <article className="log">
      <h2>D&Eacute;JA UN COMPTE ? </h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={form.email}
          placeholder="Email"
          onChange={HandleChangeFormData}
        />
        <input
          name="password"
          type="password"
          value={form.password}
          placeholder="Mot de passe"
          onChange={HandleChangeFormData}
        />
        <input type="submit" value="Me connecter" />
      </form>
    </article>
  );
}
Login.propTypes = {
  setModalLogin: PropTypes.func,
};

Login.defaultProps = {
  setModalLogin: () => {},
};
