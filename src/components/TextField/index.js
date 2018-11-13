import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const TextField = ({ type, name }) => {
  const fieldName = name.toLowerCase();
  return (
    <div className="TextField">
      <input type={type} id={fieldName} />
      <label htmlFor={fieldName}>
        {name}
      </label>
    </div>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

TextField.defaultProps = {
  type: 'text',
};

export default TextField;
