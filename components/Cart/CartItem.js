import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { image, title, quantity, total, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartAction.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartAction.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className="product-container">
      <div className="item-desc">
        <img src={image} alt={title} />
        <div className="item_title ">
          <h1>{title}</h1>
          <div className="totalQuantity">
            <span className="item_show">(${price}/item)</span>
            <b>x</b>
            <span>{quantity}</span>
          </div>
          <p className="item_price">${total}</p>
        </div>
        <div className="quantity-desc">
          <button onClick={removeItemHandler}>
            <p>-</p>
          </button>
          <button onClick={addItemHandler}>
            <p>+</p>
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
