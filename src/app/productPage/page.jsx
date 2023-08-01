"use client";
import React, { useState, useEffect, useRef } from "react";
import { HeartIcon } from "@heroicons/react/solid";
import { useAddItemToCart } from "../hooks/useAddItemToCart";
import RelatedProducts from "./RelatedProducts";
import useSetPrice from "../hooks/useSetPrice";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Details } from "./Details";

function ProductPage() {
  const parentRef = useRef(0);
  const [product, setProduct] = useState();
  const { getIdItem } = useAddItemToCart();
  // const [memory, setMemory] = useState("");
  // const [ram, setRam] = useState("");
  // const [memoryPriceDiff, setMemoryPriceDiff] =  useState(0);

  // const handleOnChangeMemory = (e) => {
  //   setMemory(e.target.value);
  //   const selectedMemoryOption = e.target.value;
  //   const priceDiff = selectedMemoryOption === "" ? 0 : 500;
  //   setMemoryPriceDiff(priceDiff);
  // };

  // const updateProductPrice = () => {
  //   const updatedPrice = product.price + memoryPriceDiff;
  //   return updatedPrice;
  // };

  // const handleOnChangeRAM = (e) => {
  //   setRam(e.target.value);
  // };
  const [mainPicture, setMainPicture] = useState(0);

  useEffect(() => {
    const itemLocal = sessionStorage.getItem("item");
    setProduct(JSON.parse(itemLocal));
  }, []);

  

  if (!product) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 product">
        <span className="self-start ml-10">
          <button className="text-gray-300 hover:text-red-500">
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
              {Object.entries(product.color_image)[0][1]
                .slice(
                  Object.entries(product.color_image)[0][1],
                  Object.entries(product.color_image)[0][1].length
                )

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

           <Details  product = {product}/>         
        </div>
        <RelatedProducts product={product} />
      </div>
    );
  }
}

export default ProductPage;
