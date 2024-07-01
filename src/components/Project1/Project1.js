import './Project1.css';
import config from '../../config.js';
import { useEffect, useState } from 'react';

const Project1 = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${config.API_BASE_URL}/api/data`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="project-1-container">
            <p>
                Project 1 Content Here
            </p>
            <h1>Data from Flask Backend</h1>
            {data ? <p>{data.message}</p> : <p>Loading...</p>}
        </div>
    );
};

export default Project1;
