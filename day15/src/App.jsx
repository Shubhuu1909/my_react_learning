import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      console.log(data);

      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>ID: {product.id}</h2>
          <h3>Name: {product.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;