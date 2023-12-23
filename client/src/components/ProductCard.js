import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './styles.css';

const ProductCard = ({ item, onAddToCart, isItemInCart, onRemoveFromCart }) => {
  const { name, instructor, date, domain, image_url } = item;

  const handleAddToCart = () => {
    onAddToCart(item);
  };

  const handleRemoveFromCart = () => {
    onRemoveFromCart(item.id);
  };

  return (
    <Card className="product-card">
      <div className="img-container">
        <Card.Img variant="top" src={image_url} className="img" />
      </div>
      <Card.Body className="card-body">
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Text className="card-text"><strong>Instructor:</strong> {instructor}</Card.Text>
        <Card.Text className="card-text"><strong>Domain:</strong> {domain}</Card.Text>
        <Card.Text className="card-text"><strong>Start Date:</strong> {date}</Card.Text>
        {isItemInCart ? (
          <Button variant="primary" className="custom-button" onClick={handleRemoveFromCart}>
            Remove from Cart
          </Button>
        ) : (
          <Button variant="primary" className="custom-button" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

