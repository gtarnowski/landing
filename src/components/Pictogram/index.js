import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './index.css';

const Pictogram = ({ icon, title, subtitle }) => {
  if (!icon || !title || !subtitle) return null;

  return (
    <div className="Pictogram">
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h5>{title}</h5>
      <small>{subtitle}</small>
    </div>
  );
};

Pictogram.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Pictogram;
