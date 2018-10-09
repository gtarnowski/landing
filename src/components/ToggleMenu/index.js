import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const ToggleMenu = React.forwardRef(({ fixed, onToggleMenu, open }, ref) => (
  <button ref={ref} className="ToggleMenu" onClick={onToggleMenu} data-open={open} data-fixed={fixed}>
    <span className="bar-top" />
    <span className="bar-mid" />
    <span className="bar-bot" />
  </button>
));

ToggleMenu.propTypes = {
  onToggleMenu: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
};

export default ToggleMenu;
