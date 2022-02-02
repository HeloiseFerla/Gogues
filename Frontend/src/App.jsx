import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ModalLogin from 'components/ModalLogin';
import GlobalStyle from './GlobalStyle';
import Home from './components/Home';
import Header from './components/Header';
import Bars from './components/Bars';
import Restaurants from './components/Restaurants';
import TopBtn from './components/TopBtn';
import Footer from './components/Footer';

function App() {
  const [modalLogin, setModalLogin] = useState(false);
  return (
    <>
      {console.log(modalLogin)}
      <GlobalStyle />
      <Header setModalLogin={setModalLogin} />
      {modalLogin && <ModalLogin />}
      <Routes>
        <Route path="/" element={<Home setModalLogin={setModalLogin} />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="bars" element={<Bars />} />
      </Routes>
      <TopBtn />
      <Footer />
    </>
  );
}

export default App;
