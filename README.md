
# Eclypse Fashion Website

A modern luxury fashion e-commerce website built with React, TypeScript, TailwindCSS, and Node.js.

## 🎨 Design Features

- **Pixel-perfect Figma implementation** - Matches the provided designs exactly
- **Responsive design** - Works seamlessly on desktop, tablet, and mobile
- **Dark/Light theme toggle** - User preference saved in localStorage
- **Smooth animations** - Hover effects and transitions throughout
- **Modern UI components** - Clean, minimalist luxury aesthetic

## ⚡ Tech Stack

### Frontend
- **React 18** with TypeScript
- **TailwindCSS** for styling
- **React Router DOM** for navigation
- **React Context** for state management
- **Radix UI** components
- **Lucide React** for icons

### Backend
- **Node.js** with Express
- **CORS** enabled for frontend connection
- **RESTful API** design
- **Environment variables** with dotenv

## 🚀 Features

### Must-Have Features ✅
- [x] **Homepage UI** - Pixel-perfect match to Figma design
- [x] **Responsive Design** - TailwindCSS responsive utilities
- [x] **Product Listing** - Dynamic product display with dummy data
- [x] **Component Structure** - Modular, reusable components
- [x] **TypeScript Types** - Full type safety throughout
- [x] **React Router** - Multi-page navigation
- [x] **Backend API** - Express server with product endpoints
- [x] **CORS Enabled** - Frontend-backend communication

### Bonus Features 🎯
- [x] **Theme Switcher** - Dark/Light mode with persistence
- [x] **Cart Functionality** - Add to cart, view cart, cart state management
- [x] **Product Search** - Search by name, category, price filters
- [x] **Animations** - Hover effects, smooth transitions
- [x] **Product Details** - Individual product pages with full details
- [x] **Mobile Optimization** - Fully responsive across all devices
- [x] **Checkout Simulation** - Complete checkout flow with forms
- [x] **Waitlist Feature** - Email signup for product updates

## 📁 Project Structure

```
eclypse-website/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/          # Header, Footer
│   │   │   ├── home/            # Homepage sections
│   │   │   ├── product/         # Product components
│   │   │   ├── cart/            # Cart functionality
│   │   │   ├── theme/           # Theme management
│   │   │   └── ui/              # Reusable UI components
│   │   ├── pages/               # Page components
│   │   ├── hooks/               # Custom hooks
│   │   └── lib/                 # Utilities
│   └── public/
└── backend/
    ├── server.js                # Express server
    ├── package.json
    └── README.md
```

## 🛠️ Installation & Setup

### Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🌐 API Endpoints

### Products
- `GET /api/products` - All products
- `GET /api/products/:id` - Single product
- `GET /api/search?q=term` - Search products

### Categories
- `GET /api/categories` - All categories

### Other
- `POST /api/waitlist` - Join waitlist
- `POST /api/contact` - Contact form

## 🎯 Key Components

### Frontend Components
- **Header** - Navigation with cart counter and theme toggle
- **HeroSection** - Main banner with brand messaging
- **ProductDetails** - Product showcase with size selection
- **Cart** - Shopping cart with state management
- **ThemeProvider** - Dark/light mode functionality
- **SizeSelector** - Interactive size selection component

### Backend Features
- **Product API** - RESTful endpoints for product data
- **Search** - Query products by name, category, price
- **Filtering** - Category, featured, in-stock filters
- **Error Handling** - Comprehensive error responses
- **CORS** - Cross-origin resource sharing enabled

## 🎨 Design System

### Colors
- **Primary Black** - `#070707`
- **Background Gray** - `#F7F7F7`
- **Text Gray** - `#767676`
- **Accent White** - `#FFFFFF`

### Typography
- **Font Family** - System fonts with fallbacks
- **Tracking** - Precise letter spacing for luxury feel
- **Hierarchy** - Clear heading and body text scales

### Animations
- **Hover Effects** - Subtle color and transform transitions
- **Cart Updates** - Smooth add-to-cart feedback
- **Theme Toggle** - Smooth dark/light mode transitions

## 📱 Responsive Breakpoints

- **Mobile** - `max-sm` (< 640px)
- **Tablet** - `max-md` (< 768px)
- **Desktop** - Default and `max-lg` (< 1024px)

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend Scripts
```bash
npm start            # Start production server
npm run dev          # Start with nodemon
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set environment variables if needed

### Backend (Railway/Heroku)
1. Set `NODE_ENV=production`
2. Configure port from environment
3. Deploy with `npm start`

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit pull request

## 📄 License

This project is licensed under the MIT License.

## 🎯 Performance

- **Lighthouse Score** - Optimized for 90+ performance
- **Bundle Size** - Tree-shaken imports for minimal bundle
- **Image Optimization** - Responsive images with proper sizing
- **Caching** - Browser caching for static assets
