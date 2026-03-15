const WHATSAPP_NUMBER = "919991361107";

function displayProducts() {
  const container = document.getElementById('productsContainer');
  container.innerHTML = '';
  
  PRODUCTS.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">₹${product.price}</div>
        <button onclick="orderProduct('${product.name}', ${product.price})">Order Now</button>
      </div>
    `;
    container.appendChild(productDiv);
  });
}

function orderProduct(productName, price) {
  const message = `Hi! I want to order ${productName} (₹${price}) from Krod Store. Please confirm availability and delivery details.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}

// Display products when page loads
document.addEventListener('DOMContentLoaded', displayProducts);
