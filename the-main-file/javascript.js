const cartDisplay = document.getElementById("cart");
const updateButton= true;

function cartImage() {
  fetch("http://localhost:4000/cart")
    .then((response) => {
      console.log("this is the response", response); 
      return response.json();
    })
    .then((data) => {
      console.log(data);

      cartDisplay.innerHTML = "";

      data.forEach((item) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("cart-item");

        productDiv.innerHTML = `
          <div class="cart-product">
            <div class="product-image relative">
              <img src="${item?.image?.thumbnail}" alt="${item.name}" />

              ${updateButton? updateUi() : addToCart()}
             
            </div>
            <div class="product-details">
              <h4>${item?.name}</h4>
              <p class="category">${item?.category}</p>
              <p class="price">$${item?.price}</p>
              
            </div>
          </div>
        `;

        cartDisplay.appendChild(productDiv);
      });
    })
    .catch((error) => {
      console.log("Error fetching cart data:", error);
      cartDisplay.innerHTML = "<p>Failed to load cart data.</p>";
    });
}



function addToCart() {
  
  return ` <button class='add-to-cart absolute red'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg> 
                Add to Cart
              </button>`
}
function updateUi() {
  
  return ` <button class='add-to-cart absolute'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg> 
                <span>0</span>
                +
              </button>`
}


cartImage();

