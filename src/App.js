import Copyright from "./Copyright/Copyright";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './NavPages/Home'
import Shop from './NavPages/Shop'
import About from './NavPages/AboutPage'
import LoginSing from './NavPages/LoginSing'
import Cart from './NavPages/Cart'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/loginsing' element={<LoginSing />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Contact />
    </BrowserRouter>
  );
}

export default App; 