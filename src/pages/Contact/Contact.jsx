import React from 'react';
import './Contact.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="contact-banner">
                <h1>Contact Us</h1>
            </section>

            <section className="contact-main">
                <div className="container contact-flex">
                    <div className="contact-info">
                        <img
                            src="https://vortex-organic.netlify.app/images/Contact-Img.png"
                            alt="Contact"
                            className="info-img"
                        />
                        <div className="info-text">
                            <h2>We'd love to talk about how we can work together.</h2>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                            <div className="info-cards">
                                <div className="contact-card">
                                    <div className="card-icon"><Mail color="#7EB693" /></div>
                                    <div>
                                        <h4>Message</h4>
                                        <span>support@organick.com</span>
                                    </div>
                                </div>
                                <div className="contact-card">
                                    <div className="card-icon"><Phone color="#7EB693" /></div>
                                    <div>
                                        <h4>Contact Us</h4>
                                        <span>+01 123 456 789</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="form-grid">
                            <div className="input-group">
                                <label>Full Name*</label>
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="input-group">
                                <label>Your Email*</label>
                                <input type="email" placeholder="example@yourmail.com" required />
                            </div>
                            <div className="input-group">
                                <label>Company*</label>
                                <input type="text" placeholder="yourcompany name here" required />
                            </div>
                            <div className="input-group">
                                <label>Subject*</label>
                                <input type="text" placeholder="how can we help" required />
                            </div>
                        </div>
                        <div className="input-group message-group">
                            <label>Message*</label>
                            <textarea placeholder="hello there,i would like to talk about how to..." required></textarea>
                        </div>
                        <button type="submit" className="btn-send">Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;