import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const years = [2022, 2021, 2020, 2019];
  const yearChangeHandler = (event) => {
    props.onYearChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={yearChangeHandler} value={props.selected}>
          {years.map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
