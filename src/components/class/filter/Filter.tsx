import React from "react";
export function Filter({ HandleFilteringData }:any) {
  return (
    <div id="filter">
      <div id="filter_tabs">
        <span className="all-filter" data-filter="all">
          All
        </span>
        <span className="instruments" data-filter="instruments">
          instruments
        </span>
        <span className="music" data-filter="music">
          music
        </span>
        <span className="home-appliance" data-filter="home-appliance">
          Home Appliance
        </span>
      </div>
      <div id="filter-search">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Product name"
          readOnly
          onClick={HandleFilteringData}
        />
      </div>
    </div>
  );
}
