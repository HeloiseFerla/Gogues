import { useState } from 'react';
// import axios from 'axios';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const HandleChangeFormData = (e) => {
    const newData = { ...form };
    newData[e.target.name] = e.target.value;
    setForm(newData);
  };

  return (
    <article className="log">
      <h2>D&Eacute;JA UN COMPTE ? </h2>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <input
          type="email"
          value={form.email}
          placeholder="Email"
          onChange={HandleChangeFormData}
        />
        <input
          type="password"
          value={form.password}
          placeholder="Mot de passe"
          onChange={HandleChangeFormData}
        />
      </form>
    </article>
  );
}
