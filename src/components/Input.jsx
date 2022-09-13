import React from "react";
import "./Input.css";

const Input = ({handleChange}) => {
  return (
    <>
      <p>
      <label>ID Usuario:</label> <input type="number" name="id"  onChange={handleChange} />
      </p>
    </>
  );
};

export default Input;
