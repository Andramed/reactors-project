
import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetByBrand = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({});

  const handleClickBrand = (brand) => {
    setFormData(() => ({
      ["brand"]: brand
    }));
  };
 
  const { brand } = formData;
 
  useEffect(() => {
    const getByBrand = async () => {
		// console.log(formData);
      try {
        const response = await axios.get('/api/getByBrand', {
          params: {
            param: {...formData},
          },
          headers: {
            'Cache-Control': 'store',
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.log('Error loading documents: ', error);
      }
    };

    if (brand) {
      getByBrand();
    }
  }, [brand]);

  return { products, handleClickBrand};
};

export default useGetByBrand;
