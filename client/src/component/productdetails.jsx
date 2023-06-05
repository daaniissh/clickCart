import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import StarRating from './rating';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const ProductDetailsPage = () => {
  const scrollRef = useRef(null);
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState({})

  const getSingleData = async () => {
    const response = await axios.get(`https://click-cart-server.vercel.app/products/${id}`)
    console.log(response.data[0].images.map(imag => imag));
    setProduct(response.data[0])
  }

  // Fetch the product details based on the ID from an API or any data source

  useEffect(() => {
    getSingleData()
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const imageArray = product.images
  return (

    <div ref={scrollRef} data-aos="zoom-in-up">

      <div className="bg-gray-200 mt-20  ">
             <div className="mt-4 text-center">
            <Link to="/" className="text-blue-500 flex items-center">
              <HiArrowLeft className="mr-1" /> Go Back
            </Link>
          </div>
        <div className="container mx-auto py-8">
          <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-4 relative mb-3">
                <h1 className='absolute z-40 left-2 top-2 bg-yellow-400 font-semibold p-[2px] rounded-md' >{product.discountPercentage}%</h1>
                <Slider {...settings} >
                  {imageArray?.map((images, index) => (
                    <div key={index} > <img
                      src={images}
                      alt={product.title}
                      className="w-full max-h-[400px] rounded-sm h-full object-contain"
                    /></div>
                  ))}
                </Slider>
                {/* */}
              </div>
              <div className="p-4">
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <h1 className="text-base bg-lime-700 text-gray-200 p-[2px] max-w-[300px]  rounded-lg min-w-[100px] text-center     mb-2">{product.brand}</h1>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="mb-4">
                  <span className="font-bold text-gray-700">Price:</span>{' '}
                  <span className="text-green-500">${product.price}</span>
                </div>

                <div className="mb-4 flex">
                  <span className="font-bold text-gray-700">Rating:</span>
                  <StarRating rating={product.rating} />
                </div>
                <div className="mb-4">
                  <span className="font-bold text-gray-700">Stocks:</span>{' '}
                  <span className="text-stone-800 font-semibold">
                    {product.stock}
                  </span>
                </div>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  Buy now
                </button>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
