import React, { useEffect, useState } from "react";

export default function AllProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cart") 
      .then((response) => response.json())
      console.log()
      .then((data) => setProducts(data.data))
      .catch((error) => console.log("data not found", error));
  }, []);

  return (
    <div>
      <div>
        <h1>Desserts</h1>
        {products.map((item) => (
          <div key={item.id}>
            <img src={item.image.mobile} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}