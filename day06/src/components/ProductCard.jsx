function ProductCard({ name, brand, price, features }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <h3>{brand}</h3>
      <p>{features}</p>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  );
}

export default ProductCard;