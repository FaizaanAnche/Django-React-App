import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './styles.css';

const CustomCard = ({ item }) => {
  const { name, instructor, date, domain, image_url } = item;

  return (
    <Card style={{ width: '18rem', margin: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <div style={{ backgroundColor: 'white', borderBottom: '2px solid #ccc', padding: '10px' }}>
        <Card.Img variant="top" src={image_url} style={{ height: '200px', objectFit: 'contain' }} />
      </div>
      <Card.Body style={{ backgroundColor: '#ffe5ec' }}>
        <Card.Title style={{ color: '#333', borderBottom: '2px solid #ccc', paddingBottom: '8px' }}>{name}</Card.Title>
        <Card.Text><strong style={{ color: '#555' }}>Instructor:</strong> {instructor}</Card.Text>
        <Card.Text><strong style={{ color: '#555' }}>Domain:</strong> {domain}</Card.Text>
        <Card.Text><strong style={{ color: '#555' }}>Start Date:</strong> {date}</Card.Text>
        <Button variant="primary" className="custom-button">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;

