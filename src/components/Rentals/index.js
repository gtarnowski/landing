import React from 'react';
import { Link } from 'react-router-dom'
import Title from '../Title';
import content, { categories } from '../../content/index'
import OverlayBox from '../OverlayBox';
import './index.css';

const rentalItems = ['Item', 'Item2', 'Item3', 'Item4'];
// const rentalItems = ['Item'];

const Rentals = () => (
  <div className="Rentals">
    <Title title="Rentals" />
    <div className="item-container">
      {categories.map(({ name, url }) => (
        <OverlayBox
          url={url}
          boxClassName="RentalBox"
          key={name}
          imageURL="https://via.placeholder.com/300"
          imageAlt="alt"
          caption={`${name} for sale and rent`}
          captionHeader={name}
        />
      ))}
    </div>

    <div className="button-row">
      <Link to="/rentals" className="Button">
        View all
      </Link>
    </div>
  </div>
);

export default Rentals;
