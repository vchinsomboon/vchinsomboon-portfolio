import React from "react";
import Tableau from "../Tableau.js";
import "../Tableau.css";

const Project2VehicleDashboard = () => {
  return (
    <div className="content">
      <h3>California Light-Duty Vehicle Population 2010-2023</h3>
      <Tableau url="https://public.tableau.com/views/CaliforniaLight-DutyVehicleV2/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" />
      <br />
      <h4>Background</h4>
      <br />
      <p className="overview">
        This dashboard presents data on the Light-Duty Vehicle Population in
        California, updated annually in April to reflect the number of vehicles
        “on the road” during the previous calendar year.
        <br />
        <br />
        The visualizations in this dashboard include:
        <ul>
          <li>
            Vehicle Population Trends: Displays the total number of light-duty
            vehicles each year based on the selected fuel type.
          </li>
          <li>
            Regional Distribution: Shows vehicle population data at the county
            or ZIP code level.
          </li>
          <li>
            Percentage Increase: Illustrates the percentage increase in the
            vehicle population from 2010 to 2023.
          </li>
        </ul>
        These visualizations assist in understanding the distribution and trends
        of light-duty vehicles.
      </p>
    </div>
  );
};

export default Project2VehicleDashboard;
