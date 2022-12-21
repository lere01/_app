import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency, dispatch, expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.cost
  }, 0)

  const checkBudget = (event) => {
    if (event.target.value <= totalExpenses) {
      alert("You cannot reduce the bugdet value lower than the spending")
    }
  }

  return (
    <div className="alert alert-dark">
      <span>
        <span style={{ marginRight: "20px" }}>Budget:</span>
        {currency}
        <input
          name="budget"
          id="budget"
          type="number"
          defaultValue={budget}
          max="20000"
          min={totalExpenses}
          step="10"
          onChange={event => dispatch({type: "SET_BUDGET", payload: event.target.value})}
          onClick={checkBudget}
          style={{
            maxWidth: "150px",
            marginLeft: "10px",
            border: "hidden",
            borderRadius: "5px",
            padding: "0",
            paddingLeft: "10px"
          }}
        ></input>
      </span>
    </div>
  );
};

export default Budget;
