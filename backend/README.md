
# Eclypse Backend API

A Node.js/Express backend API for the Eclypse fashion website.

## Features

- RESTful API endpoints
- CORS enabled for frontend connection
- Product management
- Category management
- Search functionality
- Waitlist signup
- Contact form handling

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The server will start on http://localhost:5000

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/search?q=term` - Search products

### Categories
- `GET /api/categories` - Get all categories

### Other
- `POST /api/waitlist` - Join waitlist
- `POST /api/contact` - Send contact message

### Query Parameters

For `/api/products`:
- `category` - Filter by category
- `featured` - Filter featured products (true/false)
- `inStock` - Filter in-stock products (true/false)

For `/api/search`:
- `q` - Search term
- `priceMin` - Minimum price filter
- `priceMax` - Maximum price filter

## Example Responses

### GET /api/products
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": 1,
      "name": "Silhouette No. 1 – Vermilion",
      "price": 7999,
      "description": "A tailored composition in motion...",
      "category": "outerwear",
      "images": ["..."],
      "sizes": ["XS", "S", "M", "L", "XL"],
      "inStock": true,
      "featured": true
    }
  ]
}
```
