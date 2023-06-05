import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const ProductItem = ({ product }) => {
  AOS.init();
  return (
    <div className="bg-gray-200 flex group min-h-[500px]">
      <div className="container mx-auto py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gray-200 relative">
            <h1 className='absolute left-1 top-1 bg-yellow-400 font-semibold p-[2px] rounded-md' >{product.discountPercentage}%</h1>
            <img
              src={product.thumbnail}
              alt="Product"
              className="w-[300px] object-contain group-hover:scale-110 ease duration-150 h-[300px]"
            />
          </div>
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold mb-2 truncate overflow-hidden max-w-[200px]">{product.title}</h1>
            <p className="text-gray-700 mb-4 truncate overflow-hidden max-w-[200px]">{product.description}</p>
            <div className="flex items-center mb-4">
              <span className="font-bold text-gray-700 mr-2">Price:</span>
              <span className="text-orange-700">{product.price} &#8377;</span>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
