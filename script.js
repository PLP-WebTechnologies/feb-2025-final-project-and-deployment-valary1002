const products = [
    { id: 1, name: "Laptop", price: "$999" },
    { id: 2, name: "Phone", price: "$499" },
    { id: 3, name: "Headphones", price: "$199" },
    { id: 4, name: "Shoes", price: "$79" },
    { id: 5, name: "Sunglasses", price: "$29" },
    { id: 6, name: "Dress", price: "$120" },
    { id: 7, name: "Earphones", price: "$49" },
    { id: 8, name: "Bluetooth Pods", price: "$89" }
  ];
  
  const productList = document.querySelector('.product-list');
  
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onclick="alert('Added ${product.name} to cart!')">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });
  