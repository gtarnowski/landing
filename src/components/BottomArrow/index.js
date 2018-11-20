import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronUp from '@fortawesome/fontawesome-free-solid/faChevronUp';
import './index.css';

const BottomArrow = ({ fixed }) => {
  const onClick = () => window.scroll({
    behavior: 'smooth',
    left: 0,
    top: 0,
  });
  return (
    <div className="BottomArrow" data-fixed={fixed} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronUp} className="icon" />
    </div>
  );
};

BottomArrow.propTypes = {
  fixed: PropTypes.bool.isRequired,
};

export default BottomArrow;
