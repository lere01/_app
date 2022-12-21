import React, { useContext } from "react";
import { TiDelete, TiPlus, TiMinus } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name, add = true) => {
    const expense = {
      name: name,
      cost: 10,
    };

    if (add === true) {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    } else {
      dispatch({
        type: "RED_EXPENSE",
        payload: expense,
      });
    }
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <TiPlus
          onClick={(event) => increaseAllocation(props.name)}
          size="2em"
          color="#ffffff"
          style={{backgroundColor:"green", borderRadius: "50%", padding: "5px", cursor: "pointer"}}
        >
          +
        </TiPlus>
      </td>
      <td>
        <TiMinus
          onClick={(event) => increaseAllocation(props.name, false)}
          size="2em"
          color="#ffffff"
          style={{backgroundColor:"#B22222", borderRadius: "50%", padding: "5px", cursor: "pointer"}}
        >
          -
        </TiMinus>
      </td>
      <td>
        <TiDelete size="3em" onClick={handleDeleteExpense} style={{cursor: "pointer", padding: "5px"}}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
