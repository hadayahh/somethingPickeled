import products from "../data/products.json";
import Shipping from "../components/Shipping";
import { Nav } from "../components/Nav";
import "../index.css";

export function ShopPage() {
  type Product = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  };
  return (
    <>
      <Shipping />
      <Nav />
      <ul className="product-grid">
        {products.map((product: Product) => (
          <li key={product.id} className="product-item">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <img src={product.imageUrl} alt={product.name} />
            <button>Add To Cart</button>
          </li>
        ))}
      </ul>
    </>
  );
}
