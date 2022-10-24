import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./Shopping/Cart";
import Navbar from './components/Navbar'
import Item from './Shopping/Item'

const App = () => {
  const [cart, setCart] = useState([]);
  const handleClick = (item: any) => {
    if (cart.indexOf(item) !== -1) return;
    setCart((prev) => [...prev, item]);
  };

  const handleChange = (item: any, d: any) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].count += d;

    if (arr[ind].count === 0) arr[ind].count = 1;
    setCart([...arr]);
  };

  return (
    <BrowserRouter>
      <Navbar size={cart.length} />
      <Routes>
        <Route>
          <Route path="/" element={<Item handleClick={handleClick} />} />
          <Route path="/cart" element={<Cart setCart={setCart} handleChange={handleChange} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
