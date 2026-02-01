import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notfound-page">
            <div className="notfound-container">
                <div className="notfound-image">
                    <img src="https://vortex-organic.netlify.app/images/404-img.png" alt="404 Not Found" />
                </div>

                <div className="notfound-content">
                    <h1 className="error-code">404</h1>
                    <h2 className="error-text">Page not found</h2>
                    <p className="error-desc">
                        The page you are looking for doesn't exist or has been moved.
                    </p>
                    <Link to="/" className="btn-home">
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;