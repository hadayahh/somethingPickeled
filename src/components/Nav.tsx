import { Link } from "react-router-dom";
import "../index.css";

type NavProps = {
  cart: number;
};

export function Nav({ cart }: NavProps) {
  return (
    <ul className="nav-bar">
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/story">
        <li>Our Story</li>
      </Link>
      <Link to="/shop">
        <li>Shop</li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
      <Link to="/cart">
        {cart > 0 && <span className="cart-count">{cart}</span>}
        <li>Cart</li>
      </Link>
    </ul>
  );
}
