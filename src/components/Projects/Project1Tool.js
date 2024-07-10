import { useEffect, useState } from 'react';
import './Project.css';
import config from '../../config.js';

const Project1Tool = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${config.API_BASE_URL}/api/data`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

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
        Embarked: "S"
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://your-flask-backend-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Send Data</button>
            <div className="data-container">
                                    {data ? <p>{data.message}</p> : <p>Loading...</p>}
                                </div>
        </form>
    );
};

export default Project1Tool;