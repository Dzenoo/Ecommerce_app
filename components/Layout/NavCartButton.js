import { useEffect, useState } from "react";
// import { useStateContext } from "../../context/StateContext";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

import classes from "./NavCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isHighlited, setHighlited] = useState(false);

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.items);

  const btnClasses = `${classes.button} ${isHighlited ? classes.bump : ""}`;

  useEffect(() => {
    if (cartItems === 0) {
      return;
    }
    setHighlited(true);

    const timer = setTimeout(() => {
      setHighlited(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <FaShoppingCart />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default HeaderCartButton;
