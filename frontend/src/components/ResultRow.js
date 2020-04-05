import React from "react";
const ResultRow = (props) => {
  const result = props.result;

  return (
    <div className="restmenu-item main lunch" style={{ left: 0, top: 0 }}>
      <a href="images/all/menu/1.jpg" className="restmenu-item-img image-popup">
        <img src="images/all/menu/1.jpg" alt />
      </a>
      <div className="restmenu-item-det">
        <div className="restmenu-item-det-header fl-wrap">
          <h4>
            {result.rank}.{result.athletes[0].country}
          </h4>
          <div className="restmenu-item-det-price">
            {result.totalTime || "No Time"}
          </div>
        </div>
        {<p>Bram Sikkens - Artuur Peters</p>}
      </div>
    </div>
  );
};

export default ResultRow;
