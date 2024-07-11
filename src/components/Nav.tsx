import { Link } from "react-router-dom";

export function Nav() {
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
        <li>Cart</li>
      </Link>
    </ul>
  );
}
