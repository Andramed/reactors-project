
import { useState, useEffect } from 'react';
import axios from 'axios';

const useProducts = () => {
  const [products, setProducts] = useState([]);
 
  

  useEffect(() => {

    const getSortedProducts = async () => {
		
      try {
        const response = await axios.get('http://localhost:3000/api/getSortedProducts', {
          params: {
            param: {_id:'64b59c2b7418c4d0437d5a7e'},
          },
          headers: {
            'Cache-Control': 'no-store',
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.log('Error loading documents: ', error);
      }
    };
getSortedProducts();
 
     
  }, []);

  return { products };
};

export default useProducts;
