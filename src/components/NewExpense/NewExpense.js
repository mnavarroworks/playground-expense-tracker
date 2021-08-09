import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const MODES = {
  BROWSING: "BROWSE",
  ADDING: "ADDING",
};
const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [mode, setMode] = useState(MODES.BROWSING);

  const addNewExpenseButtonHandler = () => {
    setMode(MODES.ADDING);
  };

  const cancelAddExpenseHandler = () => {
    setMode(MODES.BROWSING);
  };

  return (
    <div className="new-expense">
      {mode === MODES.BROWSING && (
        <button onClick={addNewExpenseButtonHandler}>Add new expense</button>
      )}
      {mode === MODES.ADDING && (
        <ExpenseForm
          onCancelAddExpense={cancelAddExpenseHandler}
          onSaveExpenseData={onSaveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
