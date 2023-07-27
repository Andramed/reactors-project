'use client'
import React, { useState, useEffect, useRef } from "react";


import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/solid";
import { useAddItemToCart } from '../hooks/useAddItemToCart';


function ProductPage() {
  
  const parentRef = useRef(0);
  const [product, setProduct] = useState()

  const {getIdItem} = useAddItemToCart()

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
              <HeartIcon className="w-10 h-10" />
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
                alt="Product Main"
              />
            </div>
            {/* galeria cu imagini */}
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
  
          {/* Product Details */}
          <div className="md:w-1/2 lg:w-2/3 md:pl-6 lg:pl-8">
            <h1 className="text-4xl font-semibold mb-4">
              {product.brand}{" "}
              {product.model}
            </h1>
            <div className="flex flex-col space-y-4">
              {/* specificatii */}
              <ul className="my-5 flex flex-col space-y-2">
              {product.ram.map((feature, index) => ( // 128GB == array 
                <li
                  key={index}
                  className="inline-flex items-center space-x-2 text-gray-500"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                  <span className="text-sm font-semibold">
                    Memory RAM : {feature.ram}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="my-5 flex flex-col space-y-2">
              {product.memory.map((feature, index) => (
                <li
                  key={index}
                  className="inline-flex items-center space-x-2 text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                  <span className="text-sm font-semibold">
                    Internal memory : {feature.memory}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="my-5 flex flex-col space-y-2">
              {/* {product.acumulator.map((feature, index) => ( /// aici este numai o capacitate de acumulator de ce map>? p
			  //si cind telefonul nu are acumulator face greseala/
                <li
                  key={index}
                  className="inline-flex items-center space-x-2 text-gray-500"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                  
                </li>
              ))} */}
			  <span className="text-sm font-semibold">
                    Acumulator capacity : {product.acumulator} 
                </span>
            </ul>
    

              {/* cantitatea pt cart */}
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1 flex items-center space-x-2">
                  <label htmlFor="quantity" className="text-sm">
                    Quantity:
                  </label>
                  <input
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
                    <option value="">Select Color</option>
                    {/* optiunile de culoare */}
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
                    <option value="">Select Memory</option>
                    {/* optiunile de memorie */}
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
      </div>
    );
  }
}
  export default ProductPage;