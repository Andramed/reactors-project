


const MayAlsoLike = ({relatedProduct, getProduct, index}) => {
return (
    <div onClick={() => getProduct(relatedProduct)} key={index} className="bg-gray-100 p-4 rounded-md hover:cursor-pointer">
                <img 
                  src={Object.entries(relatedProduct.color_image)[0][1][0]}
                  className="object-contain w-32 h-32 mx-auto "
                  alt={`Related Product ${index}`}
                />

                <h3 className="text-center text-lg font-semibold mt-2">
                  {relatedProduct.brand} {relatedProduct.model}
                </h3>
                <span className=" text-gray-500 ">
                  {relatedProduct.price} lei
                </span>
              </div>
) 
}


export default MayAlsoLike;