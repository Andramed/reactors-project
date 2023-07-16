const { useState, useEffect } = require('react');

useState

export const useGetAllProducts = () => {
	const [products, setProducts] = useState([]);
		useEffect(() => {
			const getDocuments = async () => {
				try {
				  const res = await fetch("http://localhost:3000/api/getAllProduct", {
					cache: "no-store",
				  });
				  const json = await res.json();
				  setProducts(json);
				} catch (error) {
				  console.log("Error loading documents: ", error);
				}
			  };
			 getDocuments()
		}, []);
		return products;
}