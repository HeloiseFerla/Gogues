import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import Bars from './components/bars';
import Restaurants from './components/restaurants';
import './style.css';

function App() {
  return (
    <>
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
