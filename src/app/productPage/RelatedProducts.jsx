import React from "react";
import axios from "axios";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import  { Navigation } from "swiper/modules";
import useGetProduct from "../hooks/useGetProduct";
import MayAlsoLike from "./MayAlsoLike";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar"


function RelatedProducts({ product }) {
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const MAXProducts = 6;
  
  const { data, error } = useSWR(
    `/api/getRandomProducts?price=${product.price}&limit=${MAXProducts}`,
    fetcher
  );
  const {getProduct} = useGetProduct()

  if (!data) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="mt-12">
        <h2 className="text-center text-2xl font-semibold mb-4">
          May Like This
        </h2>
        <Swiper
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          navigation = {true}
          modules={[Navigation]}
          pagination = {{clickable : true}}
          scrollbar={{ draggable: true }}
          // loop = {true}
        >
          {data.map((relatedProduct, index) => (
            <SwiperSlide key={index} >
              
              <MayAlsoLike relatedProduct={relatedProduct} getProduct={getProduct} index={index} />
             
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}

export default RelatedProducts;
