import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './index.css';
import faFlask from '@fortawesome/fontawesome-free-solid/faFlask';

const OverlayBox = ({
  caption, captionHeader, imageURL, imageAlt, boxClassName, url, icon, showLinkButton, linkButtonLabel, absoluteUrl,
}) => {
  if (!caption || !imageAlt || !imageURL) return null;
  const onRedirect = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank');
  };
  return (
    <Link to={url} className={`OverlayBox ${boxClassName}`}>
      <img src={imageURL} alt={imageAlt} />
      <div className="box-caption">
        <div className="box-caption-content">
          {icon && (
            <FontAwesomeIcon icon={icon} className="icon" />
          )}
          {captionHeader && <h4>{captionHeader}</h4>}
          <small>{caption}</small>
        </div>
        <div className="box-caption-actions">
          {showLinkButton && (
            <button onClick={e => onRedirect(e, absoluteUrl)} type="button" className="link-button">{linkButtonLabel}</button>
          )}
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
  icon: PropTypes.object,
  button: PropTypes.string,
  absoluteUrl: PropTypes.string,
};

export default withRouter(OverlayBox);
