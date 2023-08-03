import { useRef } from "react"
import { ShoppingBagIcon } from "@heroicons/react/solid";
import useSetPrice from "../hooks/useSetPrice";

export const Details = ({product, setColor}) => {
    const parentRef = useRef();
    const { state, handleMemory, handleRam } = useSetPrice(product);
   const {price, selectedMemory, selectedRam} = state   
  

    return (

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
            Memory RAM: {selectedRam}
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
            Internal memory: {selectedMemory}
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
          <label htmlFor="color" className="text-sm">
            Color:
          </label>
          <select
            name="color"
            id="color"
            className="form-select py-1 pl-2 w-full max-w-xs rounded border-2 border-gray-300 bg-gray-100 text-gray-500 focus:border-yellow-600 focus:ring-0"
          >
            {Object.keys(product.color_image).map((colorKey, index) => (
              <option key={index} value={colorKey}>
                {colorKey}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1 flex items-center space-x-2">
          <label htmlFor="size" className="text-sm">
            Memory RAM: 
          </label>
          <select
           onChange ={(e) => handleRam(e)}
            name="size"
            id="size"
            className="form-select py-1 pl-2 w-full max-w-xs rounded border-2 border-gray-300 bg-gray-100 text-gray-500 focus:border-yellow-600 focus:ring-0"
          >
            {product.ram.map((memoryOption, index) => (
              <option key={index} id={index} value={memoryOption}>
                {memoryOption}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1 flex items-center space-x-2">
          <label htmlFor="size" className="text-sm">
            Memory: 
          </label>
          <select
            onChange={(e) => handleMemory(e)}
            name="size"
            id="size"
            className="form-select py-1 pl-2 w-full max-w-xs rounded border-2 border-gray-300 bg-gray-100 text-gray-500 focus:border-yellow-600 focus:ring-0"
          >
            {product.memory.map((memoryOption, index) => (
              <option key={index} id={index} value={memoryOption}>
                {memoryOption}
              </option>
            ))}
          </select>
        </div>

        <div ref={parentRef} id={product._id} className="flex-1">
          <button
            type="button"
            className="w-full py-2 px-4 inline-flex items-center justify-center rounded-md bg-yellow-500 text-base text-white font-semibold uppercase whitespace-nowrap hover:bg-yellow-600"
            onClick={() =>
              getIdItem(parentRef.current)
            }
          >
            <ShoppingBagIcon className="w-6 h-6 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>

      <span className="text-3xl font-bold">
        {price} lei
      </span>
    </div>
  </div>) 
}