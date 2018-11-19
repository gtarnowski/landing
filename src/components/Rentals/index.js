import React from 'react';
import Title from '../Title';
import './index.css';

const rentalItems = ['Item', 'Item2', 'Item3', 'Item4'];

const Rentals = () => (
  <div className="Rentals">
    <Title title="Rentals" />
    <div className="item-container">
      {rentalItems.map(item => (
        <div className="rental-item">
          {item}
        </div>
      ))}
    </div>
  </div>
);

export default Rentals;
