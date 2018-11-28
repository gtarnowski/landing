import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../Title';
import content, { categories } from '../../content/index';
import OverlayBox from '../OverlayBox';

import './index.css';

const rentalItems = ['Item', 'Item2', 'Item3', 'Item4'];
// const rentalItems = ['Item'];

const Rentals = () => (
  <div className="Rentals">
    <Title title="Rentals" />
    {console.log(categories)}
    <div className="item-container">
      {categories.map(({ name, url, absoluteUrl, thumbnail, icon }) => (
        <OverlayBox
          absoluteUrl={absoluteUrl}
          showLinkButton
          linkButtonLabel="available inventory"
          icon={icon}
          url={url}
          boxClassName="RentalBox"
          key={name}
          imageURL={thumbnail}
          imageAlt="alt"
          caption={`${name} for sale and rent`}
          captionHeader={name}
        />
      ))}
    </div>
  </div>
);

export default Rentals;
