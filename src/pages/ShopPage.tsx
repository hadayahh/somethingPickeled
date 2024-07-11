import products from "../data/products.json";
import Shipping from "../components/Shipping";
import { Nav } from "../components/Nav";

export function ShopPage() {
  return (
    <>
      <Shipping />
      <Nav />
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <img src={product.imageUrl} alt={product.name} />
          <h4>Add To Cart</h4>
        </li>
      ))}
    </>
  );
}
