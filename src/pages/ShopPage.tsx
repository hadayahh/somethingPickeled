import products from "../data/products.json";

export function ShopPage() {
  return (
    <>
      <div>Shop page</div>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <img src={product.imageUrl} alt={product.name} />
        </li>
      ))}
    </>
  );
}
