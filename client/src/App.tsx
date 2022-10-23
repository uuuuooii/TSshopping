import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./Shopping/Main";
import Cart from "./Shopping/Cart";
import Navbar from './components/Navbar'
import Item from "./Shopping/Item";
import ItemAdd from './Shopping/ItemAdd'

const App = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (item:any) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item:any, d:any) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].count += d;

    if (arr[ind].count === 0) arr[ind].count = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <BrowserRouter>
      <Navbar size={cart.length} />
      <Routes>
        <Route>
          <Route path="/" element={<Main  handleClick={handleClick}/>}/>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
          <Route path="/itemadd" element={<ItemAdd item={Item}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
