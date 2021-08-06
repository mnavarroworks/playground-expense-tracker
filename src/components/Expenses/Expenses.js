import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((expense) => (
        <ExpenseItem
          id={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        ></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;
