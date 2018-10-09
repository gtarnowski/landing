import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChevronUp from '@fortawesome/fontawesome-free-solid/faChevronUp';
import './index.css';

const BottomArrow = ({ fixed }) => (
  <div className="BottomArrow" data-fixed={fixed} onClick={() => window.scrollTo(0, 0)}>
    <FontAwesomeIcon icon={faChevronUp} className="icon"/>
  </div>
);

BottomArrow.propTypes = {
  fixed: PropTypes.bool.isRequired,
}

export default BottomArrow;
