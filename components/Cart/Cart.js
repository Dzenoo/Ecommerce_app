import { useStateContext } from "../../context/StateContext";
import { useSelector } from "react-redux";

import Link from "next/link";

import CartItem from "./CartItem";

const Cart = () => {
  const { setShowCart } = useStateContext();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <span className="heading">X</span>
          <span className="cart-num-items">({totalQuantity} products)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <h3>Your cart is Empty</h3>
            <Link href="/products">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Go to Products
              </button>
            </Link>
          </div>
        )}

        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              image: item.image,
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}

        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="btn-container">
              <Link href="/checkout">
                <button type="button" className="btn">
                  Pay
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
