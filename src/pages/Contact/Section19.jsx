import React from 'react';
import './Section19.css';
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';
import { FaPinterest } from "react-icons/fa";
import a8 from "../../assets/a8.jpg"

const Section19 = () => {
    return (
        <div className="Section19-section">
            <div className="Section19-container">

                <div className="Section19-img">
                    <img src={a8} alt="Fruit mix" />
                </div>

                <div className="Section19-info">
                    <h2 className="Section19-title">
                        We'd love to talk about how we can work together.
                    </h2>
                    <p className="Section19-desc">
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                        been the industry's standard dummy text ever since the 1500s.
                    </p>

                    <div className="info-box">
                        <div className="info-icon"><Mail color="#7EB693" /></div>
                        <div>
                            <h3>Message</h3>
                            <p>support@organic.com</p>
                        </div>
                    </div>

                    <div className="info-box">
                        <div className="info-icon"><Phone color="#7EB693" /></div>
                        <div>
                            <h3>Contact Us</h3>
                            <p>+01 123 456 789</p>
                        </div>
                    </div>

                    <div className="Section19-socials">
                        <div className="social-icon"><Instagram size={18} /></div>
                        <div className="social-icon"><Facebook size={18} /></div>
                        <div className="social-icon"><Twitter size={18} /></div>
                        <div className="social-icon"><FaPinterest size={18} /></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Section19;