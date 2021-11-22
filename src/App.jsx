import { Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import GlobalStyle from 'GlobalStyle';
import Home from './components/home';
import Header from './components/header';
import Bars from './components/bars';
import Restaurants from './components/restaurants';

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
    </>
  );
}

export default App;
