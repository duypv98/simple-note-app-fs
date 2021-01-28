import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const TextInput = forwardRef<HTMLInputElement, any>((props, ref) => {
  const {
    type, label, name, placeholder, required
  } = props;
  const elementId = `${name}-inp`;

  return (
    <div className="form-group">
      <label htmlFor={elementId}>{label ?? name}</label>
      <input
        type={type}
        ref={ref}
        className="form-control"
        name={name}
        id={elementId}
        placeholder={placeholder}
        required={required ?? false}
      />
    </div>
  );
});

TextInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default memo(TextInput);
