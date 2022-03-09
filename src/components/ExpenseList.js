import ExpenseCard from "./ExpenseCard";

function ExpenseList(props) {
  var descriptions = props.descriptions;
  return (
    <div className="expense-grid">
      {descriptions.map((description, i) => {
        return <ExpenseCard key={i} num={i + 1} desc={description} />;
      })}
    </div>
  );
}

export default ExpenseList;
