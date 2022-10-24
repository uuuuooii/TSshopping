import React, { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import "../styles/Sale.css";

const Sale = ({ discounts, setDisItem }: any) => {

  //모달
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const SalehandleClick = (item: any) => {
    setDisItem((prev: any) => {
      return [...prev, item];
    })
  }

  return (
    <div>
      <button className="sale_button" onClick={openModal}>+할인</button>
      <Modal open={modalOpen} close={closeModal} header="할인 메뉴">
        <div>
          {discounts.map((discounts: any) => (
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
export default Sale
