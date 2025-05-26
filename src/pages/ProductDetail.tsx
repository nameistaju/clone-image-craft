
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductDetails from '@/components/product/ProductDetails';
import ProductAccordion from '@/components/product/ProductAccordion';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="w-full relative min-h-screen bg-white dark:bg-[#070707] transition-colors duration-300">
      <Header />
      <main className="pt-[75px]">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-8">
            Silhouette No. {id} – Vermilion
          </h1>
          <ProductDetails />
          <ProductAccordion />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
