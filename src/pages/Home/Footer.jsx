import React from 'react';
import "./Footer.css";
import logo from "../../assets/logo.png"
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-box text-right">
                    <h3>Contact Us</h3>
                    <div className="item">
                        <b>Email</b>
                        <p>needhelp@Organia.com</p>
                    </div>
                    <div className="item">
                        <b>Phone</b>
                        <p>666 888 888</p>
                    </div>
                    <div className="item">
                        <b>Address</b>
                        <p>88 road, borklyn street, USA</p>
                    </div>
                </div>

                <div className="footer-main">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                        <h2>Organick</h2>
                    </div>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing</p>
                    <div className="socials">
                        <div className="icon"><FaInstagram size={20} /></div>
                        <div className="icon"><FaFacebookF size={20} /></div>
                        <div className="icon"><FaTwitter size={20} /></div>
                        <div className="icon"><FaPinterest size={20} /></div>
                    </div>
                </div>

                <div className="footer-box text-left">
                    <h3>Utility Pages</h3>
                    <ul className="footer-links">
                        <li>Style Guide</li>
                        <li>404 Not Found</li>
                        <li>Password Protected</li>
                        <li>Licences</li>
                        <li>Changelog</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Copyright © <b>Organick</b></p>
            </div>
        </footer>
    );
};

export default Footer;