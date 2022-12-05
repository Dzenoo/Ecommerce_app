import { useSelector } from "react-redux";

import CheckoutForm from "./CheckoutForm";

import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <section className={classes.checkout__section}>
      {cartItems.length < 1 ? (
        <div>Something get wrong</div>
      ) : (
        <div>
          <h1>Shipping Address</h1>
          <CheckoutForm onConfirm={props.onConfirm} />
        </div>
      )}

      <div className={classes.cart__item}>
        {cartItems.map((item) => (
          <div className={classes.item_div} key={item.id}>
            <div className={classes.item_description}>
              <img src={item.image} alt={item.title} />
              <h1>{item.title}</h1>
              <h3>${item.price}</h3>

              <span className={classes.item__total}>
                Total Price:
                <br />
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {`${item.quantity} * $${item.price} = $${item.totalPrice}`}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Checkout;
