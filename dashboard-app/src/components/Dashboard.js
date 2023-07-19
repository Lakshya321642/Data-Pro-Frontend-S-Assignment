import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/api';
import fetchData from '../services/api';
const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const apiData = await fetchData();
      setData(apiData);
    };

    fetchDataFromAPI();
  }, []);

  // Render the dashboard components
  return (
    <div>
      {/* Display the fetched data */}
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default Dashboard