import { useParams } from "react-router-dom";

const products = [
  {
    id: 101,
    name: "iPhone 15",
    price: 70000
  },
  {
    id: 102,
    name: "Samsung S24",
    price: 65000
  },
  {
    id: 103,
    name: "OnePlus 12",
    price: 50000
  }
];

function Product() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  return (
    <div>
      <h1>Product Details</h1>

      <h2>{product.name}</h2>

      <p>Price: ₹{product.price}</p>
    </div>
  );
}

export default Product;