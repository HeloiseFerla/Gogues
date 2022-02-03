import { useState } from 'react';
import axios from 'axios';
import SResetPassword from './style';

export default function ResetPassword() {
  const [isPass, setIsPass] = useState(false);
  const [reset, setReset] = useState({
    email: '',
    showError: false,
    showNullError: false,
    messageFromServer: '',
  });
  const HandleChange = (e) => {
    const newData = { ...reset };
    newData[e.target.name] = e.target.value;
    setReset(newData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email } = reset;
    const formData = { email };
    const url = `${process.env.REACT_APP_API_URL}/pswd`;
    axios
      .post(url, formData)
      // .then(({ data }) => {

      // })
      .catch(({ response }) => {
        if (response.data === 'email required') {
          const newData = { ...reset };
          newData.showNullError = true;
          newData.showError = false;
          setReset(newData);
        } else if (response.data === 'email not in db') {
          const newData = { ...reset };
          newData.showError = true;
          newData.showNullError = false;
          setReset(newData);
        }
      });
  };

  return (
    <SResetPassword>
      {isPass ? (
        <>
          <h2>Réinitialisation du mot de passe</h2>
          <form>
            <input
              type="email"
              name="email"
              value={reset.email}
              onChange={HandleChange}
              placeholder="Email"
            />
            <input type="submit" value="Envoyer" onClick={handleSubmit} />
          </form>
          {reset.showError && <p>Adresse mail invalide</p>}
          {reset.showNullError && <p>L&apos;adresse mail doit être indiquée</p>}
          {reset.messageFromServer === 'recovery mail sent' && (
            <p>Le mail de réinitialisation a bien été envoyé !</p>
          )}
        </>
      ) : (
        <button onClick={() => setIsPass(true)} type="button">
          Mot de passe oublié
        </button>
      )}
    </SResetPassword>
  );
}
