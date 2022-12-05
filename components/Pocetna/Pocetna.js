import React, { useState } from "react";

import classes from "./Pocetna.module.css";

import Modal from "../ui/Modal";

const Pocetna = () => {
  const [modalIsShow, setModalIsShow] = useState(true);

  setTimeout(() => {
    setModalIsShow(false);
  }, 3000);

  return (
    <section className={classes.hero__section}>
      <div className={classes.text}>
        <h1>Online shopping</h1>
        <p>e-commerce dIgital website</p>
      </div>
      <div>
        {modalIsShow && (
          <Modal>
            <h2
              style={{
                color: "#303030",
                textTransform: "lowercase",
                textAlign: "center",
              }}
            >
              To add products, go to /auth
            </h2>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Pocetna;
