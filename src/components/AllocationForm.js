import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = (props) => {
  const { dispatch, remaining, currency } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [action, setAction] = useState("Add");

  const checkCost = (event) => {
    if (event.target.value === "") {
      event.target.value = cost;
      alert(event.target.validationMessage);
    }
  };

  const submitEvent = (event) => {
    event.preventDefault();

    let incomplete = [name, cost, action].some((item) => item === "");

    if (incomplete) {
      alert("Please ensure that all necessary fields are filled.");
      return;
    }

    if (cost > remaining) {
      alert(`The value cannot exceed remaining funds  ${currency}` + remaining);
      setCost("");
      return;
    }

    const expense = {
      name: name,
      cost: parseInt(cost),
    };

    if (action === "Reduce") {
      dispatch({
        type: "RED_EXPENSE",
        payload: expense,
      });
    } else {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    }

    alert("Action completed.");
  };

  return (
    <div>
      <div className="row">
        <div style={{ display: "flex" }}>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Department
            </label>

            <select
              className="custom-select"
              id="inputGroupSelect01"
              onChange={(event) => setName(event.target.value)}
              style={{ width: "200px", paddingLeft: "10px" }}
            >
              <option defaultValue>Choose...</option>
              <option value="Marketing" name="marketing">
                {" "}
                Marketing
              </option>
              <option value="Sales" name="sales">
                Sales
              </option>
              <option value="Finance" name="finance">
                Finance
              </option>
              <option value="Human Resource" name="hr">
                HR
              </option>
              <option value="IT" name="it">
                IT
              </option>
              <option value="Admin" name="admin">
                Admin
              </option>
            </select>
          </div>

          <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Allocation
            </label>

            <select
              className="custom-select"
              id="inputGroupSelect02"
              onChange={(event) => setAction(event.target.value)}
              style={{
                marginRight: "2rem",
                width: "200px",
                paddingLeft: "10px",
              }}
              defaultValue="Add"
            >
              <option defaultValue value="Add" name="Add">
                Add
              </option>
              <option value="Reduce" name="Reduce">
                Reduce
              </option>
            </select>
          </div>

          <div className="input-group mb-3">
            <label class="input-group-text" htmlFor="cost">
              {currency}
            </label>
            <input
              required="required"
              type="number"
              id="cost"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
              onKeyUp={checkCost}
              style={{ paddingLeft: "10px" }}
            ></input>
          </div>

          <button
            className="btn btn-primary"
            onClick={(event) => submitEvent(event)}
            style={{ width: "100px", height: "40px" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
