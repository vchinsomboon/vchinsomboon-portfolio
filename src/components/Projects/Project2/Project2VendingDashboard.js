import React from "react";
import Tableau from "../Tableau.js";
import "../Tableau.css";

const Project2VendingDashboard = () => {
  return (
    <div className="content">
      <h3>Vending Machine Data Overview</h3>
      <Tableau url="https://public.tableau.com/shared/CZ4GRJR8D?:display_count=n&:origin=viz_share_link" />
      <br />
      <h4>Background</h4>
      <br />
      <p className="overview">
        This dataset provides insights into vending machine transactions across
        various locations in Central New Jersey, including libraries, malls,
        office buildings, and manufacturing sites. It includes:
        <br />
        <ul>
          <li>
            The count of products by category, which updates dynamically based
            on date selection.
          </li>
          <li>
            Total USD from transactions by category, also updating with date
            selection.
          </li>
          <li>
            A line graph showing total USD transactions by month, highlighting
            trends over time.
          </li>
        </ul>
        The data helps to analyze trends, user behavior, and consumer
        preferences across different settings.
      </p>
    </div>
  );
};

export default Project2VendingDashboard;
