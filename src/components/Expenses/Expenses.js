import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [year, setYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={year}
        onYearChange={filterChangeHandler}
      ></ExpensesFilter>
      {props.items.map((el) => (
        <ExpenseItem
          title={el.title}
          amount={el.amount}
          date={el.date}
          key={el.id}
        ></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;
