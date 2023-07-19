
import { useState, useEffect } from 'react';
import axios from 'axios';

const useSortedProducts = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData(() => ({
      [e.target.name]: e.target.value,
    }));
  };
  const handleBtn = (e) => {
	setFormData(() => ({
		[e.target.name]: e.target.value,
	}))
  }
 
  const { brand, price, operator, newPhone } = formData;
 
  useEffect(() => {
    // const { brand, price, operator, newPhone } = formData;
	console.log(newPhone);


    const getSortedProducts = async () => {
		console.log(formData);
      try {
        const response = await axios.get('/api/getSortedProducts', {
          params: {
            param: {...formData},
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

    if (brand || price || operator|| newPhone) {
      getSortedProducts();
    }
  }, [brand, price, operator, newPhone ]);

  return { products, handleChange, handleBtn};
};

export default useSortedProducts;
