
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Dummy product data
const products = [
  {
    id: 1,
    name: "Silhouette No. 1 – Vermilion",
    price: 7999,
    category: "clothing",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4cdbf8bdebec5334f2ba02d67ceda2a3dae858d",
    description: "A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem.",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 2,
    name: "Silhouette No. 2 – Midnight",
    price: 8999,
    category: "clothing",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a0d5d214a2dcd8a34fe3cf4832385e877f78574",
    description: "Elegant design with contemporary cuts.",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 3,
    name: "Silhouette No. 3 – Aurora",
    price: 9999,
    category: "clothing",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a1c4bb47b419308726822a91ad76260a462c468",
    description: "Premium quality with modern aesthetics.",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: false
  }
];

const categories = [
  { id: 1, name: "Clothing", slug: "clothing" },
  { id: 2, name: "Accessories", slug: "accessories" },
  { id: 3, name: "Footwear", slug: "footwear" }
];

// Routes
app.get('/api/products', (req, res) => {
  const { category, search, sort } = req.query;
  let filteredProducts = [...products];

  // Filter by category
  if (category && category !== 'all') {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }

  // Search functionality
  if (search) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Sort functionality
  if (sort) {
    switch (sort) {
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
  }

  res.json(filteredProducts);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

app.get('/api/categories', (req, res) => {
  res.json(categories);
});

// Waitlist endpoint
app.post('/api/waitlist', (req, res) => {
  const { email, name } = req.body;
  
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // In a real app, you'd save this to a database
  console.log('New waitlist signup:', { email, name });
  
  res.json({ message: 'Successfully added to waitlist', email });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
