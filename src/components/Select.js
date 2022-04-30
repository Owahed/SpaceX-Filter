import React from "react";

const Select = ({ filter }) => {
  return (
    <div className="select-container">
      <h3>Filter</h3>
      <div className="select-item">
        <div>
          <div>
            <p>Launch Year</p>
            <hr />
          </div>
          <div className="launch-btn">
            <button type="button" onClick={() => filter("2006")}>
              2006
            </button>
            <button type="button" onClick={() => filter("2007")}>
              2007
            </button>
            <button type="button" onClick={() => filter("2008")}>
              2008
            </button>
            <button>2009</button>
            <button>2010</button>
            <button>2011</button>
            <button>2012</button>
          </div>
        </div>
        <div>
          <div>
            <p>Successful Launch </p>
            <hr />
          </div>
          <div className="launch-btn">
            <button>True</button>
            <button>False</button>
          </div>
        </div>
        <div>
          <div>
            <p>Successful Landing </p>
            <hr />
          </div>
          <div className="launch-btn">
            <button>True</button>
            <button>False</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
