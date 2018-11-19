import React from 'react';
import Title from '../Title';
import content from '../../content/index'
import OverlayBox from '../OverlayBox';
import './index.css';

const rentalItems = ['Item', 'Item2', 'Item3', 'Item4'];
// const rentalItems = ['Item'];

const Rentals = () => (
  <div className="Rentals">
    <Title title="Rentals" />
    <div className="item-container">
      {content.categoryTiles.map(({ name }) => (
        <OverlayBox
          boxClassName="RentalBox"
          key={name}
          imageURL="https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/thumbnails/1.jpg"
          imageAlt="alt"
          caption={`${name} for sale and rent`}
          captionHeader={name}
        />
      ))}
    </div>
  </div>
);

export default Rentals;
