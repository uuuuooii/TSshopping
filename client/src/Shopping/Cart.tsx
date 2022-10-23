import { useState, useEffect } from "react";
import "../styles/Cart.css";
import Sale  from "./Sale";
import { BsChevronLeft } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart, handleChange,discounts }:any) => {
  console.log(discounts)
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const handleRemove = (id:any) => {
    const arr = cart.filter((item:any) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item:any) => (ans += item.count * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    
    <article>
      <BsChevronLeft onClick={() => navigate('/')} className="caer_icon"/>
      {cart.map((item:any) => (
        <div className="cart_box" key={item.id}>
          <div>
            <p>{item.name}</p>
            <p className="price">{item.price}</p>
          </div>
          <div className="cart_button">
            <button className="cart_button" onClick={() => handleChange(item, 1)}>+</button>
            <button className="cart_button">{item.count}</button>
            <button className="cart_button" onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <button onClick={() => handleRemove(item.id)}>삭제</button>
          </div>
      </div>
      ))}
      
      <div className="total">
        <span>합계</span>
        <span>{price}원</span>
      </div>
      <Sale/>
    </article>
  );
};

export default Cart;
