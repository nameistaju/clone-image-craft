
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy product data
const products = [
  {
    id: 1,
    name: "Silhouette No. 1 – Vermilion",
    price: 7999,
    description: "A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion.",
    category: "outerwear",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e4cdbf8bdebec5334f2ba02d67ceda2a3dae858d?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2a0d5d214a2dcd8a34fe3cf4832385e877f78574?placeholderIfAbsent=true",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7a1c4bb47b419308726822a91ad76260a462c468?placeholderIfAbsent=true"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Midnight Blazer",
    price: 8999,
    description: "Elegant midnight black blazer with clean lines and modern silhouette.",
    category: "blazers",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b1cc1a6887abacbe2280f0a5886a74a996162318?placeholderIfAbsent=true"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    featured: false
  },
  {
    id: 3,
    name: "Urban Coat",
    price: 12999,
    description: "Contemporary urban coat designed for the modern professional.",
    category: "coats",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8b995b6725eb36f5fb90660829d4286f9290d604?placeholderIfAbsent=true"
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: true
  }
];

const categories = [
  { id: 1, name: "outerwear", displayName: "Outerwear" },
  { id: 2, name: "blazers", displayName: "Blazers" },
  { id: 3, name: "coats", displayName: "Coats" },
  { id: 4, name: "accessories", displayName: "Accessories" }
];

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Eclypse API',
    version: '1.0.0',
    endpoints: {
      products: '/api/products',
      categories: '/api/categories',
      product: '/api/products/:id'
    }
  });
});

// Get all products
app.get('/api/products', (req, res) => {
  try {
    const { category, featured, inStock } = req.query;
    let filteredProducts = [...products];

    if (category) {
      filteredProducts = filteredProducts.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (featured === 'true') {
      filteredProducts = filteredProducts.filter(product => product.featured);
    }

    if (inStock === 'true') {
      filteredProducts = filteredProducts.filter(product => product.inStock);
    }

    res.json({
      success: true,
      count: filteredProducts.length,
      data: filteredProducts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// Get single product
app.get('/api/products/:id', (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.json({
      success: true,
      data: product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// Get all categories
app.get('/api/categories', (req, res) => {
  try {
    res.json({
      success: true,
      count: categories.length,
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// Search products
app.get('/api/search', (req, res) => {
  try {
    const { q, priceMin, priceMax } = req.query;
    let filteredProducts = [...products];

    if (q) {
      const searchTerm = q.toLowerCase();
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
      );
    }

    if (priceMin) {
      filteredProducts = filteredProducts.filter(product => product.price >= parseInt(priceMin));
    }

    if (priceMax) {
      filteredProducts = filteredProducts.filter(product => product.price <= parseInt(priceMax));
    }

    res.json({
      success: true,
      count: filteredProducts.length,
      data: filteredProducts,
      query: { q, priceMin, priceMax }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// Waitlist signup
app.post('/api/waitlist', (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    // In a real app, you would save this to a database
    console.log('New waitlist signup:', email);

    res.json({
      success: true,
      message: 'Successfully joined waitlist',
      data: { email }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// Contact form
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required'
      });
    }

    // In a real app, you would save this to a database
    console.log('New contact form submission:', { name, email, message });

    res.json({
      success: true,
      message: 'Message sent successfully',
      data: { name, email, message }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 API available at http://localhost:${PORT}`);
  console.log(`📊 Products endpoint: http://localhost:${PORT}/api/products`);
  console.log(`📂 Categories endpoint: http://localhost:${PORT}/api/categories`);
});
