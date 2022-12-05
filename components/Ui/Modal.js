import { Fragment } from "react";

import classes from "./Modal.module.css";

const ModalOVerlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <ModalOVerlay onClick={props.onClick}>{props.children}</ModalOVerlay>
    </Fragment>
  );
};

export default Modal;
