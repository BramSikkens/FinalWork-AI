import React from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

export class DateTimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: "",
      visible: false,
    };
  }

  render() {
    return (
      <div className="custom-form">
        <input
          type="text"
          style={{ float: "none" }}
          placeholder="Date"
          value={this.state.selectedDate}
          onSelect={(e) => {
            this.setState({ visible: true });
          }}
        />
        <div
          style={
            this.state.visible
              ? { visibility: "visible", display: "block" }
              : { visibility: "hidden", display: "none" }
          }
        >
          {/*
          
              ;*/}

          <Calendar
            className="calendar-table datepickerCustomTable "
            tileClassName="off available"
            onChange={(value, event) =>
              this.setState({
                selectedDate: value.toLocaleDateString(),
                visible: false,
              })
            }
          />
        </div>
      </div>
    );
  }
}
