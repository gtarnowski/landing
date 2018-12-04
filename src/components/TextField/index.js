import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const TextField = ({ type, name, onChange }) => {
  const fieldName = name.toLowerCase();
  return (
    <div className="TextField">
      <input type={type} id={fieldName} placeholder={name} onChange={e => onChange(e, name.toLowerCase())} />
    </div>
  );
};

TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

TextField.defaultProps = {
  type: 'text',
};

export default TextField;
