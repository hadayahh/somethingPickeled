import products from "../data/products.json";
import Shipping from "../components/Shipping";
import { Nav } from "../components/Nav";
import "../index.css";
import { useState } from "react";

export function ShopPage() {
  const [cart, setCart] = useState<number>(0);

  type Product = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  };

  const handleAddToCart = (): void => {
    setCart((prevCart) => (prevCart += 1));
  };

  const handleRmoveFromCart = (): void => {
    setCart((prevCart) => (prevCart > 0 ? prevCart - 1 : 0));
  };
  return (
    <>
      <Shipping />
      <Nav cart={cart} />
      <ul className="product-grid">
        {products.map((product: Product) => (
          <li key={product.id} className="product-item">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <img src={product.imageUrl} alt={product.name} />
            <button onClick={handleAddToCart}>Add To Cart</button>
            <button onClick={handleRmoveFromCart}>Remove From Cart</button>
          </li>
        ))}
      </ul>
    </>
  );
}
