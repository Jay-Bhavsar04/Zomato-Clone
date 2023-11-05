import React from "react";
import "./filter.css";
import FilterItems from "./filterItems/filterItems";

const Filter = ({ filterList }) => {
  return (
    <div className="filters">
      {filterList &&
        filterList.map((filter) => {
          return <FilterItems filter={filter} key={filter.id} />;
        })}
    </div>
  );
};

export default Filter;
