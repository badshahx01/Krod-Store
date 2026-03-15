# Krod-Store
An Online Store
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Krod Store - Online Shopping</title>

<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#ff6b35">

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f5f5f5;
  color: #333;
}

header {
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

header h1 {
  font-size: 28px;
  margin-bottom: 5px;
}

header p {
  font-size: 14px;
  opacity: 0.9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.product {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.product:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.product img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: #e0e0e0;
}

.product-info {
  padding: 15px;
}

.product-info h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: #333;
}

.product-info p {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
}

.price {
  font-size: 20px;
  font-weight: bold;
  color: #ff6b35;
  margin-bottom: 12px;
}

button {
  width: 100%;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: opacity 0.3s;
}

button:hover {
  opacity: 0.9;
}

button:active {
  transform: scale(0.98);
}

footer {
  text-align: center;
  padding: 20px;
  color: #666;
  font-size: 14px;
  margin-top: 40px;
}

@media (max-width: 768px) {
  .products {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
  
  header h1 {
    font-size: 24px;
  }
}
</style>

</head>

<body>

<header>
  <h1>🛍️ Krod Store</h1>
  <p>Quality Products at Great Prices</p>
</header>

<div class="container">
  <div class="products" id="productsContainer">
    <!-- Products will be loaded here -->
  </div>
</div>

<footer>
  <p>&copy; 2026 Krod Store. All rights reserved.</p>
  <p>Contact us on WhatsApp for orders and inquiries</p>
</footer>

<script src="products.js"></script>
<script src="app.js"></script>

<script>
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('service-worker.js').catch(err => console.log('SW registration failed'));
}
</script>

</body>
</html>
const PRODUCTS = [
  {
    id: 1,
    name: "Premium Running Shoes",
    price: 1500,
    description: "Comfortable and durable running shoes for all terrains",
    image: "https://via.placeholder.com/250x200?text=Running+Shoes"
  },
  {
    id: 2,
    name: "Classic T-Shirt",
    price: 500,
    description: "High-quality cotton t-shirt in multiple colors",
    image: "https://via.placeholder.com/250x200?text=T-Shirt"
  },
  {
    id: 3,
    name: "Travel Backpack",
    price: 900,
    description: "Spacious backpack perfect for travel and daily use",
    image: "https://via.placeholder.com/250x200?text=Backpack"
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: 2000,
    description: "High-quality sound with noise cancellation",
    image: "https://via.placeholder.com/250x200?text=Earbuds"
  },
  {
    id: 5,
    name: "Stainless Steel Water Bottle",
    price: 800,
    description: "Keep your drinks hot or cold for hours",
    image: "https://via.placeholder.com/250x200?text=Water+Bottle"
  },
  {
    id: 6,
    name: "Smartphone Case",
    price: 350,
    description: "Protective case for your smartphone",
    image: "https://via.placeholder.com/250x200?text=Phone+Case"
  }
];
