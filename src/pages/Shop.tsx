
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const Shop: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Silhouette No. 1 – Vermilion",
      price: 7999,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4cdbf8bdebec5334f2ba02d67ceda2a3dae858d?placeholderIfAbsent=true",
      category: "Jackets"
    },
    {
      id: 2,
      name: "Silhouette No. 2 – Midnight",
      price: 8999,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a0d5d214a2dcd8a34fe3cf4832385e877f78574?placeholderIfAbsent=true",
      category: "Jackets"
    },
    {
      id: 3,
      name: "Silhouette No. 3 – Pearl",
      price: 6999,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a1c4bb47b419308726822a91ad76260a462c468?placeholderIfAbsent=true",
      category: "Blazers"
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Jackets', 'Blazers', 'Coats'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="w-full relative min-h-screen bg-white dark:bg-[#070707] transition-colors duration-300">
      <Header />
      <main className="pt-[75px]">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-8">Shop</h1>
          
          {/* Filters */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-black dark:text-white mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded ${
                    selectedCategory === category
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'bg-gray-200 text-black dark:bg-gray-700 dark:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="group">
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-black dark:text-white">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">₹ {product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
