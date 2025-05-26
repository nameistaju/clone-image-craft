
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Cart: React.FC = () => {
  const [cartItems] = useState([
    {
      id: 1,
      name: "Silhouette No. 1 – Vermilion",
      price: 7999,
      size: "M",
      quantity: 1,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4cdbf8bdebec5334f2ba02d67ceda2a3dae858d?placeholderIfAbsent=true"
    }
  ]);

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 200;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-[75px] px-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8 pt-8">
          <Link to="/" className="text-gray-600 hover:text-black">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </Link>
          <h1 className="text-2xl font-medium text-black">Cart</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-6 border border-gray-200 rounded-lg mb-4">
                <img src={item.image} alt={item.name} className="w-24 h-32 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-black mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-2">Size: {item.size}</p>
                  <p className="text-lg font-medium text-black">₹ {item.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-medium text-black mb-6">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Items - Silhouette No. 1 – Vermilion</span>
                <span className="text-black">{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping and handling:</span>
                <span className="text-black">{shipping}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Before tax:</span>
                <span className="text-black">{(subtotal + shipping - tax).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax Collected:</span>
                <span className="text-black">{tax.toLocaleString()}</span>
              </div>
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-xl font-medium">
                <span>Order Total:</span>
                <span>{total.toLocaleString()}</span>
              </div>
            </div>

            <Link 
              to="/checkout" 
              className="w-full bg-black text-white py-3 px-6 rounded-lg text-center block hover:bg-gray-800 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
