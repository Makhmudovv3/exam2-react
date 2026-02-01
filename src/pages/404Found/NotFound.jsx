import React from 'react';
import './NotFound.css';
import a10 from '../../assets/a10.png'
const NotFound = () => {
    const handleGoHome = () => {
        window.location.href = '/';
    };

    return (
        <div className="notfound-container">
            <div className="notfound-content">

                <div className="notfound-image">
                    <img src={a10} alt="Flower decoration" />
                </div>

                <div className="notfound-text-section">
                    <h1 className="notfound-code">404</h1>
                    <h2 className="notfound-title">Page not found</h2>
                    <p className="notfound-desc">
                        The page you are looking for doesn't exist or has been moved
                    </p>
                    <button className="notfound-btn" onClick={handleGoHome}>
                        Go to Homepage <span>→</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default NotFound;