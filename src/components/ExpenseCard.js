function ExpenseCard(props) {
  return (
    <div className="expense-card">
      <h2>Expense #{props.num}</h2>
      <div>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default ExpenseCard;
