import React, { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

const DateTimePicker = (props) => {
  const [date, setDate] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <div className="custom-form">
      <input
        type="text"
        style={{ float: "none" }}
        placeholder="Date"
        value={date}
        onSelect={(e) => {
          setVisible(true);
        }}
      />
      <div
        style={
          visible
            ? { visibility: "visible", display: "block" }
            : { visibility: "hidden", display: "none" }
        }
      >
        <Calendar
          className="calendar-table datepickerCustomTable "
          tileClassName="off available"
          onChange={(value, event) => {
            props.onChange(value.toISOString());
            setDate(value.toISOString());
            setVisible(false);
          }}
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
