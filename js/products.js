import {productArray } from "./constants/productList.js";
const productsContainer = document.qquerySelector(".products");
productArray.forEach(function(product){
    productsContainer.innerHTML +=
    `
    <div class="products">
        <h2>&{product.name}</h2>
        <p>&{product.description}</p>
        <div class="product-price">&{product.price}</div>
        <button class="product-button">Add to cart</button>
    </div>
    `
   
}