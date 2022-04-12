import React from "react";

const Choose = () => {
  return (
    <div className="choose">
      <select name="type-cleaning" id="type">
        <option>Regularly Cleaning</option>
        <option>Deep Cleaning</option>
        <option>Office Cleaning</option>
        <option>Windows Cleaning</option>
      </select>
    </div>
  );
};

export default Choose;
