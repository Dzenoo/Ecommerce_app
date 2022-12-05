import { useStateContext } from "../../context/StateContext";
import { useAuthContext } from "../../context/AuthContext";

import Link from "next/link";

import Cart from "../Cart/Cart";
import NavCartButton from "./NavCartButton";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const { logoutHandler, userIsLoggedIn } = useAuthContext();
  const { showCart, setShowCart } = useStateContext();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Ambi Shop</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li className={classes.hide}>
            <Link href="/products">Products</Link>
          </li>

          {userIsLoggedIn && (
            <li>
              <Link href="/new-product">Add Products</Link>
            </li>
          )}

          {userIsLoggedIn && (
            <li>
              <button
                className={classes.logout}
                onClick={() => logoutHandler()}
              >
                Logout
              </button>
            </li>
          )}

          <li>
            <NavCartButton onClick={() => setShowCart(true)} />
          </li>

          <li>{showCart && <Cart />}</li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
