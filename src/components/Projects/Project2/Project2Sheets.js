import React from "react";
import tableauConfig from "./project2Config.js";
import { Grid } from "@chakra-ui/react";
import TableauSheets from "../TableauSheets.js";
import "../Tableau.css"; // Make sure this CSS file is included

const Project2Sheets = () => {
  return (
    <div className="content">
      <h3>Tableau Sheets</h3>
      <Grid templateColumns="repeat(2, 1fr)" gap={20} mt="20px" rowGap={80}>
        {tableauConfig.CIRRHOSIS_PROJECT.sheets.map((sheet, index) => (
          <React.Fragment key={index}>
            <div className="tableau-plot">
              <TableauSheets url={sheet.sheetUrl} />
            </div>
            <div className="sheet-description">
              <h4>{sheet.title}</h4>
              <p>{sheet.description}</p>
              {sheet.dataSummary && (
                <div className="data-summary">
                  <h5>Data Summary:</h5>
                  <ul>
                    {Object.entries(sheet.dataSummary).map(
                      ([key, value], i) => (
                        <li key={i}>
                          <strong>{key}:</strong> {value}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default Project2Sheets;
