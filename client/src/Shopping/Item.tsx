import { useState, useEffect } from "react";
import "../styles/Item.css";

const Item = ({ handleClick, cart }:any) => {

  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/items")
      .then((res) => res.json())
      .then((res) => {
        setItem(res);
        console.log(res);
      });
  }, []);


  return (
   
      <>
       {item.map((item) => (
        <div className="items">
          <div className="details">
            <p>{item.name}</p>
            <p className="price">{item.price}원</p>
            <button onClick={() => handleClick(item)}>추가</button>
          </div>
        </div>
    ))}
    </>
  );
};

export default Item;
