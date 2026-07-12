import "./App.css";
import { useState } from "react";

const products = [
  { id: 1, name: "iPhone", price: 50000 },
  { id: 2, name: "Samsung", price: 40000 }
];





function App()

{

  const [cart,setCart]=useState([])
  
  function addToCart(product){
    const exist=cart.find((itme)=>itme.id===product.id)
    if(exist)
    {
      const updatecart=cart.map((item)=>{
        if(item.id===product.id)
        {
          return{
             ...item,
            quantity: item.quantity + 1
          }
        }
        return item;
      })
      setCart(updatedCart);


    }
     else{
      setCart([...cart,
        {
           ...product,
          quantity: 1
        }])
     }


  }

  return(
    <div>
      {products.map((product) => {
       return (
      <div key={product.id}>
      <div>name:{product.name}</div>
      <div>price:{product.price}</div>
      <button onClick={() => addToCart(product)}>
      Add To Cart
      </button>
      <hr />

      <div>
      
        {cart.map((item)=>
      (
        <div>
          <h2>{item.name}</h2>
          <h2>{item.quantity}</h2>
           Price : ₹{item.price * item.quantity}
        </div>
      ))}
      </div>
    </div>


  );
})}
    </div>

  )
} 

export default App;