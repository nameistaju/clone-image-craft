
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
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[75px] px-4 sm:px-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6 sm:mb-8 pt-4 sm:pt-8">
          <Link to="/cart" className="text-muted-foreground hover:text-foreground">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </Link>
          <h1 className="text-xl sm:text-2xl font-medium text-foreground">Shipping Address</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Shipping Form */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="border border-border rounded-lg p-4 sm:p-6 bg-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-4 h-4 rounded-full border-2 border-red-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                </div>
                <h2 className="text-lg sm:text-xl font-medium text-card-foreground">Add New Address</h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">First Name</label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Last Name</label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Street Address</label>
                  <Input
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Enter street address"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Apt Number</label>
                    <Input
                      name="aptNumber"
                      value={formData.aptNumber}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Apt #"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">State</label>
                    <Input
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Zip</label>
                    <Input
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Zip code"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
                <button 
                  onClick={() => window.history.back()}
                  className="px-6 py-3 border border-border rounded-lg text-card-foreground hover:bg-accent transition-colors order-2 sm:order-1"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSaveAddress}
                  className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors order-1 sm:order-2"
                >
                  Save This Address
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="order-1 lg:order-2">
            <div className="bg-muted/50 p-4 sm:p-6 rounded-lg h-fit sticky top-24">
              <div className="mb-4 sm:mb-6">
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  By placing your order, you agree to our company{' '}
                  <Link to="/privacy" className="underline text-primary hover:text-primary/80">Privacy policy</Link> and{' '}
                  <Link to="/terms" className="underline text-primary hover:text-primary/80">Conditions of use</Link>.
                </p>
              </div>

              <h2 className="text-lg sm:text-xl font-medium text-foreground mb-4 sm:mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-4 sm:mb-6">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-sm text-muted-foreground flex-1">Items - Silhouette No. 1 – Vermilion</span>
                  <span className="text-sm font-medium text-foreground">₹7,999</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Shipping and handling:</span>
                  <span className="text-sm font-medium text-foreground">₹200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Before tax:</span>
                  <span className="text-sm font-medium text-foreground">₹6,599</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Tax Collected:</span>
                  <span className="text-sm font-medium text-foreground">₹1,400</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-4 sm:mb-6">
                <div className="flex justify-between text-lg sm:text-xl font-medium">
                  <span className="text-foreground">Order Total:</span>
                  <span className="text-foreground">₹8,199</span>
                </div>
              </div>

              <button 
                onClick={handlePlaceOrder}
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
