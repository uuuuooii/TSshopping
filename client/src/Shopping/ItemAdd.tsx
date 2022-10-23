import React, { useState, useEffect } from "react";
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
         <div>
          <button onClick={openModal}>+시술</button>
          {/* map쓰기 */}
            <Modal  open={modalOpen} close={closeModal} header="시술 메뉴">
                <span>{item[0].name}</span>
                {/* <span>{item[1].name}</span>
                <span>{item[2].name}</span>
                <span>{item[3].name}</span> */}
                <button onClick={()=> handleChange()}></button>
            </Modal>
          </div>
  )
}
export default AddItem
