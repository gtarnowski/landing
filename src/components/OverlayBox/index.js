import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

const OverlayBox = ({
  caption, captionHeader, imageURL, imageAlt, boxClassName, url
}) => {
  if (!caption || !imageAlt || !imageURL) return null;

  return (
    <Link to={url} className={`OverlayBox ${boxClassName}`}>
      <img src={imageURL} alt={imageAlt} />
      <div className="box-caption">
        <div className="box-caption-content">
          {captionHeader && <h4>{captionHeader}</h4>}
          <small>{caption}</small>
        </div>
      </div>
    </Link>
  );
};

OverlayBox.propTypes = {
  boxClassName: PropTypes.string,
  caption: PropTypes.string.isRequired,
  captionHeader: PropTypes.string,
  imageAlt: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default OverlayBox;
