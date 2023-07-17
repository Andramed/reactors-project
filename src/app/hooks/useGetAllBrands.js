
import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetAllBrands = () => {
  const [brands, setBrands] = useState([]);
  
  useEffect(() => {
     const getAllBrands = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/getAllBrands', {});          

        const allBrands = await res.data;       
        setBrands(allBrands);

      } catch (error) {
        console.log('Error loading documents: ', error);
      }
    };

    getAllBrands();
  }, []);

  return brands;
};

export default useGetAllBrands;
