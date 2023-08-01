import React from "react";
import axios from "axios";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Scrollbar, Navigation, Pagination } from "swiper/modules";


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
          loop = {true}
        >
          {data.map((relatedProduct, index) => (
            <SwiperSlide key={index}>
              <div key={index} className="bg-gray-100 p-4 rounded-md">
                <img
                  src={Object.entries(relatedProduct.color_image)[0][1][0]}
                  className="object-contain w-32 h-32 mx-auto"
                  alt={`Related Product ${index}`}
                />

                <h3 className="text-center text-lg font-semibold mt-2">
                  {relatedProduct.brand} {relatedProduct.model}
                </h3>
                <span className=" text-gray-500 ">
                  {relatedProduct.price} lei
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}

export default RelatedProducts;
