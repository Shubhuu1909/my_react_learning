import products from "./components/data";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <>
      <header className="navbar">
        <h1>ElectroMart</h1>

        <ul className="nav-links">
          <li>Home</li>
          <li>Mobiles</li>
          <li>Laptops</li>
          <li>Accessories</li>
          <li>Contact</li>
        </ul>
      </header>

     <section className="hero">
      <div className="hero-content">
       <h1>Latest Smartphones 2026</h1>

      <p>
          Discover premium mobile phones at unbeatable prices.
      </p>

      <button>Shop Now</button>
     </div>  
     </section>

      <section className="products-section">
        <h2>🔥 Best Selling Phones</h2>

        <div className="products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              brand={product.brand}
              price={product.price}
              features={product.features}
            />
          ))}
        </div>
      </section>

      <footer>
        <h3>ElectroMart</h3>
        <p>Your trusted electronics partner.</p>

        <p>© 2026 ElectroMart. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;