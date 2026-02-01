import React from 'react';
import './Section20.css';
import { MapPin } from 'lucide-react';

const Section20 = () => {
    return (
        <div className="loc-section">
            <div className="loc-card">

                <div className="loc-content">
                    <h4 className="loc-sub">Location</h4>
                    <h2 className="loc-title">Our Farms</h2>
                    <p className="loc-desc">
                        Established fact that a reader will be distracted by the readable
                        content of a page when looking a layout. The point of using.
                    </p>

                    <div className="loc-info">
                        <div className="loc-item">
                            <div className="loc-icon"><MapPin size={20} color="#7EB693" /></div>
                            <div>
                                <h4>New York, USA:</h4>
                                <p>299 Park Avenue New York, <br /> New York 10171</p>
                            </div>
                        </div>

                        <div className="loc-item">
                            <div className="loc-icon"><MapPin size={20} color="#7EB693" /></div>
                            <div>
                                <h4>London, UK:</h4>
                                <p>30 Stamford Street, <br /> London SE1 9LQ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section20;