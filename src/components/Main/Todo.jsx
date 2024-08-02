import React, { useEffect, useState } from "react";
import "./todo.css";
import { useNavigate } from "react-router-dom";
import datelogo from "../../images/Date.png";

function Todo() {
  const [planList, setPlanList] = useState([]);
  const navigate = useNavigate();
  const onFormSubmit = (e) => {
    e.preventDefault();
    let planObject = Object.fromEntries(new FormData(e.target));
    setPlanList([...planList, planObject]);
    alert("Plan Added");
<<<<<<< HEAD
    const existingPlan = JSON.parse(localStorage.getItem("plan-details")) || [];
    existingPlan.push(planObject);
    localStorage.setItem("plan-details", JSON.stringify(existingPlan));
  };

=======
  };

  useEffect(() => {
    const existingPlan= JSON.parse(localStorage.getItem("plan-details")) || [];
    setPlanList(existingPlan);
  }, []);
  useEffect(()=>{
    localStorage.setItem("plan-details", JSON.stringify(planList));
  },[planList])


>>>>>>> 3b635e1 (Your commit message)
  const displayTable = () => {
    navigate("/Table", { state: { planObject: planList } });
  };

  return (
    <div className="mainbox">
      <div className="todobox">
        <h1>Plan Your Day</h1>
        <form onSubmit={onFormSubmit}>
          <textarea
            name="plan"
            placeholder="Enter Your Today's Plan"
            required
          ></textarea>
          <label>Select Date and Time</label>
          <input type="datetime-local" name="date" required />
          <br />
          <input className="btn" type="submit" value="ADD +" />
        </form>
      </div>
      <img src={datelogo} alt="img" />
      <button className="showbutton" onClick={displayTable}>
        Show Table
      </button>
    </div>
  );
}

export default Todo;
