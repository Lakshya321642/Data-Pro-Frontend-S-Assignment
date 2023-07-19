import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Rest of the component code...

  return (
    // JSX code to render the dashboard...
    <div>
     return (
  <div>
    <h1>Welcome to the Dashboard</h1>
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  </div>
);
    </div>
  );
};

  
export default Dashboard;