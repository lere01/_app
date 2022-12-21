import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  return (
    <div
      className="alert"
      style={{
        backgroundColor: "#98FB98",
        color: "#ffffff",
        fontWeight: "bold",
      }}
    >
      <span
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ marginRight: "20px", padding: "0" }}>Currency:</span>
        <select
          className="form-select"
          name="currency"
          id="currency"
          defaultValue="£"
          style={{
            maxWidth: "150px",
            border: "hidden",
            padding: "0",
            paddingLeft: "10px",
            backgroundColor: "#98FB98",
            color: "#ffffff",
            cursor: "pointer",
            fontWeight: "bolder",
          }}
          onChange={(event) =>
            dispatch({ type: "CHG_CURRENCY", payload: event.target.value })
          }
        >
          <option value="$">$ Dollar</option>
          <option value="£">£ Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppee</option>
        </select>
      </span>
    </div>
  );
};

export default Currency;
