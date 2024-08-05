import React from "react";
import Tableau from "../Tableau.js";
import "../Tableau.css";

const Project2Dashboard = () => {
  return (
    <div className="content">
      <h3>Cirrhosis Exploratory Data Analysis Dashboard</h3>
      <Tableau url="https://public.tableau.com/views/Cirrhosis_sheets/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" />
      <br />
      <h4>Background</h4>
      <br />
      <p className="overview">
        This dashboard presents data from a Mayo Clinic trial conducted between
        1974 and 1984 on primary biliary cirrhosis (PBC) of the liver. PBC is a
        chronic disease that causes the bile ducts in the liver to become
        inflamed, damaged, and ultimately destroyed.
        <br />
        <br />
        A total of 424 PBC patients, referred to Mayo Clinic during that
        ten-year interval, met eligibility criteria for the randomized
        placebo-controlled trial. The first 312 cases in the dataset
        participated in the randomized trial and contain largely complete data.
        The additional 112 cases did not participate in the trial but consented
        to have basic measurements recorded and to be followed for survival. Six
        of those cases were lost to follow-up shortly after diagnosis, resulting
        in data on an additional 106 cases as well as the 312 randomized
        participants.
        <br />
        <br />
        The visualizations in this dashboard include:
        <ul>
          <li>
            Scatter Plot of Bilirubin vs. Prothrombin: Examines the relationship
            between bilirubin levels and prothrombin times, categorized by
            patient status (C, CL, D).
          </li>
          <li>
            Survival Rate by Drug Type: Compares survival rates between patients
            treated with D-penicillamine and those given a placebo.
          </li>
          <li>
            Survival Rate by Presence of Edema: Shows survival rates based on
            edema presence and severity.
          </li>
          <li>
            Sex Distribution: Displays the distribution of patients by sex.
          </li>
          <li>
            Age Distribution: Illustrates the age distribution of patients.
          </li>
          <li>
            Heat Map of Disease Stage by Drug Type: Shows the distribution of
            disease stages among patients treated with D-penicillamine vs.
            placebo.
          </li>
        </ul>
        These visualizations help in understanding the demographic
        characteristics of the patient population, the progression of the
        disease, and the potential impact of the treatment.
      </p>
    </div>
  );
};

export default Project2Dashboard;
