import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const TextAreaField = ({ name, cols, rows, defaultValue, onChange }) => {
  const fieldName = name.toLowerCase();
  return (
    <div className="TextAreaField">
      <textarea
        rows={rows}
        cols={cols}
        id={fieldName}
        placeholder={name}
        defaultValue={defaultValue}
        onChange={e => onChange(e, fieldName)}
      />
    </div>
  );
};

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  cols: PropTypes.number,
  rows: PropTypes.number,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};

TextAreaField.defaultProps = {
  cols: 30,
  rows: 7,
  defaultValue: '',
};

export default TextAreaField;
