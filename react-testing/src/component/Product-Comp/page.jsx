import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiShoppingCart, CiCirclePlus } from "react-icons/ci";
import { GrSubtractCircle } from "react-icons/gr";

export default function ProductList() {
  const [cartState, setCartState] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cart")
      .then((response) => {
        console.log('this is the response',response);
        setProducts(response?.data); 
        
      })
      .catch((error) => {
        console.log("The data was not found", error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(cartState));
  }, [cartState]);

  const addToCart = (product) => {
    setCartState((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  };

  const incrementQuantity = (id) => {
    setCartState((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartState((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartState((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartState
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      <div className="">
        <h1>Dessert</h1>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img
                src={
                  window.innerWidth < 765
                    ? product.image.mobile
                    : product.image.desktop
                }
                alt={product.name}
              />
              
              {cartState.find((item) => item.id === product.id) ? (
                <div className="quantity">
                  <button>
                    <GrSubtractCircle
                      onClick={() => decrementQuantity(product.id)}
                    />
                  </button>
                  <span>
                    {cartState.find((item) => item.id === product.id)?.quantity}
                  </span>
                  <button>
                    <CiCirclePlus
                      onClick={() => incrementQuantity(product.id)}
                    />
                  </button>
                </div>
              ) : (
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              )}
              <div>{product.name}</div>
              <div>${product.price}</div>
            </div>
          ))}
        </div>
        <div className="">
          {cartState.length > 0 ? (
            cartState.map((item) => (
              <div key={item.id}>
                <span>{item.name}</span>
                <span>{item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))
          ) : (
            <div>Your Cart is Empty</div>
          )}
        </div>
      </div>
    </div>
  );
}
