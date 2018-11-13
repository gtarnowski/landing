import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const TextAreaField = ({ name, cols, rows, defaultValue }) => {
  const fieldName = name.toLowerCase();
  return (
    <div className="TextAreaField">
      <textarea rows={rows} cols={cols} id={fieldName}>
        {defaultValue}
      </textarea>
      <label htmlFor={fieldName}>
        {name}
      </label>
    </div>
  );
};

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  cols: PropTypes.number,
  rows: PropTypes.number,
  defaultValue: PropTypes.string,
};

TextAreaField.defaultProps = {
  cols: 30,
  rows: 7,
  defaultValue: '',
};

export default TextAreaField;
