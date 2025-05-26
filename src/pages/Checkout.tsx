
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { Input } from '@/components/ui/input';

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    aptNumber: '',
    state: '',
    zip: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveAddress = () => {
    console.log('Address saved:', formData);
    // Handle address saving logic
  };

  const handlePlaceOrder = () => {
    console.log('Order placed');
    alert('Order placed successfully!');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-[75px] px-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8 pt-8">
          <Link to="/cart" className="text-gray-600 hover:text-black">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </Link>
          <h1 className="text-2xl font-medium text-black">Shipping Address</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Form */}
          <div className="lg:col-span-2">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-4 h-4 rounded-full border-2 border-red-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                </div>
                <h2 className="text-xl font-medium text-black">Add New Address</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">First Name</label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Last Name</label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-black mb-2">Street Address</label>
                <Input
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Apt Number</label>
                  <Input
                    name="aptNumber"
                    value={formData.aptNumber}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">State</label>
                  <Input
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Zip</label>
                  <Input
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => window.history.back()}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-black hover:bg-gray-50 transition-colors"
                >
                  cancel
                </button>
                <button 
                  onClick={handleSaveAddress}
                  className="flex-1 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Save This Address
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-4">
                By placing your order, you agree to our company{' '}
                <Link to="/privacy" className="underline">Privacy policy</Link> and{' '}
                <Link to="/terms" className="underline">Conditions of use</Link>.
              </p>
            </div>

            <h2 className="text-xl font-medium text-black mb-6">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Items - Silhouette No. 1 – Vermilion</span>
                <span className="text-black">7,999</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping and handling:</span>
                <span className="text-black">200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Before tax:</span>
                <span className="text-black">6,599</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax Collected:</span>
                <span className="text-black">1,400</span>
              </div>
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-xl font-medium">
                <span>Order Total:</span>
                <span>8,199</span>
              </div>
            </div>

            <button 
              onClick={handlePlaceOrder}
              className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Place Order
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
