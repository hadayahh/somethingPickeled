import products from "../data/products.json";
import Shipping from "../components/Shipping";
import { Nav } from "../components/Nav";

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
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <img src={product.imageUrl} alt={product.name} />
            <h4>Add To Cart</h4>
          </li>
        ))}
      </ul>
    </>
  );
}
