import React, { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import "../styles/Sale.css";

const AddItem = () => {
  //모달
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [discounts, setDiscounts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/discounts")
      .then((res) => res.json())
      .then((res) => {
        setDiscounts(res);
      });
  }, []);

  const SalehandleClick = (item: any) => {
    discounts.push(item);
  }

  return (
    <div>
      <button className="sale_button" onClick={openModal}>+할인</button>
      <Modal open={modalOpen} close={closeModal} header="할인 메뉴">
        <div>
          {discounts.map((discounts) => (
            <div key={discounts}>
              <span>{discounts.name}</span>&nbsp;&nbsp;
              <span>{discounts.rate}%</span>&nbsp;&nbsp;&nbsp;
              <button onClick={() => SalehandleClick(discounts)}>추가</button>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  )
}
export default AddItem
