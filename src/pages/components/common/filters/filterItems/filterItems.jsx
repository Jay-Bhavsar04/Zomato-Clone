import React from "react";
import "./filterItems.css";

const FilterItems = ({ filter }) => {
  return (
    <div className="filter-items cur-po">
      {filter.icon && filter.icon}
      <div className="filter-name">{filter.title}</div>
    </div>
  );
};

export default FilterItems;
