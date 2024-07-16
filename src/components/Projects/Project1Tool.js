import React, { useState } from "react";
import "./Project.css";
import config from "../../config.js";

const Project1Tool = () => {
  const initialFormData = {
    PassengerId: 111,
    Pclass: 1,
    Name: "Doe, Mrs. Jane",
    Sex: "female",
    Age: 22,
    SibSp: 1,
    Parch: 1,
    Ticket: "3101298",
    Fare: 13,
    Cabin: "",
    Embarked: "S",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

  const handleReset = () => {
    setFormData(initialFormData);
    setResult(null);
  };

  return (
    <div className="titanic-container">
      <h2>Titanic Survival Predictor</h2>
      <p>
        Explore the factors that influenced survival aboard the Titanic. Input
        data to see predictions based on the machine learning model trained on
        Titanic passenger data. This tool aims to educate about the factors
        affecting survival rates and respectfully explore the outcomes based on
        data from the tragic event.
      </p>
      {result === null && (
        <>
          <h3>Enter Passenger Information</h3>
          <form className="prediction-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="Pclass" className="form-label">
                    Socio-economic status:
                  </label>
                  <select
                    id="Pclass"
                    name="Pclass"
                    className="form-select"
                    value={formData.Pclass}
                    onChange={handleChange}
                  >
                    <option value="1">Upper</option>
                    <option value="2">Middle</option>
                    <option value="3">Lower</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="Sex" className="form-label">
                    Sex:
                  </label>
                  <select
                    id="Sex"
                    name="Sex"
                    className="form-select"
                    value={formData.Sex}
                    onChange={handleChange}
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="Age" className="form-label">
                    Age:
                  </label>
                  <input
                    type="number"
                    id="Age"
                    name="Age"
                    className="form-control"
                    value={formData.Age}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Fare" className="form-label">
                    Fare purchased:
                  </label>
                  <select
                    id="Fare"
                    name="Fare"
                    className="form-select"
                    value={formData.Fare}
                    onChange={handleChange}
                  >
                    <option value="87">
                      1st Class - modern day average price $4,350 USD
                    </option>
                    <option value="13">
                      2nd Class - modern day average price $650 USD
                    </option>
                    <option value="7">
                      3rd Class - modern day average price $350 USD
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="SibSp" className="form-label">
                    Number of Siblings and Spouses aboard:
                  </label>
                  <input
                    type="number"
                    id="SibSp"
                    name="SibSp"
                    className="form-control"
                    value={formData.SibSp}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Parch" className="form-label">
                    Number of Parents or Children aboard:
                  </label>
                  <input
                    type="number"
                    id="Parch"
                    name="Parch"
                    className="form-control"
                    value={formData.Parch}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Embarked" className="form-label">
                    Port of Embarkation:
                  </label>
                  <select
                    id="Embarked"
                    name="Embarked"
                    className="form-select"
                    value={formData.Embarked}
                    onChange={handleChange}
                  >
                    <option value="S">Southampton</option>
                    <option value="C">Cherbourg</option>
                    <option value="Q">Queenstown</option>
                  </select>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Predict Survival
            </button>
          </form>
        </>
      )}
      {result !== null && (
        <div>
          <h2>
            {result ? (
              <>
                <p>The passenger is predicted to:</p>
                <strong>{result.prediction_result}</strong>
              </>
            ) : (
              <p>Loading Post Result...</p>
            )}
          </h2>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleReset}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Project1Tool;
