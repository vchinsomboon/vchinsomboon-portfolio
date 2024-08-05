import React, { useEffect, useRef } from "react";
import "./Tableau.css";

const Tableau = ({ url }) => {
  const ref = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://public.tableau.com/javascripts/api/tableau-2.8.0.min.js"; // Use the latest version if available
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (ref.current && window.tableau) {
        new window.tableau.Viz(ref.current, url, {
          width: "100%", // Full width of the container
          height: "100%", // Full height of the container
          hideTabs: true,
          hideToolbar: true,
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return (
    <div
      ref={ref}
      className="tableau-container" // Add a class for specific styling
      style={{
        width: "100%",
        height: "80vh",
        maxWidth: "1200px",
        margin: "auto",
        padding: "40px 0px 40px 0px",
      }}
    >
      {/* Tableau visualization will be rendered here */}
    </div>
  );
};

export default Tableau;
