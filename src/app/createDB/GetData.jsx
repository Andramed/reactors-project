import React, { useState } from 'react';

export default function GetData() {
  const [data, setData] = useState([]);

  const getDocuments = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/getArticle", {
        cache: "no-store",
      });
      const json = await res.json();
	  console.log(json);
      setData(json);
	  console.log(data);
    } catch (error) {
      console.log("Error loading documents: ", error);
    }
  };
  
  return (
    <div>
      <button onClick={getDocuments}>Get Data</button>
      <ul>
        {/* {data.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))} */}
      </ul>
    </div>
  );
}
