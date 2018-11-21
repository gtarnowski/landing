import React from 'react';
import { Link } from 'react-router-dom'
import Title from '../Title';
import content from '../../content/index'
import OverlayBox from '../OverlayBox';
import './index.css';

const rentalItems = ['Item', 'Item2', 'Item3', 'Item4'];
// const rentalItems = ['Item'];

const Rentals = ({ name }) => (
  <div className={name}>
    <Title title="Rentals" />
    <div className="item-container">
      {content.categoryTiles.map(({ name }) => (
        <OverlayBox
          boxClassName="RentalBox"
          key={name}
          imageURL="https://via.placeholder.com/300"
          imageAlt="alt"
          caption={`${name} for sale and rent`}
          captionHeader={name}
        />
      ))}
    </div>

    <Link to="/rentals" className="Button">
      View all
    </Link>
  </div>
);

export default Rentals;
