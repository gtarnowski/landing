import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './index.css';

const OverlayBox = ({
  absoluteUrl,
  boxClassName,
  caption,
  captionHeader,
  icon,
  imageAlt,
  imageURL,
  linkButtonLabel,
  showLinkButton,
  url,
}) => {
  if (!caption || !imageAlt || !imageURL) return null;
  const onRedirect = (e, redirectPath) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(redirectPath, '_blank');
  };
  return (
    <Link to={url} className={`OverlayBox ${boxClassName}`}>
      <img src={imageURL} alt={imageAlt} />
      <div className="box-caption">
        <div className="box-caption-content">
          {icon && <FontAwesomeIcon icon={icon} className="icon" />}
          {captionHeader && <h4>{captionHeader}</h4>}
          <small>{caption}</small>
        </div>
        <div className="box-caption-actions">
          {showLinkButton && (
            <button onClick={e => onRedirect(e, absoluteUrl)} type="button" className="link-button">
              {linkButtonLabel}
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};

OverlayBox.propTypes = {
  absoluteUrl: PropTypes.string,
  boxClassName: PropTypes.string,
  caption: PropTypes.string.isRequired,
  captionHeader: PropTypes.string,
  icon: PropTypes.object,
  imageAlt: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  linkButtonLabel: PropTypes.string,
  showLinkButton: PropTypes.bool,
  url: PropTypes.string.isRequired,
};

export default withRouter(OverlayBox);
