
import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetAllBrands = () => {
  const [colors, setColors] = useState([]);
  
  useEffect(() => {
     const getAllColors = async () => {
      try {
        const res = await axios.get('/api/getAllColors', {});          

        const allColors = await res.data;       

        const allColorsArray = allColors.map((color,index)=>{
          return color["_id"];
        }); 

        setColors(allColorsArray);

      } catch (error) {
        console.log('Error loading documents: ', error);
      }
    };

    getAllColors();
  }, []);

  return colors;
};

export default useGetAllBrands;
