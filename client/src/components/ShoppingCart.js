import React from 'react';
import './styles.css';

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div className="shopCart">
      <h2 className="cartTitle">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="emptyCart">Your shopping cart is empty</p>
      ) : (
        <ul className="cartList">
          {cart.map((item) => (
            <li key={item.id} className="cartItem">
              <span>{item.name}</span>
              <button onClick={() => removeFromCart(item.id)} className="removeButton">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
