import ExpenseItem from "../Expenses/ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  if (props.items.length > 0) {
    return (
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          ></ExpenseItem>
        ))}
      </ul>
    );
  }
};

export default ExpensesList;
