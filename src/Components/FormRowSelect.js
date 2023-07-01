import React from 'react'

const FormRowSelect = ({labelText,name,value,handleChange,list}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
              {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        onChange={handleChange}
        className="form-select"
        value={value}
      >
        {list.map((itemValue, index) => {
          return (
            <option value={itemValue} key={index}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormRowSelect