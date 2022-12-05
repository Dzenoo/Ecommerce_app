import React, { useState } from "react";
import { useSelector } from "react-redux";

import Link from "next/link";
import Modal from "../../components/Ui/Modal";
import Checkout from "../../components/Cart/Checkout/Checkout";

const CheckoutPage = () => {
  const [modalIsShow, setModalIsShow] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  async function checkOrderHandler(enteredOrderData) {
    await fetch("/api/new-order", {
      method: "POST",
      body: JSON.stringify({
        userData: enteredOrderData,
        orderedItems: cartItems,
      }),
      headers: { "Content-Type": "application/json" },
    });
    setModalIsShow(true);
  }

  return (
    <>
      <Checkout onConfirm={checkOrderHandler} />
      {modalIsShow && (
        <Modal>
          <h1>Success</h1>
          <p>Thank you for ordering!</p>
          <Link href="/">Go to Home</Link>
        </Modal>
      )}
    </>
  );
};

export default CheckoutPage;
