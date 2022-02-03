import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cookies, api } from 'conf';
import axios from 'axios';
import ModalLogin from 'components/ModalLogin';
import MyAccount from 'components/MyAccount';
import GlobalStyle from './GlobalStyle';
import Home from './components/Home';
import Header from './components/Header';
import Bars from './components/Bars';
import Restaurants from './components/Restaurants';
import TopBtn from './components/TopBtn';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    api.defaults.headers.authorization = `Bearer ${cookies.get('token')}`;
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/auth/login/token`,
        {},
        {
          headers: {
            Authorization: `Bearer ${cookies.get('token')}`,
          },
        }
      )
      .then(({ data }) => {
        const { user } = data;
        dispatch({ type: 'LOGIN', user });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  }, []);
  const [modalLogin, setModalLogin] = useState(false);
  const [myAccount, setMyAccount] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Header setModalLogin={setModalLogin} setMyAccount={setMyAccount} />
      {modalLogin && <ModalLogin setModalLogin={setModalLogin} />}
      {myAccount && <MyAccount setMyAccount={setMyAccount} />}
      <Routes>
        <Route
          path="/"
          element={
            !modalLogin && !myAccount && <Home setModalLogin={setModalLogin} />
          }
        />
        <Route
          path="restaurants"
          element={!modalLogin && !myAccount ? <Restaurants /> : myAccount}
        />
        <Route path="bars" element={<Bars />} />
      </Routes>
      <TopBtn />
      <Footer />
    </>
  );
}

export default App;
