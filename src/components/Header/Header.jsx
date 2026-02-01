import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, ChevronDown } from 'lucide-react';
import logo from "../../assets/logo.png";
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">
                    <img src={logo} alt="Organick Logo" />
                    <h1>Organick</h1>
                </Link>

                <nav className="menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <div className="actions">
                    <div className="search">
                        <input type="text" />
                        <button className="s-btn">
                            <Search size={18} />
                        </button>
                    </div>

                    <div className="cart">
                        <div className="c-icon">
                            <ShoppingCart size={20} />
                        </div>
                        <span className="c-text">Cart (0)</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;