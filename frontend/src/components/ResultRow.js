import React, { useState, useEffect } from "react";
import { addAthleteToUser } from "../services/UserService";

const ResultRow = (props) => {
  const result = props.result;
  let _isMounted = false;

  const onNameClick = (athletename) => {
    const userid = JSON.parse(localStorage.getItem("user")).id;
    addAthleteToUser(userid, athletename);
  };

  const [flagUrl, setflagUrl] = useState("");

  useEffect(
    function () {
      _isMounted = true;
      fetch(
        "https://restcountries.eu/rest/v2/alpha/" +
          result.athletes[0].country +
          "?fields=flag"
      )
        .then((res) => res.json())
        .then((res) => {
          if (_isMounted) {
            setflagUrl(res.flag);
          }
        });

      return function cleanup() {
        _isMounted = false;
      };
    },

    []
  );

  return (
    <div className="restmenu-item main lunch" style={{ left: 0, top: 0 }}>
      <a href="images/all/menu/1.jpg" className="restmenu-item-img image-popup">
        <img src={flagUrl} />
      </a>
      <div className="restmenu-item-det" style={{ textAlign: "left" }}>
        <div className="restmenu-item-det-header fl-wrap">
          <h4>{result.rank}</h4>
          <div className="restmenu-item-det-price">
            {result.totalTime || "No Time"}
          </div>
        </div>
        {result.athletes.length > 0 ? (
          result.athletes.map((athlete) => {
            return (
              <>
                <a
                  onClick={(e) => {
                    onNameClick(e.target.innerHTML);
                  }}
                  href="#"
                >
                  {athlete.Name}
                </a>
                <br></br>
              </>
            );
          })
        ) : (
          <p>geen naam</p>
        )}
      </div>
    </div>
  );
};

export default ResultRow;
