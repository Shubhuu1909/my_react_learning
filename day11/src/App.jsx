import { useState } from "react";

const products = [
  { id: 1, name: "iPhone", price: 50000 },
  { id: 2, name: "Samsung", price: 40000 }
];

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {

    const exist = cart.find(item => item.id === product.id);
    console.log(exist);
    

    if (exist) {

      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }
        return item;
      });

      setCart(updatedCart);

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);

    }
  }

  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div>

      <h1>Products</h1>

      {products.map(product => (
        <div key={product.id}>

          <h2>{product.name}</h2>

          <h3>₹{product.price}</h3>

          <button onClick={() => addToCart(product)}>
            Add To Cart
          </button>

        </div>
      ))}

      <hr />

      <h1>Cart</h1>

      {cart.map(item => (
        <div key={item.id}>
          {item.name}
          {" "}
          Qty : {item.quantity}
          {" "}
          Price : ₹{item.price * item.quantity}
        </div>
      ))}

      <h2>Total : ₹{total}</h2>

    </div>
  );
}

export default App;