import React from 'react';
import barPlotsMulti from './project_assets/bar_plots.png';  // Import the PNG file
import fareDistr from './project_assets/fare_dist.png';  // Import the PNG file
import ageDistr from './project_assets/age_dist.png';  // Import the PNG file
import dt_CM from './project_assets/confusion_matrix_DT.png';  // Import the PNG file
import rf_CM from './project_assets/confusion_matrix_RF.png';  // Import the PNG file
import dt_CR from './project_assets/DT_classification_report.png';  // Import the PNG file
import rf_CR from './project_assets/RF_classification_report.png';  // Import the PNG file

const Project1Article = () => {
    return (
        <div className="titanic-container">
            <div className="table-of-contents">
                <h2>Table of Contents</h2>
                <ul>
                    <li>Introduction</li>
                    <li>Data Exploration</li>
                    <li>Data Preprocessing</li>
                    <li>Feature Engineering</li>
                    <li>Model Building</li>
                    <li>Model Evaluation</li>
                    <li>Conclusion</li>
                </ul>
            </div>

            <div className="content">
                <div id="introduction" className="section">
                    <h2>1. Introduction</h2>
                    <p>
                        The sinking of the Titanic is one of the most infamous shipwrecks in history. One of the key factors that determined survival was whether passengers possessed certain characteristics that significantly influenced their chances of survival. This project aims to predict the survival of passengers based on various features available in the dataset.
                    </p>
                </div>

                <div id="data-exploration" className="section">
                    <h2>2. Data Exploration</h2>
                    <p>
                        First, let’s explore the data to understand its structure and identify any patterns. We will load the dataset and perform basic statistical analysis.
                    </p>
                    <div className="data-table">
                    <h3>Data Dictionary</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Variable</th>
                                    <th>Definition</th>
                                    <th>Key</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>PassengerId</td>
                                    <td>ID of the passenger</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Survived</td>
                                    <td>Survival</td>
                                    <td>0 = No, 1 = Yes</td>
                                </tr>
                                <tr>
                                    <td>Pclass</td>
                                    <td>Ticket class</td>
                                    <td>1 = 1st, 2 = 2nd, 3 = 3rd</td>
                                </tr>
                                <tr>
                                    <td>Sex</td>
                                    <td>Sex of the passenger</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Age</td>
                                    <td>Age of the passenger in years</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>SibSp</td>
                                    <td>Number of siblings/spouses aboard the Titanic</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Parch</td>
                                    <td>Number of parents/children aboard the Titanic</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Fare</td>
                                    <td>Passenger fare</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Embarked</td>
                                    <td>Port of Embarkation</td>
                                    <td>C = Cherbourg, Q = Queenstown, S = Southampton</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3>Exploratory Data Analysis:</h3>
                    <p>We start by examining the distribution of key features such as age and fare.</p>
                    <img src={ageDistr} alt="Age Distribution" style={{ width: '100%', maxWidth: '800px' }} />
                    <img src={fareDistr} alt="Fare Distribution" style={{ width: '100%', maxWidth: '800px' }} />
                    <p>We analyze each category's relationship with survival.</p>
                    <img src={barPlotsMulti} alt="Bar Plots" style={{ width: '100%', maxWidth: '800px' }} />

                    {/* Summary of Survival Rates */}
                    <h3>Summary of Survival Rates</h3>

                    <p>
                        <strong>Survival Rate by Passenger Class:</strong><br />
                        Passengers in 1st class had the highest survival rate.<br />
                        Passengers in 2nd class had a lower survival rate.<br />
                        Passengers in 3rd class had the lowest survival rate.<br />
                        <strong>Chi2 test for Passenger Class:</strong><br />
                        Chi2: 102.89, p-value: 4.549e-23<br />
                        Result: The relationship between Passenger Class and survival is significant (Reject H0)
                    </p>

                    <p>
                        <strong>Survival Rate by Sex:</strong><br />
                        Females had a significantly higher survival rate compared to males.<br />
                        <strong>Chi2 test for Sex:</strong><br />
                        Chi2: 260.72, p-value: 1.197e-58<br />
                        Result: The relationship between Sex and survival is significant (Reject H0)
                    </p>

                    <p>
                        <strong>Survival Rate by Fare:</strong><br />
                        Passengers who paid higher fares generally had higher survival rates.<br />
                        The highest survival rate was observed among those who paid fares between 50 and 100, and 100 and 600.<br />
                        <strong>Chi2 test for Fare:</strong><br />
                        Chi2: 425.81, p-value: 1.165e-11<br />
                        Result: The relationship between Fare and survival is significant (Reject H0)
                    </p>

                    <p>
                        <strong>Survival Rate by Age:</strong><br />
                        Children aged 0-10 had a higher survival rate.<br />
                        Survival rates decreased with age. Older age groups (70-80) had lower survival rates.<br />
                        <strong>Chi2 test for Age:</strong><br />
                        Chi2: 104.16, p-value: 0.101<br />
                        Result: The relationship between Age and survival is not significant (Fail to reject H0)<br />
                        Note: This means that while there is an observable trend where children had higher survival rates and older adults had lower survival rates, the statistical test suggests that this relationship could have occurred by random chance and may not be significant in predicting survival solely based on age.
                    </p>

                    <p>
                        <strong>Survival Rate by Embarked:</strong><br />
                        Passengers who embarked at 'C' (Cherbourg) had the highest survival rate.<br />
                        Passengers who embarked at 'Q' (Queenstown) had a moderate survival rate.<br />
                        Passengers who embarked at 'S' (Southampton) had the lowest survival rate.<br />
                        <strong>Chi2 test for Embarked:</strong><br />
                        Chi2: 26.49, p-value: 1.770e-06<br />
                        Result: The relationship between Embarked and survival is significant (Reject H0)
                    </p>

                    <p>
                        <strong>Survival Rate by Family Size:</strong><br />
                        Passengers with a family size of 1-3 had higher survival rates.<br />
                        Larger family sizes (5-6) had lower survival rates.<br />
                        Passengers with no family (family size of 0) had a moderate survival rate.<br />
                        Very large family sizes (7 and above) had lower survival rates.<br />
                        <strong>Chi2 test for Family Size:</strong><br />
                        Chi2: 80.67, p-value: 3.580e-14<br />
                        Result: The relationship between Family Size and survival is significant (Reject H0)
                    </p>
                </div>

                <div id="data-preprocessing" className="section">
                    <h2>3. Data Preprocessing</h2>
                    <p>
                        Before constructing the model, data preprocessing is essential. This process includes managing missing values, encoding categorical variables, and scaling numerical features.
                    </p>

                    <h3>Handling Missing Values:</h3>
                    <p>We replace missing numerical values with their mean, and for categorical values, we fill them with the most frequent value.</p>

                    <h3>Encoding Categorical Variables:</h3>
                    <p>We convert categorical variables such as 'Sex' and 'Embarked' into numerical values using one-hot encoding, dropping the first category to avoid multicollinearity.</p>

                    <h3>Feature Scaling:</h3>
                    <p>Numerical features such as 'Age' and 'Fare' are scaled to a range of 0 to 1 using Min-Max scaling to ensure uniformity in scale.</p>
                </div>

                <div id="feature-engineering" className="section">
                    <h2>4. Feature Engineering</h2>
                    <p>
                        Feature engineering involves creating new features or modifying existing ones to improve model performance.
                    </p>
                    <h3>Creating New Features:</h3>
                    <p>We can create new features such as 'Family Size' by combining 'SibSp' and 'Parch'. Another useful feature is 'IsAlone', which indicates whether a passenger is traveling alone if their 'FamilySize' is 1.</p>
                </div>

                <div id="model-building" className="section">
                    <h2>5. Model Building</h2>
                    <p>
                        With the data preprocessed and features engineered, we can now build our machine learning model. We will use a variety of algorithms to find the best model for our problem.
                    </p>
                    <h3>Algorithms:</h3>
                    <ul>
                        <li>Decision Tree</li>
                        <li>Random Forest</li>
                    </ul>
                    <p>We split the training data into training and validation sets to evaluate the performance of each model.
                        We employed grid search with cross-validation to identify the best-performing model. Grid search systematically evaluates combinations of hyperparameters specified in parameter grids, ensuring optimal model performance across various configurations.
                    </p>
                </div>

                <div id="model-evaluation" className="section">
                    <h2>6. Model Evaluation</h2>
                    <p>
                        We evaluate the models using metrics such as accuracy, precision, recall, and F1-score. The confusion matrix provides additional insights into the performance of our models.
                    </p>
                    <h3>Decision Tree</h3><br />
                    <img src={dt_CR} alt="DT Classification Report" style={{ width: '100%', maxWidth: '400px', display: 'block', margin: 'auto' }} />
                    <img src={dt_CM} alt="DT Confusion Matrix" style={{ width: '100%', maxWidth: '800px' }} />
                    <h3>Random Forest</h3><br />
                    <img src={rf_CR} alt="RF Classification Report" style={{ width: '100%', maxWidth: '400px', display: 'block', margin: 'auto' }} />
                    <img src={rf_CM} alt="RF Confusion Matrix" style={{ width: '100%', maxWidth: '800px' }} />
                    <p>Based on the evaluation metrics, the Random Forest model achieved a higher test set accuracy of 83% compared to the Decision Tree's 80%. It also demonstrated balanced precision, recall, and F1-score across survival and non-survival predictions, indicating superior performance in capturing true positives while minimizing false negatives. These results affirm the Random Forest model's effectiveness and reliability in predicting Titanic survival, thereby influencing its selection over the Decision Tree model for this study.</p>
                </div>

                <div id="conclusion" className="section">
                    <h2>7. Conclusion</h2>
                    <p>
                        In this project, we successfully built a machine learning model to predict Titanic survival. We explored the data, performed feature engineering, built various models, and evaluated their performance. The final model can be used to make predictions on new data.
                    </p>
                    <p>This project demonstrates a systematic approach to solving a machine learning problem and highlights the importance of data exploration and feature engineering in building effective models.</p>
                </div>
            </div>
        </div>
    );
};

export default Project1Article;
