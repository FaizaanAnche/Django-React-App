import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShoppingCart from './ShoppingCart';
import './styles.css';
import ProductCard from './ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/');
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="body">
      <div className="container">
        <h1 className="title">Online Courses</h1>
        <div className="card-container">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              item={product}
              onAddToCart={addToCart}
              isItemInCart={cart.some(item => item.id === product.id)}
              onRemoveFromCart={removeFromCart}
            />
          ))}
        </div>
        <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default HomePage;
