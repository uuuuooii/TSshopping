import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import ItemAdd from './ItemAdd';
import Cart from '../Shopping/Cart'
import GetItems from '../redux/Items'
import type {  AppDispatch} from '../redux/ConfigureStore'
import "../styles/main.css";

const Main = ({ handleClick }:any) => {
  const [item, setItem] = useState([]);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    
    // dispatch(GetItems());
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/items")
      .then((res) => res.json())
      .then((res) => {
        setItem(res);
        console.log(res);
      });
  }, []);

  return (
    <section>
      {item.map((item) => (
        <>
          <Item key={item.id} item={item} handleClick={handleClick} />
        </>
      ))}

     
    </section>
  );
};

export default Main;
