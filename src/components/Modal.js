import { useRef } from "react";

function ExpenseModal(props) {
  const costInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const theCost = costInputRef.current.value;
    const theDescription = descriptionInputRef.current.value;

    if (theCost !== "" && theDescription !== "") {
      const expenseData = {
        cost: theCost,
        description: theDescription,
      };

      props.onAddExpense(expenseData);
      props.onCancel();
    }
  }

  return (
    <div className="expense-modal">
      <div className="inner">
        <form className="expense-form" onSubmit={submitHandler}>
          <div className="input-group">
            <label htmlFor="cost">Cost:</label>
            <input type="number" placeholder="" id="cost" ref={costInputRef} />
          </div>
          <div className="input-group">
            <label htmlFor="description">Description:</label>
            <textarea
              type="text"
              placeholder=""
              rows="3"
              id="description"
              ref={descriptionInputRef}
            />
          </div>
          <div>
            <button className="btn btn--yes">Submit Expense</button>
          </div>
        </form>
        <div className="actions">
          <button className="btn btn--no" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseModal;
