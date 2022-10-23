import React, { useState, useEffect } from "react";
// import "../styles/cart.css";
import Modal from "../modal/Modal";

const AddItem = ({  handleChange }:any)=> {

  //모달
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };


  // const [item, setItem] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3001/items")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setItem(res);
  //       console.log(res);
  //     });
  // }, []);


  return (
         <div>
            <button onClick={openModal}>+할인</button>
          <Modal open={modalOpen} close={closeModal} header="할인 메뉴">
            <div>
            {/* <span>{item[0]}</span> */}
            </div>
          </Modal> 
          </div>
  )
}
export default AddItem
