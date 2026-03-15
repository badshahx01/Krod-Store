# Krod Store 🛍️

A modern, responsive online shopping store built with HTML, CSS, and JavaScript.

## Features

- ✨ Clean and modern UI design
- 📱 Fully responsive (works on mobile, tablet, desktop)
- 🛒 Product catalog with easy ordering via WhatsApp
- 💾 Progressive Web App (PWA) - Works offline
- ⚡ Fast loading and smooth animations
- 🎨 Beautiful gradient design with orange theme

## Files

- `index.html` - Main HTML structure
- `app.js` - JavaScript functionality for ordering
- `products.js` - Product database
- `manifest.json` - PWA configuration
- `service-worker.js` - Offline functionality
- `README.md` - This file

## How to Use

1. Clone or download this repository
2. Update `WHATSAPP_NUMBER` in `app.js` with your WhatsApp number
3. Modify products in `products.js` to add your own items
4. Deploy to GitHub Pages or your hosting service

## Updating Products

Edit `products.js` and add/modify items in the `PRODUCTS` array:

```javascript
{
  id: 7,
  name: "Your Product Name",
  price: 999,
  description: "Product description here",
  image: "https://your-image-url.jpg"
}
```

## Deploying to GitHub Pages

1. Create a new repository on GitHub named `krod-store`
2. Push these files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" and choose `main` branch
5. Your store will be live at `https://yourusername.github.io/krod-store`

## WhatsApp Integration

When customers click "Order Now", it opens WhatsApp with a pre-filled message containing:
- Product name
- Product price
- Request for confirmation

Update the phone number in `app.js` (line 1) with your WhatsApp number in format: `919991361107` (country code + number without + symbol)

## License

Free to use and modify for your business!
