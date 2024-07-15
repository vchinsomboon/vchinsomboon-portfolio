import React, { useEffect, useState } from "react";
import "./Project.css";
import config from "../../config.js";

const Project1Tool = () => {
  const [data, setData] = useState(null);
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({
    PassengerId: 893,
    Pclass: 3,
    Name: "Wilkes, Mrs. James (Ellen Needs)",
    Sex: "female",
    Age: 47,
    SibSp: 1,
    Parch: 0,
    Ticket: "363272",
    Fare: 7,
    Cabin: "",
    Embarked: "S",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${config.API_BASE_URL}/api/data`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${config.API_BASE_URL}/api/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setResult(result);
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Send Data</button>
      <div className="data-container">
        {data ? <p>{data.message}</p> : <p>Loading...</p>}
        {result ? <p>{result.message}</p> : <p>Loading Post Result...</p>}
      </div>
    </form>
  );
};

export default Project1Tool;
