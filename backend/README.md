
# Eclypse Backend API

## Setup

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

The server will run on `http://localhost:5000`

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/products` - Get all products (supports query params: category, search, sort)
- `GET /api/products/:id` - Get product by ID
- `GET /api/categories` - Get all categories
- `POST /api/waitlist` - Add email to waitlist

## Example Usage

```bash
# Get all products
curl http://localhost:5000/api/products

# Search products
curl http://localhost:5000/api/products?search=vermilion

# Filter by category
curl http://localhost:5000/api/products?category=clothing

# Sort by price
curl http://localhost:5000/api/products?sort=price-low
```
