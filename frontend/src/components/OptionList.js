import React, { useState } from "react";

const OptionList = (props) => {
  const { options } = props;
  const [open, setOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("Choose...");

  return (
    <div className="listsearch-input-item">
      <select
        onChange={(e) => {
          alert(e.target.value);
        }}
        data-placeholder="Choose"
        className="chosen-select no-search-select"
        style={{ display: "none" }}
      >
        {options.forEach((option) => {
          return <option>{option}</option>;
        })}
      </select>
      <div
        className={`nice-select chosen-select no-search-select ${
          open ? "open" : ""
        }`}
        tabIndex={0}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="current">{currentValue}</span>
        <div className="nice-select-search-box">
          <input
            type="text"
            className="nice-select-search"
            placeholder="Search..."
          />
        </div>
        <ul className="list">
          {options.map((option, key) => {
            return (
              <li
                data-value={option}
                className="option"
                onClick={() => {
                  setCurrentValue(option);
                  setOpen(false);
                  props.onChange(option);
                }}
              >
                {option}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default OptionList;
