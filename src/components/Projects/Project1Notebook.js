import React from 'react';

const Project1Notebook = () => {
    return (
        <div className="notebook-container">
            <iframe
                title="Jupyter Notebook Viewer"
                src={`${process.env.PUBLIC_URL}/TITANIC_PREDICTION_DEA.html`}
                style={{ width: '100%', height: '600px', border: 'none' }}
            />
        </div>
    );
};

export default Project1Notebook;