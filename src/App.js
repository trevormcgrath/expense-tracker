import { useState } from "react";

import Modal from "./components/Modal";
import Cost from "./components/Cost";
import ExpensesCount from "./components/ExpensesCount";

import ExpenseList from "./components/ExpenseList";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [costTotal, setCostNumber] = useState(0);
  const [expenseCount, setExpenseNumber] = useState(0);
  const [expenseArray, setExpenseArray] = useState([]);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function addExpenseHandler(expenseData) {
    setCostNumber(costTotal + Number(expenseData.cost));
    setExpenseNumber(expenseCount + 1);
    setExpenseArray([...expenseArray, expenseData.description]);
  }

  return (
    <div className="project-container">
      <h1>Expense Tracker</h1>
      <div className="expense-totals">
        <div className="left">
          <button onClick={openModal}>Add an expense</button>
          {modalIsOpen ? (
            <Modal onAddExpense={addExpenseHandler} onCancel={closeModal} />
          ) : null}
        </div>
        <div className="right">
          <div>
            <p>
              Total expenses costs: $
              {costTotal > 0 ? <Cost cost={costTotal} /> : "0"}
            </p>
            <p>
              Total number of expenses:
              {expenseCount > 0 ? <ExpensesCount count={expenseCount} /> : " 0"}
            </p>
          </div>
        </div>
      </div>
      {expenseArray.length > 0 ? (
        <ExpenseList descriptions={expenseArray} />
      ) : null}
    </div>
  );
}

export default App;
