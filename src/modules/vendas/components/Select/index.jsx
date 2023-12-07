import React, { useState } from "react";

const SelectComponent = (props) => {
  const handleSelectChange = (event) => {
    const value = event.target.value;
    props.setSelectedOption(value);
  };

  return (
    <div>
      <select
        id="selectOption"
        value={props.selectedOption}
        onChange={handleSelectChange}
      >
        <option value="-7">Ultimos 7 dias</option>
        <option value="-15">Ultimos 15 dias</option>
        <option value="-30">Ultimos 30 dias</option>
      </select>
    </div>
  );
};

export default SelectComponent;
