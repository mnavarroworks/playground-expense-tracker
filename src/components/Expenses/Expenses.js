import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filters, updateFilters] = useState("2020");
  const onFiltersChangeHandler = (filters) => {
    updateFilters(filters);
  };

  const itemsToDisplay = props.items.filter(
    (item) => item.date.getFullYear() === Number(filters)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filters}
        onFiltersChange={onFiltersChangeHandler}
      />
      <ExpensesChart expenses={itemsToDisplay}></ExpensesChart>
      <ExpensesList items={itemsToDisplay} />
    </Card>
  );
};

export default Expenses;
