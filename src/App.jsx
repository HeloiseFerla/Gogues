import { Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import GlobalStyle from 'style';
import Home from './components/home';
import Header from './components/header';
import Bars from './components/bars';
import Restaurants from './components/restaurants';
import STopBtn from './components/topBtn';

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="bars" element={<Bars />} />
      </Routes>
      <STopBtn />
    </>
  );
}

export default App;
