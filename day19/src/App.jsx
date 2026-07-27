import { useState } from "react";

function App() {
  const products = [
    {
      id: 1,
      name: "iPhone",
      price: 50000,
    },
    {
      id: 2,
      name: "Samsung",
      price: 40000,
    },
    {
      id: 3,
      name: "OnePlus",
      price: 30000,
    },
  ];

  const [cart, setCart] = useState([]);

  // Add To Cart
  function addToCart(product) {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
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
          quantity: 1,
        },
      ]);
    }
  }

  // Increase Quantity
  function increase(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    setCart(updatedCart);
  }

  // Decrease Quantity
  function decrease(id) {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  }

  // Remove Product
  function remove(id) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }

  // Empty Cart
  function emptyCart() {
    setCart([]);
  }

  // Total Price
  const totalPrice = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  // Total Items
  const totalItems = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      <h2>Cart Count : {totalItems}</h2>

      <hr />

      <h2>Products</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{product.name}</h3>

          <p>Price : ₹{product.price}</p>

          <button onClick={() => addToCart(product)}>
            Add To Cart
          </button>
        </div>
      ))}

      <hr />

      <h2>Cart</h2>

      {cart.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid blue",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h3>{item.name}</h3>

              <p>Price : ₹{item.price}</p>

              <p>Quantity : {item.quantity}</p>

              <button onClick={() => increase(item.id)}>+</button>

              <button onClick={() => decrease(item.id)}>-</button>

              <button onClick={() => remove(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total Price : ₹{totalPrice}</h2>

          <button onClick={emptyCart}>
            Empty Cart
          </button>
        </>
      )}
    </div>
  );
}

export default App;