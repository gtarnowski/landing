import React from 'react';
import Title from '../Title';
import { categories } from '../../content/index';
import OverlayBox from '../OverlayBox';
import './index.css';

const Rentals = () => (
  <div className="Rentals">
    <Title title="Rentals" />
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
