import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="bg-dark text-white w-100 p-5 h-100">
            <h2>404 - Page Not Found!</h2>
            <p>The page you trying to reach does not exist, or has been moved.
        Please use the menus or the search box below to find what you are looking for.</p>
        <Link to="/"><button>Go Back</button></Link>

        </div>
    );
};

export default NotFound;