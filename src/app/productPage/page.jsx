"use client";
import React, { useState, useEffect, useRef } from "react";
import { HeartIcon } from "@heroicons/react/solid";
import { useAddItemToCart } from "../hooks/useAddItemToCart";
import RelatedProducts from "./RelatedProducts";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Details } from "./Details";
import { ToastContainer } from 'react-toastify';
import useAddItemToWishlist from '../hooks/useAddItemToWishlist';
import 'react-toastify/dist/ReactToastify.css';
function ProductPage() {
  const parentRef = useRef(0);
  const [product, setProduct] = useState();
  const { getIdItem } = useAddItemToCart();

  const [mainPicture, setMainPicture] = useState(0);
  
	const {handleHeart} = useAddItemToWishlist();

  useEffect(() => {
    const itemLocal = sessionStorage.getItem("item");
    setProduct(JSON.parse(itemLocal));
  }, []);
 

  console.log(product);
  
  
  if (!product) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 product">
        <span className="self-start ml-10">
          <button  onClick={(e) => handleHeart(e, product)} className="text-gray-300 hover:text-red-500">
            <HeartIcon className="w-8 h-8" />
          </button>
        </span>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 lg:w-1/3 flex flex-col items-center mb-6">
            <div className="w-auto h-56 sm:h-72 lg:h-96 overflow-hidden">
              <img
                src={Object.entries(product.color_image)[0][1][mainPicture]}
                className="object-contain w-full h-full"
                alt="mainPicture"
              />
            </div>
            <div className="mt-6 flex space-x-2">
              {Object.entries(product.color_image)[0][1] // prima care o gaseste color_iamge  key, value
                .slice(Object.entries(product.color_image)[0][1], Object.entries(product.color_image)[0][1].length) // slice(0, 4) > 4 || <4 
				// prima vlaoare la slice arr[0]
                .map((color_image, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`w-16 h-16 border-2 rounded ${
                      index === mainPicture
                        ? "border-yellow-600"
                        : "border-transparent"
                    }`}
                    onClick={() => setMainPicture(index)}
                  >
                    <img
                      src={color_image}
                      className="object-contain w-full h-full"
                      alt={`Product Thumbnail ${index}`}
                    />
                  </button>
                ))}
            </div>
          </div>

          <Details product={product}  />
        </div>
        <RelatedProducts product={product} />
		<ToastContainer/>
      </div>
	  
    );
  }
}

export default ProductPage;
