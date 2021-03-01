import React from 'react';

function DivInput({
  name,
  label,
  value,
  onChange,
  type = 'text',
  disabled = false,
}) {
  return (
    <div className="row form-group">
      <div className="col-md-3 text-right">
        <label htmlFor={`id-${name}`}>{label}: </label>
      </div>
      <div className="col-12 col-md-9">
        <input
          name={name}
          id={`id-${name}`}
          type={type}
          className="form-control"
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default DivInput;
