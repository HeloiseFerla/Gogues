import { Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import GlobalStyle from 'GlobalStyle';
import Home from './components/Home';
import Header from './components/Header';
import Bars from './components/Bars';
import Restaurants from './components/Restaurants';
import TopBtn from './components/TopBtn';
import Footer from './components/Footer';

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
      <TopBtn />
      <Footer />
    </>
  );
}

export default App;
