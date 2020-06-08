import React from "react";

const ItemActionRowCard = (props) => {
  return (
    <div className="dashboard-list fl-wrap">
      <div className="dashboard-message">
        <div className="booking-list-contr">
          <a
            href="#"
            className="color-bg tolt"
            data-microtip-position="left"
            data-tooltip="Edit"
          >
            <i className="fal fa-edit" />
          </a>
          <a
            onClick={() => props.onDelete(props.id)}
            href="#"
            className="red-bg tolt"
            data-microtip-position="left"
            data-tooltip="Delete"
          >
            <i className="fal fa-trash" />
          </a>
        </div>
        <div className="dashboard-message-text">
          {/* <img src={this.state.image} alt /> */}
          <h4>
            <a href="listing-single.html">{props.title}</a>
          </h4>
          <div className="geodir-category-location clearfix">
            <a href="#"> {props.subTitle}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemActionRowCard;
