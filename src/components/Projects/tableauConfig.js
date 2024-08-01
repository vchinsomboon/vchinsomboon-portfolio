const tableauConfig = {
  CIRRHOSIS_PROJECT: {
    dashboardUrl:
      "https://public.tableau.com/views/Cirrhosis_sheets/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    sheets: [
      {
        title: "Scatter Plot of Bilirubin vs. Prothrombin",
        description:
          "This scatter plot shows the relationship between serum bilirubin levels and prothrombin time in seconds. Different status categories (C, CL, D) are color-coded to show survival outcomes.",
        dataSummary: {
          "X-axis": "Bilirubin (mg/dl)",
          "Y-axis": "Prothrombin (seconds)",
          Categories:
            "C (censored), CL (censored due to liver transplant), D (death)",
          Trend:
            "For status D, there is a significant positive correlation between bilirubin and prothrombin (p-value = 0.0019819). For status CL, the correlation is negative but not statistically significant (p-value = 0.134931), and for status C, there is no significant correlation (p-value = 0.271676).",
        },
        sheetUrl:
          "https://public.tableau.com/views/Cirrhosis_sheets/Sheet4?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      },
      {
        title: "Survival Rate by Drug Type",
        description:
          "This bar chart compares the proportion of different status types (C, CL, D) between two drug groups: D-penicillamine and placebo.",
        dataSummary: {
          "X-axis": "Drug Type (D-penicillamine, Placebo)",
          "Y-axis": "Proportion of Status Type",
          Categories:
            "C (censored), CL (censored due to liver transplant), D (death)",
          Findings:
            "In the D-penicillamine group, the proportions are D: 41.91%, CL: 6.62%, C: 51.47%. In the placebo group, the proportions are D: 38.57%, CL: 6.43%, C: 55%. Both drug types show similar distributions, with a slightly higher proportion of deaths (D) in the D-penicillamine group compared to the placebo group.",
        },
        sheetUrl:
          "https://public.tableau.com/views/Cirrhosis_sheets/Sheet2?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      },
      {
        title: "Survival Rate by Presence of Edema",
        description:
          "This bar chart shows the proportion of survival statuses (C, CL, D) categorized by the presence and severity of edema. Edema is classified as follows: N (no edema and no diuretic therapy for edema), S (edema present without diuretics or edema resolved by diuretics), or Y (edema despite diuretic therapy).",
        dataSummary: {
          "X-axis": "Edema Presence (N, S, Y)",
          "Y-axis": "Proportion of Status Type",
          Categories:
            "C (censored), CL (censored due to liver transplant), D (death)",
          Findings:
            "The data indicates a strong link between edema severity and higher mortality. Those with edema despite diuretic therapy (Y) have a mortality rate of 94.12%, with only 5.88% censored. In comparison, individuals without edema (N) show a more balanced status: 59.4% censored, 6.84% censored due to liver transplant, and 33.76% deceased. For edema present without diuretics or resolved by diuretics (S), the mortality rate is 64%, with 28% censored and 8% censored due to liver transplant. This suggests that persistent edema despite treatment is strongly associated with the highest mortality rates.",
        },
        sheetUrl:
          "https://public.tableau.com/views/Cirrhosis_sheets/Sheet3?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      },
      {
        title: "Sex Distribution",
        description:
          "This bar chart displays the count of male (M) and female (F) patients in the dataset.",
        dataSummary: {
          "X-axis": "Sex (M, F)",
          "Y-axis": "Count of Sex",
          Findings: "The majority of patients are female (F).",
        },
        sheetUrl:
          "https://public.tableau.com/views/Cirrhosis_sheets/Sheet6?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      },
      {
        title: "Age Distribution",
        description:
          "This histogram shows the distribution of patient ages in the dataset.",
        dataSummary: {
          "X-axis": "Age Years (bins)",
          "Y-axis": "Count of Age Years",
          Findings:
            "The age distribution shows a peak around the 40-60 age range, indicating most patients are middle-aged.",
        },
        sheetUrl:
          "https://public.tableau.com/views/Cirrhosis_sheets/Sheet1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      },
      {
        title: "Heat Map of Disease Stage by Drug Type",
        description:
          "This heat map visualizes the distribution of histologic disease stages (1 through 4) for patients categorized by drug type (D-penicillamine versus Placebo).",
        dataSummary: {
          "X-axis": "Drug Type (D-penicillamine, Placebo)",
          "Y-axis": "Disease Stage (1, 2, 3, 4)",
          Findings:
            "The heat map shows the distribution of histologic stages among patients receiving D-penicillamine and those on placebo. For D-penicillamine, the counts are: Stage 1 (9), Stage 2 (31), Stage 3 (51), and Stage 4 (45). For placebo, the counts are: Stage 1 (3), Stage 2 (28), Stage 3 (60), and Stage 4 (49). This distribution provides a snapshot of the stage of disease among the two groups, with varying numbers across each histologic stage..",
        },
        sheetUrl:
          "https://public.tableau.com/views/Cirrhosis_sheets/Sheet5?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      },
    ],
  },
};

export default tableauConfig;
