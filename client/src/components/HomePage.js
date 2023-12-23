
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomCard from './ProductCard';
import "./styles.css"

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/');
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="body" style={{ backgroundImage: "url('https://example.com/background.jpg')", backgroundSize: 'cover', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: 'black' }}>Online Courses</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {products.map((product, index) => (
            <CustomCard key={index} item={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;