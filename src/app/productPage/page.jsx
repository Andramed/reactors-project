"use client";
import React, { useState, useEffect, useRef } from "react";

import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/solid";
import { useAddItemToCart } from "../hooks/useAddItemToCart";
import RelatedProducts from "./RelatedProducts";
import useSetPrice from "../hooks/useSetPrice";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function ProductPage() {
  const parentRef = useRef(0);
  const [product, setProduct] = useState();
  const { getIdItem } = useAddItemToCart();

 

  const [mainPicture, setMainPicture] = useState(0);

		useEffect(() => {
			const itemLocal = sessionStorage.getItem('item');
			setProduct(JSON.parse(itemLocal));
		}, [])
		
		if(product){
			console.log(product, 'pageproduct');

		}
		
		if(product) {
			console.log(Object.entries(product.color_image)[0][1]);
		}
  if (!product ) { 
	return <h1>Loading</h1>;
  } else {
    return (
		
		// componenta IMAGE, 
		// component  Propreties
      <div  className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 product">
		
        <span className="self-start ml-10">
          <button className="text-gray-300 hover:text-red-500">
            <HeartIcon className="w-8 h-8" />
          </button>
        </span>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 lg:w-1/3 flex flex-col items-center mb-6">
            <div className="w-auto h-56 sm:h-72 lg:h-96 overflow-hidden">
              <img
                src={Object.entries(product.color_image)[0][1][mainPicture]} // aici trebui un filtru care se privesasca daca este array // sau obiect 
				// sau string
				// src={product.color_image.prima culoare[mainPicture]} metoda pentru iterare a obiectelor
                className="object-contain w-full h-full"
                alt="mainPicture"
              />
            </div>
            <div className="mt-6 flex space-x-2">
              {Object.entries(product.color_image)[0][1] // prima care o gaseste color_iamge  key, value
                .slice(Object.entries(product.color_image)[0][1], Object.entries(product.color_image)[0][1].length) // slice(0, 4) 
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

          <div className="md:w-1/2 lg:w-2/3 md:pl-6 lg:pl-8">
            <h1 className="text-4xl font-semibold mb-4">
              {product.brand} {product.model}
            </h1>
            <div className="flex flex-col space-y-4">
              <ul className="my-5 flex flex-col space-y-2">
                <li
                  key={product.ram[0]}
                  className="inline-flex items-center space-x-2 text-gray-500"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                  <span className="text-sm font-semibold">
                    Memory RAM: {product.ram[0]}
                  </span>
                </li>
              </ul>

              <ul className="my-5 flex flex-col space-y-2">
                <li
                  key={product.memory[0]}
                  className="inline-flex items-center space-x-2 text-gray-500"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                  <span className="text-sm font-semibold">
                    Internal memory: {product.memory[0]}
                  </span>
                </li>
              </ul>
              <ul className="my-5 flex flex-col space-y-2">
                <li className="inline-flex items-center space-x-2 text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                  <span className="text-sm font-semibold">
                    Acumulator capacity: {product.acumulator}
                  </span>
                </li>
              </ul>

              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1 flex items-center space-x-2">
                  <label htmlFor="quantity" className="text-sm">
                    Quantity:
                  </label>
                  <input 
                  onChange= {(e) => handleCounter(e)}
                    type="number"
                    defaultValue="1"
                    min="1"
                    className="form-input py-1 pl-2 w-16 rounded border-2 border-gray-300 bg-gray-100 focus:border-yellow-600 focus:ring-0"
                  />
                </div>
                <div className="flex-1 flex items-center space-x-2">
                  <label htmlFor="color" className="text-sm">
                    Color:
                  </label>
                  <select
                    name="color"
                    id="color"
                    className="form-select py-1 pl-2 w-full max-w-xs rounded border-2 border-gray-300 bg-gray-100 text-gray-500 focus:border-yellow-600 focus:ring-0"
                  >
                    <option value="">Select color</option>
                    {Object.keys(product.color_image).map((colorKey, index) => (
                      <option key={index} value={colorKey}>
                        {colorKey}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 flex items-center space-x-2">
                  <label htmlFor="size" className="text-sm">
                    Memory:
                  </label>
                  <select
                    name="size"
                    id="size"
                    className="form-select py-1 pl-2 w-full max-w-xs rounded border-2 border-gray-300 bg-gray-100 text-gray-500 focus:border-yellow-600 focus:ring-0"
                  >
                    <option value="">Select memory</option>
                    {product.memory.map((memoryOption, index) => (
                      <option key={index} value={memoryOption}>
                        {memoryOption}
                      </option>
                    ))}
                  </select>
                </div>
                <div ref={parentRef} id={product._id} className="flex-1">
                  <button

                    type="button"
                    className="w-full py-2 px-4 inline-flex items-center justify-center rounded-md bg-yellow-500 text-base text-white font-semibold uppercase whitespace-nowrap hover:bg-yellow-600"
                    onClick={() => getIdItem(parentRef.current)}
                  >
                    <ShoppingBagIcon className="w-6 h-6 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
              {/* pret */}
              <span className="text-3xl font-bold">
                {product.price} lei
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts product={product} />
      </div>
    );
  }
}

export default ProductPage;
