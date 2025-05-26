
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist signup:', email);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-[#070707]">
      <Header />
      <main className="pt-[75px] flex items-center justify-center min-h-[calc(100vh-75px)]">
        <div className="max-w-md w-full px-5">
          <h1 className="text-white text-4xl font-normal tracking-[-0.8px] mb-6 text-center">
            Join the Waitlist
          </h1>
          
          <p className="text-[#D2D2D2] text-lg mb-8 text-center">
            Be the first to know about new collections and exclusive releases.
          </p>
          
          {isSubmitted ? (
            <div className="text-center">
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 mb-6">
                <p className="text-green-400 text-lg">
                  Thank you for joining our waitlist! We'll be in touch soon.
                </p>
              </div>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-white underline hover:no-underline"
              >
                Join another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-white/20 text-white placeholder:text-gray-400 focus:border-white"
                  required
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Waitlist;
