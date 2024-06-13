import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./table.css";

function Table() {
  const [planList, setPlanList] = useState([]);
  const navigate = useNavigate();
  const locationData = useLocation();

  useEffect(() => {
    const storedPlans = JSON.parse(localStorage.getItem("plan-details")) || [];
    setPlanList(storedPlans);
  }, []);

  function back() {
    navigate("/Todo");
  }

  return (
    <div>
      <div className="tablebox">
        <button onClick={back}>Back</button>
        <h3 id="heading">See All your Plans here</h3>
        <table>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {planList.map((plan, index) => (
              <tr key={index}>
                <td>{plan.plan}</td>
                <td>{plan.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
