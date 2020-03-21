import React from "react";
export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPages: props.total,
      currentPage: props.current
    };
  }

  createTabs = (total, current) => {
    if (total != 0) {
      var tabs = [];
      tabs.push(
        <a href="#" class="prevposts-link">
          <i class="fas fa-caret-left"></i>
          <span>Prev</span>
        </a>
      );
      for (var i = 1; i <= total; i++) {
        tabs.push(
          <a href="#" className={current == i ? "current-page" : ""}>
            {i}
          </a>
        );
      }
      tabs.push(
        <a href="#" class="nextposts-link">
          <span>Next</span>
          <i class="fas fa-caret-right"></i>
        </a>
      );
      return tabs;
    }
  };

  render() {
    return (
      <div class="pagination fwmpag">
        {this.createTabs(this.state.totalPages, this.state.currentPage)}
      </div>
    );
  }
}
